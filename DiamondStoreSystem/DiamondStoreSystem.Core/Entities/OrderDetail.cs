using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DiamondStoreSystem.DTO.Entities
{
    public class OrderDetail
    {
        [Key]
        public string OrderDetailID { get; set; }
        public string DiamondID { get; set; }
        public string OrderID { get; set; }
        public int Quantity { get; set; }
        public double Price { get; set; }
        public Order Order { get; set; }
        public Diamond Diamond{ get; set; }
        public bool Block { get; set; }
        public string? AccessoryID { get; set; }
        public Accessory? Accessory { get; set; }
    }
}
