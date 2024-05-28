using DiamondStoreSystem.Business.Interface;
using DiamondStoreSystem.DTO.EntitiesRequest;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DiamondStoreSystem.Business.IService
{
    public interface IProductDiamondService
    {
        public IDSSResult Get();
        public IDSSResult Update(ProductDiamondRequest ProductDiamondRequest);
        public IDSSResult Delete(string ProductDiamondId);
        public IDSSResult Add(ProductDiamondRequest ProductDiamondRequest);
        public IDSSResult GetByID(string ProductDiamondId);
    }
}
