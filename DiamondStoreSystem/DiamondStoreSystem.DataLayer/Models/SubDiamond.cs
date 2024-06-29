using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DiamondStoreSystem.DataLayer.Models
{
    public class SubDiamond
    {
        public string SubDiamondID { get; set; }
        public string ProductID { get; set; }
        public string DiamondID { get; set; }
        [ForeignKey("ProductID")]
        public Product Product { get; set; }

        [ForeignKey("DiamondID")]
        public Diamond Diamond { get; set; }
    }
}
