using DiamondStoreSystem.DTO.EntitiesRequest.Order;
using DiamondStoreSystem.DTO.EntitiesResponse.Order;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;

namespace DiamondStoreSystem.Business.IService
{
    public interface IVnPayService
    {
        string CreatePaymentUrl(HttpContext context, VnPaymentRequestModel model);
        VnPaymentResponseModel PaymentExecute(IQueryCollection collections);

    }
}
