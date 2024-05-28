using DiamondStoreSystem.Business.Interface;
using DiamondStoreSystem.Business.IService;
using DiamondStoreSystem.DTO.EntitiesRequest;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DiamondStoreSystem.Business.Service
{
    public class OrderService : IOrderService
    {
        public IDSSResult Add(OrderRequest OrderRequest)
        {
            throw new NotImplementedException();
        }

        public IDSSResult Delete(string OrderId)
        {
            throw new NotImplementedException();
        }

        public IDSSResult Get()
        {
            throw new NotImplementedException();
        }

        public IDSSResult GetByID(string OrderId)
        {
            throw new NotImplementedException();
        }

        public IDSSResult Update(OrderRequest OrderRequest)
        {
            throw new NotImplementedException();
        }
    }
}
