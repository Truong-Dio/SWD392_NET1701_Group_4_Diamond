using DiamondStoreSystem.Business.Interface;
using DiamondStoreSystem.DTO.EntitiesRequest;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DiamondStoreSystem.Business.IService
{
    public interface IOrderDetailService
    {
        public IDSSResult Get();
        public IDSSResult Update(OrderDetailRequest OrderDetailRequest);
        public IDSSResult Delete(string OrderDetailId);
        public IDSSResult Add(OrderDetailRequest OrderDetailRequest);
        public IDSSResult GetByID(string OrderDetailId);
    }
}
