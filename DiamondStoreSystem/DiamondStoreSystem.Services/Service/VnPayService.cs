using DiamondStoreSystem.Business.Interface;
using DiamondStoreSystem.Business.IService;
using DiamondStoreSystem.Common;
using DiamondStoreSystem.Common.Helper;
using DiamondStoreSystem.DTO.Entities;
using DiamondStoreSystem.DTO.EntitiesRequest.Order;
using DiamondStoreSystem.DTO.EntitiesResponse.Order;
using DiamondStoreSystem.Repository;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;

namespace DiamondStoreSystem.Business.Service
{
    public class VnPayService : IVnPayService
    {
        private readonly IConfiguration _config;
        private readonly IGenericRepository<VnPaymentResponse> _responseRepository;
        public VnPayService(IConfiguration config)
        {
            _config = config;
        }
        public string CreatePaymentUrl(HttpContext context, VnPaymentRequest model)
        {
            var tick = DateTime.Now.Ticks.ToString();
            var vnpay = new VnPayLibrary();
            vnpay.AddRequestData("vnp_Version", _config["VnPay:Version"]);
            vnpay.AddRequestData("vnp_Command", _config["VnPay:Command"]);
            vnpay.AddRequestData("vnp_TmnCode", _config["VnPay:TmnCode"]);
            vnpay.AddRequestData("vnp_Amount", (model.Amount * 100).ToString());
            vnpay.AddRequestData("vnp_CreateDate", model.CreatedDate.ToString("yyyyMMddHHmmss"));
            vnpay.AddRequestData("vnp_CurrCode", _config["VnPay:CurrCode"]);
            vnpay.AddRequestData("vnp_IdAddr", Utils.GetIpAddress(context));
            vnpay.AddRequestData("vnp_Locate", _config["VnPay:Locate"]);
            vnpay.AddRequestData("vnp_OrderInfo", "Pay Order:" + model.OrderId);
            vnpay.AddRequestData("vnp_OrderType", "other"); //default value: other
            vnpay.AddRequestData("vnp_ReturnUrl", _config["VnPay:PaymentBackReturnUrl"]);
            vnpay.AddRequestData("vnp_TxnRef", tick);

            var paymentUrl = vnpay.CreateRequestUrl(_config["VnPay:BaseUrl"], _config["VnPay:HashSecret"]);
            return paymentUrl;
        }

        public IDSSResult PaymentExecute(IQueryCollection collections)
        {
            try
            {
                var vnpay = new VnPayLibrary();
                foreach (var (key, value) in collections)
                {
                    if (!string.IsNullOrEmpty(key) && key.StartsWith("vnp_"))
                    {
                        vnpay.AddResponseData(key, value.ToString());
                    }
                }
                var vnp_OrderId = Convert.ToInt64(vnpay.GetResponseData("vnp_TxnRef"));
                var vnp_TransactionId = Convert.ToInt64(vnpay.GetResponseData("vnp_TransactionNo"));
                var vnp_SecureHash = collections.FirstOrDefault(p => p.Key == "vnp_SecureHash").Value;
                var vnp_responseCode = vnpay.GetResponseData("vnp_ResponseCode");
                var vnp_OrderInfo = vnpay.GetResponseData("vnp_OrderInfo");
                bool checkSignature = vnpay.ValidateSignature(vnp_SecureHash, _config["VnPay:HashSecret"]);
                if (!checkSignature)
                {
                    return new DSSResult(Const.FAIL_CREATE_CODE, Const.FAIL_CREATE_MSG);
                }
                var vnpayResponse = new VnPaymentResponse
                {
                    Success = true,
                    PaymentMethod = "VnPay",
                    OrderDescription = vnp_OrderInfo,
                    VnpOrderId = vnp_OrderId.ToString(),
                    TransactionId = vnp_TransactionId.ToString(),
                    Token = vnp_SecureHash,
                    VnPayResponseCode = vnp_responseCode,
                };
                _responseRepository.Insert(vnpayResponse);
                var check = _responseRepository.Save();
                if (check <= 0)
                {
                    return new DSSResult(Const.FAIL_CREATE_CODE, Const.FAIL_CREATE_MSG);
                }
                return new DSSResult(Const.SUCCESS_CREATE_CODE, Const.SUCCESS_CREATE_MSG, vnpayResponse);
            }
            catch (Exception ex)
            {
                return new DSSResult(Const.ERROR_EXCEPTION, ex.Message);
            }
        }
    }
}
