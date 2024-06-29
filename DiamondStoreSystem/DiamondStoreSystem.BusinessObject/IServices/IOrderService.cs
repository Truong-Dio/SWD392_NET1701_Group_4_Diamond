﻿using DiamondStoreSystem.BusinessLayer.Commons;
using DiamondStoreSystem.BusinessLayer.ResponseModels;
using DiamondStoreSystem.BusinessLayer.ResquestModels;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DiamondStoreSystem.BusinessLayer.IServices
{
    public interface IOrderService
    {
        Task<IDSSResult> GetById(string id);
        Task<IDSSResult> GetAll();
        IDSSResult GetAllWithAllField();
        Task<IDSSResult> IsExist(string id);
        Task<IDSSResult> Update(string id, OrderRequestModel model);
        Task<IDSSResult> Block(string id);
        Task<IDSSResult> Create(OrderRequestModel model);
        IDSSResult GetEnum();
        Task<IDSSResult> Delete(string id);
        Task<IDSSResult> GetCart(CartRequestModel model, HttpContext context);
        Task<IDSSResult> UpdateStatus(string id, OrderStatus status);
    }
}