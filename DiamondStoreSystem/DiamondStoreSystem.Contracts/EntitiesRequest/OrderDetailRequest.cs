using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DiamondStoreSystem.DTO.EntitiesRequest
{
    public class OrderDetailRequest
    {
        [Key]
        public string OrderDetailID { get; set; }
        public string ProductID { get; set; }
        public string OrderID { get; set; }
        public int Quatity { get; set; }
        public double Price { get; set; }
        public bool Status { get; set; } = true;
    }
}
