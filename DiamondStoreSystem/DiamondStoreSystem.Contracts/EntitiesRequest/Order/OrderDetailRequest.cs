using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DiamondStoreSystem.DTO.EntitiesRequest.Order
{
    public class OrderDetailRequest
    {
        public string OrderDetailID { get; set; }
        public string DiamondID { get; set; }
        public string OrderID { get; set; }
        public int Quantity { get; set; }
        public double Price { get; set; }
        public string AccessoryID { get; set; }
    }
}
