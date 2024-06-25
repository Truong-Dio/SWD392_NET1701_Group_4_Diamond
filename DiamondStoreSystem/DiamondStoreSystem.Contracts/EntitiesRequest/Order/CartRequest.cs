using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DiamondStoreSystem.DTO.EntitiesRequest.Order
{
    public class CartRequest
    {
        public Dictionary<string, int> Diamond { get; set; }
        public Dictionary<string, int> Accessory { get; set; }
    }
}
