using DiamondStoreSystem.Business.Interface;
using DiamondStoreSystem.DTO.EntitiesRequest;
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
        public IDSSResult Update(AccessoryRequest AccessoryRequest);
        public IDSSResult Delete(string AccessoryId);
        public IDSSResult Add(AccessoryRequest AccessoryRequest);
        public IDSSResult GetByID(string AccessoryId);
    }
}
