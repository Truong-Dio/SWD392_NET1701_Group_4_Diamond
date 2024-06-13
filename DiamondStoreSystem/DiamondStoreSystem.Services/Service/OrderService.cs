using AutoMapper;
using DiamondStoreSystem.Business.Interface;
using DiamondStoreSystem.Business.IService;
using DiamondStoreSystem.Common;
using DiamondStoreSystem.DTO.Entities;
using DiamondStoreSystem.DTO.EntitiesRequest.Order;
using DiamondStoreSystem.DTO.EntitiesResponse.Account;
using DiamondStoreSystem.DTO.EntitiesResponse.Order;
using DiamondStoreSystem.Repository;
using MailKit.Search;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DiamondStoreSystem.Business.Service
{
    public class OrderService : IOrderService
    {
        private readonly IMapper _mapper;
        private readonly IGenericRepository<Order> _orderRepository;
        private readonly IServiceProvider _serviceProvider;

        public OrderService(IGenericRepository<Order> orderRepository, IMapper mapper, IServiceProvider serviceProvider)
        {
            _mapper = mapper;
            _orderRepository = orderRepository;
            _serviceProvider = serviceProvider;
        }

        private IOrderDetailService OrderDetailService => _serviceProvider.GetService<IOrderDetailService>();
        public IDSSResult GetFull()
        {
            try
            {
                var result = _orderRepository.GetAll();
                if (result.ToList() == null)
                {
                    return new DSSResult(Const.FAIL_READ_CODE, Const.FAIL_READ_MSG);
                }

                return new DSSResult(Const.SUCCESS_READ_CODE, Const.SUCCESS_READ_MSG, result);
            }
            catch (Exception ex)
            {
                return new DSSResult(Const.ERROR_EXCEPTION, ex.Message);
            }
        }
        public IDSSResult HardDelete(string orderId)
        {
            try
            {
                var result = GetByID(orderId);
                if (result.Status <= 0)
                {
                    return result;
                }
                _orderRepository.HardDeleteByString(orderId);
                OrderDetailService.HardDeleteRangeByOrderID(orderId);
                var check = _orderRepository.Save();
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

        public IDSSResult Add(OrderRequest OrderRequest)
        {
            try
            {
                var result = IsExist(OrderRequest.OrderID);
                if (result.Data != null)
                {
                    return result;
                }
                _orderRepository.Insert(_mapper.Map<Order>(OrderRequest));
                var check = _orderRepository.Save();
                if (check <= 0)
                {
                    return new DSSResult(Const.FAIL_CREATE_CODE, Const.FAIL_CREATE_MSG);
                }
                return new DSSResult(Const.SUCCESS_CREATE_CODE, Const.SUCCESS_CREATE_MSG);
            }
            catch (Exception ex)
            {
                return new DSSResult(Const.ERROR_EXCEPTION, ex.Message);
            }
        }

        public IDSSResult Delete(string OrderId)
        {
            try
            {
                var result = GetByID(OrderId);
                if (result.Data == null)
                {
                    return result;
                }
                Order order = _mapper.Map<Order>((OrderResponse)result.Data);
                order.Block = true;
                _orderRepository.UpdateByIdByString(_mapper.Map<Order>(order), OrderId);
                var check = _orderRepository.Save();
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
                var order = _orderRepository.GetWhere(x => !x.Block);
                if (order.Result == null)
                {
                    return new DSSResult(Const.FAIL_READ_CODE, Const.FAIL_READ_MSG);
                }
                var result = order.Result as List<Order>;
                return new DSSResult(Const.SUCCESS_READ_CODE, Const.SUCCESS_READ_MSG, order);
            }
            catch (Exception ex)
            {
                return new DSSResult(Const.ERROR_EXCEPTION, ex.Message);
            }
        }

        public IDSSResult GetByID(string OrderId)
        {
            try
            {
                var order = _orderRepository.GetFirstOrDefault(o => o.OrderID == OrderId && !o.Block);
                if (order == null)
                {
                    return new DSSResult(Const.FAIL_READ_CODE, Const.FAIL_READ_MSG);
                }
                return new DSSResult(Const.SUCCESS_READ_CODE, Const.SUCCESS_READ_MSG, order);
            }
            catch (Exception ex)
            {
                return new DSSResult(Const.ERROR_EXCEPTION, ex.Message);
            }
        }
        public IDSSResult IsExist(string OrderId)
        {
            try
            {
                var order = _orderRepository.GetFirstOrDefault(o => o.OrderID == OrderId);
                if (order == null)
                {
                    return new DSSResult(Const.FAIL_READ_CODE, Const.FAIL_READ_MSG);
                }
                return new DSSResult(Const.SUCCESS_READ_CODE, Const.SUCCESS_READ_MSG, order);
            }
            catch (Exception ex)
            {
                return new DSSResult(Const.ERROR_EXCEPTION, ex.Message);
            }
        }

        public IDSSResult Update(OrderRequest OrderRequest)
        {
            try
            {
                var result = GetByID(OrderRequest.OrderID);
                if (result.Data == null)
                {
                    return result;
                }
                Order order = _mapper.Map<Order>((OrderResponse)result.Data);
                order.Block = true;
                _orderRepository.Update(_mapper.Map<Order>(order));
                var check = _orderRepository.Save();
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

        public IDSSResult UpdateTotalPrice(string orderID)
        {
            try
            {
                var result = GetByID(orderID);
                if (result.Status <= 0)
                {
                    return result;
                }

                Order order = result.Data as Order;

                var orderDetails = OrderDetailService.GetByOrderID(orderID);

                if (orderDetails.Status <= 0)
                {
                    return orderDetails;
                }
                double sum = 0;
                (orderDetails.Data as List<OrderDetail>).ForEach(od => sum += od.Price);
                order.TotalPrice = sum;

                _orderRepository.UpdateByIdByString(order, orderID);
                var check = _orderRepository.Save();
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

        public IDSSResult GetOrdersByAccountID(string accountID)
        {
            try
            {
                var orders = _orderRepository.GetWhere(order => order.AccountID == accountID && !order.Block).Result.ToList();

                if (orders == null)
                {
                    return new DSSResult(Const.FAIL_READ_CODE, Const.FAIL_READ_MSG);
                }

                return new DSSResult(Const.SUCCESS_READ_CODE, Const.SUCCESS_READ_MSG, orders.Select(order => _mapper.Map<OrderResponse>(order)).ToList());
            }
            catch (Exception ex)
            {
                return new DSSResult(Const.ERROR_EXCEPTION, ex.Message);
            }
        }

        public IDSSResult HardDeleteRangeByAccountID(string accountID)
        {
            try
            {
                var result = GetOrdersByAccountID(accountID);
                if (result.Status <= 0)
                {
                    return result;
                }

                IDSSResult check = new DSSResult();
                (result.Data as List<OrderResponse>).ForEach(order =>
                {
                    check = OrderDetailService.HardDeleteRangeByOrderID(order.OrderID);
                    if (check.Status > 0)
                    {
                        check = HardDelete(order.OrderID);
                    }
                });

                if (check.Status <= 0)
                {
                    return check;
                }

                return check;
            }
            catch (Exception ex)
            {
                return new DSSResult(Const.ERROR_EXCEPTION, ex.Message);
            }
        }
    }
}
