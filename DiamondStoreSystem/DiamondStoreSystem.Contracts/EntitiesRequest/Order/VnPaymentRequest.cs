using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DiamondStoreSystem.DTO.EntitiesRequest.Order
{
    public class VnPaymentRequest
    {
        public string OrderId { get; set; }
        public string Description { get; set; } = string.Empty;
        public double Amount { get; set; }
        public DateTime CreatedDate { get; set; }
    }
}
