using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DiamondStore.Data.Entities
{
    public class Product
    {
        [Key]
        public string ProductID { get; set; }
        [Required]
        public string ProductName { get; set; }
        public string? ProductDescription { get; set; }
        [Required]
        public string SKU { get; set; }
        public int UnitInStock { get; set; } = 0;
        public string? AccessoryId { get; set; }
        public Accessory? Accessory { get; set; }
        public ICollection<OrderDetail> OrderDetails { get; set; }
        public ICollection<ProductDiamond> ProductDiamonds { get; set; }
        public bool Status { get; set; } = true;
    }
}
