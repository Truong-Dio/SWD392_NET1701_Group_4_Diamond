using DiamondStoreSystem.DataLayer.Models;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DiamondStoreSystem.BusinessLayer.ResponseModels
{
    public class ProductResponseModel
    {
        public string ProductID { get; set; }
        public double Price { get; set; }
        public bool Block { get; set; }
        public string AccessoryID { get; set; }
        public string WarrantyID { get; set; }
        public string OrderID { get; set; }
        public Accessory Accessory { get; set; }
        public Warranty Warranty { get; set; }
        public string DiamondID { get; set; }
        public Diamond MainDiamond { get; set; }
        public Order Order { get; set; }

        public ICollection<SubDiamond> SubDiamonds { get; set; }
    }
}
