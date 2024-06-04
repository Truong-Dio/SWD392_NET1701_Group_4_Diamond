using DiamondStoreSystem.Common.Enum;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DiamondStoreSystem.DTO.EntitiesRequest.Product
{
    public class AccessoryRequest
    {
        [Key]
        public string AccessoryID { get; set; }
        public string AccessoryName { get; set; }
        public string Description { get; set; }
        public Material Material { get; set; }
        public Style Style { get; set; }
        public string Brand { get; set; }
        public bool Status { get; set; } = true;
    }
}
