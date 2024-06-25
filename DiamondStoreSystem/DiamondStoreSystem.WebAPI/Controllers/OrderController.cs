using AutoMapper;
using DiamondStoreSystem.Business.IService;
using DiamondStoreSystem.Business.Service;
using DiamondStoreSystem.DTO.Entities;
using DiamondStoreSystem.DTO.EntitiesRequest.Account;
using DiamondStoreSystem.DTO.EntitiesRequest.Order;
using DiamondStoreSystem.DTO.EntitiesRequest.Product;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using QRCoder;
using System;
using System.IO;
using System.Text;
using System.Text.Json;

namespace DiamondStoreSystem.WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrderController : ControllerBase
    {
        private readonly IVnPayService _vnPayService;
        private readonly IOrderService _orderService;
        public OrderController(IOrderService orderService, IVnPayService vnPayService)
        {
            _vnPayService = vnPayService;
            _orderService = orderService;
        }

        [HttpPost("CreatePaymentUrl")]
        public IActionResult CreatePaymentUrl([FromBody] VnPaymentRequest model)
        {
            if(!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            var paymentUrl = _vnPayService.CreatePaymentUrl(HttpContext, model);

            using (var qrGenerator = new QRCodeGenerator())
            using (var qrCodeData = qrGenerator.CreateQrCode(paymentUrl, QRCodeGenerator.ECCLevel.Q))
                using(var qrCode = new QRCode(qrCodeData))
                using(var qrCodeImage = qrCode.GetGraphic(20))
            {
                using (var ms = new MemoryStream())
                {
                    qrCodeImage.Save(ms, System.Drawing.Imaging.ImageFormat.Png);
                    var qrCodeBase64 = Convert.ToBase64String(ms.ToArray());
                    var qrCodeImageUrl = $"data:image/png;base64;{qrCodeBase64}";

                    return Ok(new { paymentUrl, qrCodeImageUrl });
                }
            }
        }

        [HttpGet("PaymentExecute")]
        public IActionResult PaymentExecute()
        {
            var queryCollection = HttpContext.Request.Query;
            var result = _vnPayService.PaymentExecute(queryCollection);
            if (result.Status <= 0)
            {
                return Ok(result);
            }
            var vnp = result.Data as VnPaymentResponse;
            if (vnp.Success)
            {
                _orderService.UpdateStatus(vnp.OrderDescription.Substring(vnp.OrderDescription.IndexOf(":") + 1), Common.Enum.OrderStatus.Paid);
                return Ok(result);
            }
            else
            {
                return BadRequest(result);
            }
        }

        [HttpGet("GetAll")]
        public IActionResult GetAllOrder()
        {
            var result = _orderService.Get();
            return Ok(result);
        }

        [HttpGet("GetById")]
        public IActionResult GetOrder(string id)
        {
            return Ok(_orderService.GetByID(id));
        }

        [HttpGet("GetByAccountId")]
        public IActionResult GetByAccountId(string id)
        {
            return Ok(_orderService.GetOrdersByAccountID(id));
        }

        [HttpPost("Create")]
        public IActionResult CreateOrder([FromBody] OrderRequest request)
        {
            var value = HttpContext.Session.Get("accId");
            var userJson = Encoding.UTF8.GetString(value);
            var user = JsonConvert.DeserializeObject<AccountLogin>(userJson);
            request.AccountID = user.AccountID;
            return Ok(_orderService.Add(request));
        }

        [HttpPut("Update")]
        public IActionResult UpdateOrder(string orderID, [FromBody] OrderRequest request)
        {
            request.OrderID = orderID;
            return Ok(_orderService.Update(request));
        }

        [HttpDelete("Delete")]
        public IActionResult DeleteOrder(string orderID)
        {
            return Ok(_orderService.Delete(orderID));
        }

        [HttpDelete("HardDelete")]
        public IActionResult HardDelete(string orderID)
        {
            return Ok(_orderService.HardDelete(orderID));
        }
    }
}
