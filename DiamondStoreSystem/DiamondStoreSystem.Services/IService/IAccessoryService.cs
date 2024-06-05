using DiamondStoreSystem.Business.Interface;
using DiamondStoreSystem.DTO.EntitiesRequest.Product;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DiamondStoreSystem.Business.IService
{
    public interface IAccessoryService
    {
        public IDSSResult Get();
        public IDSSResult Update(AccessoryRequest accessoryRequest);
        public IDSSResult Delete(string accessoryId);
        public IDSSResult Add(AccessoryRequest accessoryRequest);
        public IDSSResult GetByID(string accessoryId);
        public IDSSResult HardDelete(string accessoryId);
    }
}
