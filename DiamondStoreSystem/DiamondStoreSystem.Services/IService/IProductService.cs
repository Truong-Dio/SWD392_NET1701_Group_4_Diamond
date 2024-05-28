using DiamondStoreSystem.Business.Interface;
using DiamondStoreSystem.DTO.EntitiesRequest;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DiamondStoreSystem.Business.IService
{
    public interface IProductService
    {
        public IDSSResult Get();
        public IDSSResult Update(ProductRequest ProductRequest);
        public IDSSResult Delete(string ProductId);
        public IDSSResult Add(ProductRequest ProductRequest);
        public IDSSResult GetByID(string ProductId);
    }
}
