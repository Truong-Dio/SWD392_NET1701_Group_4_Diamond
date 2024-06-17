using DiamondStoreSystem.Common.Enum;
using System;

namespace DiamondStoreSystem.DTO.EntitiesResponse.Product
{
    public class AccessoryResponse
    {
        public string AccessoryID { get; set; }
        public string AccessoryName { get; set; }
        public string Description { get; set; }
        public string Material { get; set; }  // Note: Changed to string
        public string Style { get; set; }     // Note: Changed to string
        public string Brand { get; set; }
        public double Price { get; set; } = 0;
        public int UnitInStock { get; set; }
    }
}
