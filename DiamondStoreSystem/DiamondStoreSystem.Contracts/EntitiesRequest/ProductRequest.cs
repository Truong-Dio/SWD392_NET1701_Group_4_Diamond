using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DiamondStoreSystem.DTO.EntitiesRequest
{
    public class ProductRequest
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
        public bool Status { get; set; } = true;
    }
}
