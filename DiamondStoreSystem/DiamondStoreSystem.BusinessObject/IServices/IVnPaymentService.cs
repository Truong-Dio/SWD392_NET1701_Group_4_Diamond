using DiamondStoreSystem.BusinessLayer.Commons;
using DiamondStoreSystem.BusinessLayer.ResquestModels;
using DiamondStoreSystem.DataLayer.Models;
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
        public IDSSResult CreateTemporary(VnPaymentResponse vnPaymentResponse);
        public IDSSResult UpdatePayment(IQueryCollection collections);
    }
}
