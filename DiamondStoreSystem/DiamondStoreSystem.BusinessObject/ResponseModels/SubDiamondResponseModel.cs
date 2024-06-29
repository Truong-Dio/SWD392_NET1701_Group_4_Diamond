using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DiamondStoreSystem.BusinessLayer.ResponseModels
{
    public class SubDiamondResponseModel
    {
        public string ProductID { get; set; }
        public double Price { get; set; }

        public string AccessoryID { get; set; }
        public string WarrantyID { get; set; }
        public string OrderID { get; set; }
        public AccessoryResponseModel Accessory { get; set; }
        public WarrantyResponseModel Warranty { get; set; }
        public DiamondResponseModel MainDiamond { get; set; }
        public ICollection<SubDiamondResponseModel> SubDiamonds { get; set; }
    }
}
