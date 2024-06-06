using AutoMapper;
using DiamondStoreSystem.Business.Interface;
using DiamondStoreSystem.Business.IService;
using DiamondStoreSystem.Common;
using DiamondStoreSystem.DTO.Entities;
using DiamondStoreSystem.DTO.EntitiesRequest.Order;
using DiamondStoreSystem.DTO.EntitiesRequest.Product;
using DiamondStoreSystem.DTO.EntitiesResponse.Order;
using DiamondStoreSystem.DTO.EntitiesResponse.Product;
using DiamondStoreSystem.Repository;
using MailKit.Search;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection.Metadata.Ecma335;
using System.Text;
using System.Threading.Tasks;

namespace DiamondStoreSystem.Business.Service
{
    public class OrderDetailService : IOrderDetailService
    {
        private readonly IMapper _mapper;
        private readonly IGenericRepository<OrderDetail> _repository;
        private readonly IServiceProvider _serviceProvider;
        private readonly IDiamondService _diamondService;
        private readonly IAccessoryService _accessoryService;

        public OrderDetailService(IMapper mapper, IGenericRepository<OrderDetail> repository, IServiceProvider serviceProvider, IDiamondService diamondService, IAccessoryService accessoryService)
        {
            _mapper = mapper;
            _repository = repository;
            _serviceProvider = serviceProvider;
            _diamondService = diamondService;
            _accessoryService = accessoryService;
        }

        private IOrderService OrderService => _serviceProvider.GetService<IOrderService>();


        public IDSSResult Add(OrderDetailRequest orderDetailRequest)
        {
            try
            {
                var result = GetByID(orderDetailRequest.OrderDetailID);
                if (result.Status > 0) return new DSSResult(Const.FAIL_CREATE_CODE, Const.FAIL_CREATE_MSG);
                var resultQuantity = UpdateQuantityDecrease(ref orderDetailRequest);
                if(resultQuantity.Status <= 0) return resultQuantity;
                _repository.Insert(_mapper.Map<OrderDetail>(orderDetailRequest));
                var check = _repository.Save();
                if (check <= 0) return new DSSResult(Const.FAIL_CREATE_CODE, Const.FAIL_CREATE_MSG);
                var resultUpdateTotalPrice = OrderService.UpdateTotalPrice(orderDetailRequest.OrderID);
                if (resultUpdateTotalPrice.Status <= 0) return resultUpdateTotalPrice;
                return new DSSResult(Const.SUCCESS_CREATE_CODE, Const.SUCCESS_CREATE_MSG);
            }
            catch (Exception ex)
            {
                return new DSSResult(Const.ERROR_EXCEPTION, ex.Message);
            }
        }
        private IDSSResult UpdateQuantityDecrease(ref OrderDetailRequest orderDetailRequest)
        {
            var tempDiamond = _diamondService.GetByID(orderDetailRequest.DiamondID);

            if (tempDiamond.Status <= 0) return tempDiamond;

            var diamond = tempDiamond.Data as DiamondResponse;

            diamond.UnitInStock = diamond.UnitInStock - orderDetailRequest.Quantity;

            if (diamond.UnitInStock < 0) return new DSSResult(Const.FAIL_CREATE_CODE, "Unit in stock is not enough to sell.");

            AccessoryResponse accessory = new();

            if (!string.IsNullOrEmpty(orderDetailRequest.AccessoryID))
            {
                var tempAccessory = _accessoryService.GetByID(orderDetailRequest.AccessoryID);

                accessory = tempAccessory.Data as AccessoryResponse;

                accessory.UnitInStock -= 1;

                if (accessory.UnitInStock < 0) return new DSSResult(Const.FAIL_CREATE_CODE, "Unit in stock is not enough to sell.");

                var resultAccssry = _accessoryService.Update(_mapper.Map<AccessoryRequest>(accessory));

                if (resultAccssry.Status <= 0) return resultAccssry;

            }
            else
            {
                orderDetailRequest.AccessoryID = null;
            }
            var resultDmnd = _diamondService.Update(_mapper.Map<DiamondRequest>(diamond));

            if (resultDmnd.Status <= 0) return resultDmnd;

            orderDetailRequest.Price = diamond.Price * orderDetailRequest.Quantity + accessory.Price + 100;

            return resultDmnd;
        }
        public IDSSResult Delete(string orderDetailId)
        {
            try
            {
                var result = GetByID(orderDetailId);
                if (result.Status <= 0)
                {
                    return result;
                }
                OrderDetail OrderDetail = _mapper.Map<OrderDetail>(result.Data);
                OrderDetail.Block = true;
                _repository.UpdateByIdByString(OrderDetail, orderDetailId);
                var check = _repository.Save();
                if (check <= 0)
                {
                    return new DSSResult(Const.FAIL_DELETE_CODE, Const.FAIL_DELETE_MSG);
                }
                return new DSSResult(Const.SUCCESS_DELETE_CODE, Const.SUCCESS_DELETE_MSG);
            }
            catch (Exception ex)
            {
                return new DSSResult(Const.ERROR_EXCEPTION, ex.Message);
            }
        }

