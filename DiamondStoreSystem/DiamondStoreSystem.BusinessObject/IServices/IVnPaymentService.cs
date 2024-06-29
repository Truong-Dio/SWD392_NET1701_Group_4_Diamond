using DiamondStoreSystem.BusinessLayer.Commons;
using DiamondStoreSystem.BusinessLayer.ResquestModels;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DiamondStoreSystem.BusinessLayer.IServices
{
    public interface IVnPaymentService
    {
        string CreatePaymentUrl(HttpContext context, VnPaymentRequestModel model);
        IDSSResult PaymentExecute(IQueryCollection collections);
    }
}
