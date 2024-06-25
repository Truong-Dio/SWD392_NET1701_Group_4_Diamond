using DiamondStoreSystem.Business.Interface;
using DiamondStoreSystem.Common.Enum;
using DiamondStoreSystem.DTO.EntitiesRequest.Order;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DiamondStoreSystem.Business.IService
{
    public interface IOrderService
    {
        public IDSSResult Get();
        public IDSSResult GetOrdersByAccountID(string accountID);
        public IDSSResult HardDeleteRangeByAccountID(string accountID);
        public IDSSResult Update(OrderRequest OrderRequest);
        public IDSSResult Delete(string OrderId);
        public IDSSResult Add(OrderRequest OrderRequest);
        public IDSSResult GetByID(string OrderId);
        public IDSSResult UpdateTotalPrice(string OrderId);
        public IDSSResult HardDelete(string orderId);
        public IDSSResult UpdateStatus(string OrderId, OrderStatus status);
    }
}
