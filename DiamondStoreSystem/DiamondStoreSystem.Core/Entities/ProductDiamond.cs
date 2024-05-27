using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DiamondStore.Data.Entities
{
    public class ProductDiamond
    {
        [Key]
        public string ProductDiamondID { get; set; }
        public string DiamondID { get; set; }
        public string ProductID { get; set; }
        public int DiamondQuantity { get; set; }

        public Diamond Diamond { get; set; }
        public Product Product { get; set; }
        public bool Status { get; set; } = true;
    }
}
