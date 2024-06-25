using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DiamondStoreSystem.DTO.Entities
{
    public class VnPaymentResponse
    {
        public bool Success { get; set; }
        public string PaymentMethod { get; set; }
        public string OrderDescription { get; set; }
        [Key]
        public string VnpOrderId { get; set; }
        public string PaymentId { get; set; } = string.Empty;
        public string TransactionId { get; set; }
        public string Token { get; set; }
        public string VnPayResponseCode { get; set; }

    }
}