        public IDSSResult Get()
        {
            try
            {
                var result = _repository.GetWhere(x => !x.Block);
                if (result.Result == null)
                {
                    return new DSSResult(Const.FAIL_READ_CODE, Const.FAIL_READ_MSG);
                }
                var ods = result.Result as List<OrderDetail>;
                return new DSSResult(Const.SUCCESS_READ_CODE, Const.SUCCESS_READ_MSG, ods.Select(result => _mapper.Map<OrderDetailResponse>(result)));
            }
            catch (Exception ex)
            {
                return new DSSResult(Const.ERROR_EXCEPTION, ex.Message);
            }
        }

        public IDSSResult GetByID(string orderDetailId)
        {
            try
            {
                var result = _repository.GetFirstOrDefault(orderDetail => orderDetail.OrderDetailID == orderDetailId && !orderDetail.Block);
                if (result == null)
                {
                    return new DSSResult(Const.FAIL_READ_CODE, Const.FAIL_READ_MSG);
                }

                return new DSSResult(Const.SUCCESS_READ_CODE, Const.SUCCESS_READ_MSG, _mapper.Map<OrderDetailResponse>(result));
            }
            catch (Exception ex)
            {
                return new DSSResult(Const.ERROR_EXCEPTION, ex.Message);
            }
        }

        public IDSSResult Update(OrderDetailRequest orderDetailRequest)
        {
            try
            {
                var result = GetByID(orderDetailRequest.OrderDetailID);
                if (result.Status <= 0)
                {
                    return result;
                }
                _repository.UpdateByIdByString(_mapper.Map<OrderDetail>(orderDetailRequest), orderDetailRequest.OrderDetailID);
                var check = _repository.Save();
                if (check <= 0)
                {
                    return new DSSResult(Const.FAIL_UPDATE_CODE, Const.FAIL_UPDATE_MSG);
                }
                return new DSSResult(Const.SUCCESS_UPDATE_CODE, Const.SUCCESS_UPDATE_MSG);
            }
            catch (Exception ex)
            {
                return new DSSResult(Const.ERROR_EXCEPTION, ex.Message);
            }
        }

        public IDSSResult HardDelete(string orderDetailId)
        {
            try
            {
                var result = GetByID(orderDetailId);
                if (result.Status <= 0)
                {
                    return result;
                }
                UpdateQuantityIncrease(result.Data as OrderDetailResponse);
                _repository.HardDeleteByString(orderDetailId);
                var check = _repository.Save();
                if (check <= 0)
                {
                    return new DSSResult(Const.FAIL_DELETE_CODE, Const.FAIL_DELETE_MSG);
                }
                return new DSSResult(Const.SUCCESS_DELETE_CODE, Const.SUCCESS_DELETE_MSG);
            }
            catch (Exception ex)
            {
                return new DSSResult(Const.ERROR_EXCEPTION, ex.Message);
            }
        }
        private IDSSResult UpdateQuantityIncrease(OrderDetailResponse orderDetailResponse)
        {
            var tempDiamond = _diamondService.GetByID(orderDetailResponse.DiamondID);

            if (tempDiamond.Status <= 0) return tempDiamond;

            var diamond = tempDiamond.Data as DiamondResponse;

            diamond.UnitInStock = diamond.UnitInStock + orderDetailResponse.Quantity;

            AccessoryResponse accessory;

            if (!string.IsNullOrEmpty(orderDetailResponse.AccessoryID))
            {
                var tempAccessory = _accessoryService.GetByID(orderDetailResponse.AccessoryID);

                if(tempAccessory.Status <= 0) return tempAccessory;

                accessory = tempAccessory.Data as AccessoryResponse;

                accessory.UnitInStock += 1;

                var resultAccssry = _accessoryService.Update(_mapper.Map<AccessoryRequest>(accessory));

                if (resultAccssry.Status <= 0) return resultAccssry;

            }
            var resultDmnd = _diamondService.Update(_mapper.Map<DiamondRequest>(diamond));

            if (resultDmnd.Status <= 0) return resultDmnd;

            return resultDmnd;
        }
        public IDSSResult GetByOrderID(string orderId)
        {
            try
            {
                var result = _repository.GetWhere(orderDetail => orderDetail.OrderID == orderId && !orderDetail.Block);
                if (result == null)
                {
                    return new DSSResult(Const.FAIL_READ_CODE, Const.FAIL_READ_MSG);
                }

                return new DSSResult(Const.SUCCESS_READ_CODE, Const.SUCCESS_READ_MSG, result.Result.ToList());
            }
            catch (Exception ex)
            {
                return new DSSResult(Const.ERROR_EXCEPTION, ex.Message);
            }
        }
        public IDSSResult HardDeleteRangeByOrderID(string orderId)
        {
            try
            {
                var result = GetByOrderID(orderId);
                if (result.Status <= 0)
                {
                    return result;
                }

                (result.Data as List<OrderDetail>).ForEach(orderDetail => HardDelete(orderDetail.OrderDetailID));
                var check = _repository.Save();
                if (check <= 0)
                {
                    return new DSSResult(Const.FAIL_DELETE_CODE, Const.FAIL_DELETE_MSG);
                }
                return new DSSResult(Const.SUCCESS_DELETE_CODE, Const.SUCCESS_DELETE_MSG);
            }
            catch (Exception ex)
            {
                return new DSSResult(Const.ERROR_EXCEPTION, ex.Message);
            }
        }

