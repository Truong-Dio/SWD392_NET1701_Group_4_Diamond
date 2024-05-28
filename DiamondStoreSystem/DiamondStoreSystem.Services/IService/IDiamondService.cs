using DiamondStoreSystem.Business.Interface;
using DiamondStoreSystem.DTO.EntitiesRequest;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DiamondStoreSystem.Business.IService
{
    public interface IDiamondService
    {
        public IDSSResult Get();
        public IDSSResult Update(DiamondRequest DiamondRequest);
        public IDSSResult Delete(string DiamondId);
        public IDSSResult Add(DiamondRequest DiamondRequest);
        public IDSSResult GetByID(string DiamondId);
    }
}
