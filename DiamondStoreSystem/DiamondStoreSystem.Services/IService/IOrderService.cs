﻿using DiamondStoreSystem.Business.Interface;
using DiamondStoreSystem.DTO.EntitiesRequest;
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
        public IDSSResult Update(OrderRequest OrderRequest);
        public IDSSResult Delete(string OrderId);
        public IDSSResult Add(OrderRequest OrderRequest);
        public IDSSResult GetByID(string OrderId);
        public IDSSResult UpdateTotalPrice(string OrderId);
    }
}