        public IDSSResult GetByDiamondID(string diamondId)
        {
            try
            {
                var result = _repository.GetWhere(orderDetail => orderDetail.DiamondID == diamondId && !orderDetail.Block);
                if (result == null)
                {
                    return new DSSResult(Const.FAIL_READ_CODE, Const.FAIL_READ_MSG);
                }

                return new DSSResult(Const.SUCCESS_READ_CODE, Const.SUCCESS_READ_MSG,result.Result.ToList());
            }
            catch (Exception ex)
            {
                return new DSSResult(Const.ERROR_EXCEPTION, ex.Message);
            }
        }

        public IDSSResult HardDeleteRangeByDiamondID(string diamondId)
        {
            try
            {
                var result = GetByOrderID(diamondId);
                if (result.Status <= 0)
                {
                    return result;
                }

                            (result.Data as List<OrderDetail>).ForEach(orderDetail => HardDelete(orderDetail.OrderDetailID));
                var check = _repository.Save();
                if (check <= 0)
                {
                    return new DSSResult(Const.FAIL_DELETE_CODE, Const.FAIL_DELETE_MSG);
                }
                return new DSSResult(Const.SUCCESS_DELETE_CODE, Const.SUCCESS_DELETE_MSG);
            }
            catch (Exception ex)
            {
                return new DSSResult(Const.ERROR_EXCEPTION, ex.Message);
            }
        }

        public IDSSResult GetByAccessoryID(string accessoryId)
        {
            try
            {
                var result = _repository.GetWhere(orderDetail => orderDetail.AccessoryID == accessoryId && !orderDetail.Block);
                if (result == null)
                {
                    return new DSSResult(Const.FAIL_READ_CODE, Const.FAIL_READ_MSG);
                }

                return new DSSResult(Const.SUCCESS_READ_CODE, Const.SUCCESS_READ_MSG, result.Result.ToList());
            }
            catch (Exception ex)
            {
                return new DSSResult(Const.ERROR_EXCEPTION, ex.Message);
            }
        }

        public IDSSResult HardDeleteRangeByAccessoryID(string accessoryId)
        {
            try
            {
                var result = GetByAccessoryID(accessoryId);
                if (result.Status <= 0)
                {
                    return result;
                }

                            (result.Data as List<OrderDetail>).ForEach(orderDetail => HardDelete(orderDetail.OrderDetailID));
                var check = _repository.Save();
                if (check <= 0)
                {
                    return new DSSResult(Const.FAIL_DELETE_CODE, Const.FAIL_DELETE_MSG);
                }
                return new DSSResult(Const.SUCCESS_DELETE_CODE, Const.SUCCESS_DELETE_MSG);
            }
            catch (Exception ex)
            {
                return new DSSResult(Const.ERROR_EXCEPTION, ex.Message);
            }
        }
    }
}
