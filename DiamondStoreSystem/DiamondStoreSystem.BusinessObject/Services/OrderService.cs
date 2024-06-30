using AutoMapper;
using DiamondStoreSystem.BusinessLayer.Commons;
using DiamondStoreSystem.BusinessLayer.Helpers;
using DiamondStoreSystem.BusinessLayer.IServices;
using DiamondStoreSystem.BusinessLayer.ResponseModels;
using DiamondStoreSystem.BusinessLayer.ResquestModels;
using DiamondStoreSystem.DataLayer.Models;
using DiamondStoreSystem.Repositories.IRepositories;
using Microsoft.AspNetCore.Http;
using Microsoft.IdentityModel.Tokens;
using Newtonsoft.Json;
using System.Text;

namespace DiamondStoreSystem.BusinessLayer.Services
{
    public class OrderService : IOrderService
    {
        private readonly IOrderRepository _orderRepository;
        private readonly IWarrantyService _warrantyService;
        private readonly IAccessoryService _accessoryService;
        private readonly IDiamondService _diamondService;
        private readonly IProductService _productService;
        private readonly IMapper _mapper;

        public OrderService(IMapper mapper, IOrderRepository orderRepository, IAccessoryService accessoryService, IDiamondService diamondService, IWarrantyService warrantyService, IProductService productService)
        {
            _warrantyService = warrantyService;
            _accessoryService = accessoryService;
            _diamondService = diamondService; 
            _productService = productService;
            _orderRepository = orderRepository;
            _mapper = mapper;

        }

        public async Task<IDSSResult> UnBlock(string id)
        {
            try
            {
                var result = await IsExist(id);
                if (result.Status <= 0) return result;

                var order = result.Data as Order;

                var check = await UpdateProperty(order, nameof(order.Block), false);

                if (check.Status <= 0) return new DSSResult(Const.FAIL_DELETE_CODE, Const.FAIL_DELETE_MSG);

                return new DSSResult(Const.SUCCESS_DELETE_CODE, Const.SUCCESS_DELETE_MSG);
            }
            catch (Exception ex)
            {
                return new DSSResult(Const.ERROR_EXCEPTION, ex.Message);
            }
        }

        public async Task<IDSSResult> Create(OrderRequestModel model)
        {
            try
            {
                var result = await GetById(model.OrderID);
                if (result.Status > 0) return result;
                _orderRepository.Insert(_mapper.Map<Order>(model));
                var check = _orderRepository.SaveChanges();
                if (check <= 0) return new DSSResult(Const.FAIL_CREATE_CODE, Const.FAIL_CREATE_MSG);
                return new DSSResult(Const.SUCCESS_CREATE_CODE, Const.SUCCESS_CREATE_MSG);
            }
            catch (Exception ex)
            {
                return new DSSResult(Const.ERROR_EXCEPTION, ex.Message);
            }
        }

        public async Task<IDSSResult> Block(string id)
        {
            try
            {
                var result = await IsExist(id);
                if (result.Status <= 0) return result;

                var order = result.Data as Order;

                var check = await UpdateProperty(order, nameof(order.Block), true);

                if (check.Status <= 0) return new DSSResult(Const.FAIL_DELETE_CODE, Const.FAIL_DELETE_MSG);

                return new DSSResult(Const.SUCCESS_DELETE_CODE, Const.SUCCESS_DELETE_MSG);
            }
            catch (Exception ex)
            {
                return new DSSResult(Const.ERROR_EXCEPTION, ex.Message);
            }
        }

        public async Task<IDSSResult> UpdateStatus(string id, OrderStatus status)
        {
            try
            {
                var result = await IsExist(id);
                if (result.Status <= 0) return result;

                var order = result.Data as Order;

                var check = await UpdateProperty(order, nameof(order.OrderStatus), status);

                if (check.Status <= 0) return new DSSResult(Const.FAIL_UPDATE_CODE, Const.FAIL_UPDATE_MSG);

                return new DSSResult(Const.SUCCESS_UPDATE_CODE, Const.SUCCESS_UPDATE_MSG);
            }
            catch (Exception ex)
            {
                return new DSSResult(Const.ERROR_EXCEPTION, ex.Message);
            }
        }

        public async Task<IDSSResult> UpdateProperty(Order order, string propertyName, object value)
        {
            try
            {
                var propertyInfo = order.GetType().GetProperty(propertyName);
                if (propertyInfo == null)
                    return new DSSResult(Const.FAIL_READ_CODE, $"Property '{propertyName}' not found.");

                propertyInfo.SetValue(order, Convert.ChangeType(value, propertyInfo.PropertyType), null);

                await _orderRepository.UpdateById(order, order.OrderID);
                var check = _orderRepository.SaveChanges();
                if (check <= 0)
                    return new DSSResult(Const.FAIL_UPDATE_CODE, Const.FAIL_UPDATE_MSG);

                return new DSSResult(Const.SUCCESS_UPDATE_CODE, Const.SUCCESS_UPDATE_MSG);
            }
            catch (Exception ex)
            {
                return new DSSResult(Const.ERROR_EXCEPTION, ex.Message);
            }
        }


        public async Task<IDSSResult> GetAll()
        {
            try
            {
                var result = await _orderRepository.GetWhere(a => !a.Block);
                if (result.Count() <= 0)
                {
                    return new DSSResult(Const.FAIL_READ_CODE, Const.FAIL_READ_MSG);
                }
                return new DSSResult(Const.SUCCESS_READ_CODE, Const.SUCCESS_READ_MSG, result.Select(_mapper.Map<OrderResponseModel>)
                    .ToList());
            }
            catch (Exception ex)
            {
                return new DSSResult(Const.ERROR_EXCEPTION, ex.Message);
            }
        }

        public IDSSResult GetAllWithAllField()
        {
            try
            {
                var result = _orderRepository.GetAll();
                if (result == null)
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

        public async Task<IDSSResult> GetById(string id)
        {
            try
            {
                var result = await _orderRepository.GetWhere(a => !a.Block && a.OrderID == id);
                if (result.Count() <= 0)
                {
                    return new DSSResult(Const.FAIL_READ_CODE, Const.FAIL_READ_MSG);
                }
                return new DSSResult(Const.SUCCESS_READ_CODE, Const.SUCCESS_READ_MSG, _mapper.Map<OrderResponseModel>(result.FirstOrDefault(r => true)));
            }
            catch (Exception ex)
            {
                return new DSSResult(Const.ERROR_EXCEPTION, ex.Message);
            }
        }

        public async Task<IDSSResult> IsExist(string id)
        {
            try
            {
                var result = await _orderRepository.GetById(id);
                if (result == null)
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

        public IDSSResult GetEnum() => new DSSResult()
        {
            Data = new List<Dictionary<int, string>>()
            {
                SupportingFeature.Instance.GetEnumName<PayMethod>(),
                SupportingFeature.Instance.GetEnumName<OrderStatus>(),
            },
            Message = Const.SUCCESS_READ_MSG,
            Status = Const.SUCCESS_READ_CODE,
        };

        public async Task<IDSSResult> Update(string id, OrderRequestModel model)
        {
            try
            {
                var result = await GetById(id);
                if (result.Status <= 0) return result;

                await _orderRepository.UpdateById(_mapper.Map<Order>(model), id);

                var check = _orderRepository.SaveChanges();

                if (check <= 0) return new DSSResult(Const.FAIL_UPDATE_CODE, Const.FAIL_UPDATE_MSG);

                return new DSSResult(Const.SUCCESS_UPDATE_CODE, Const.SUCCESS_UPDATE_MSG);
            }
            catch (Exception ex)
            {
                return new DSSResult(Const.ERROR_EXCEPTION, ex.Message);
            }
        }

        public async Task<IDSSResult> Delete(string id)
        {
            try
            {
                var result = await IsExist(id);
                if (result.Status <= 0) return result;

                _orderRepository.Delete(result.Data as Order);

                var check = _orderRepository.SaveChanges();

                if (check <= 0) return new DSSResult(Const.FAIL_DELETE_CODE, Const.FAIL_DELETE_MSG);

                return new DSSResult(Const.SUCCESS_DELETE_CODE, Const.SUCCESS_DELETE_MSG);
            }
            catch (Exception ex)
            {
                return new DSSResult(Const.ERROR_EXCEPTION, ex.Message);
            }
        }


        public async Task<IDSSResult> GetCart(CartRequestModel model, HttpContext context)
        {
            try
            {
                IDSSResult result = new DSSResult(Const.FAIL_CREATE_CODE, Const.FAIL_CREATE_MSG);
                var orderID = "O" + DateTime.Now.Second.ToString();
                double productPrice = 0;
                double totalPrice = 0;
                foreach (var product in model.Cart)
                {
                    var mainDiamondID = product.MainDiamondID;
                    var subDiamond = product.SubDiamondID;
                    var accessoryID = product.AccessoryID;
                    Accessory accessory = null;
                    var warrantyID = "W" + DateTime.Now.Ticks.ToString();

                    if (!accessoryID.IsNullOrEmpty())
                    {
                        result = await _accessoryService.UpdateQuantity(accessoryID, "decrease", 1);
                        if (result.Status <= 0) return result;
                        accessory = result.Data as Accessory;
                        productPrice += accessory.Price;
                    }
                    if (accessoryID.IsNullOrEmpty()) accessoryID = "0000";
                    var productID = "P" + mainDiamondID.Substring(1) + accessoryID.Substring(1);

                    result = await _diamondService.Block(mainDiamondID);
                    if (result.Status <= 0) return result;
                    var diamond = result as Diamond;
                    productPrice += diamond.Price;

                    foreach (var item in subDiamond)
                    {
                        result = await _diamondService.Block(item);
                        if (result.Status <= 0) return result;
                        diamond = result as Diamond;
                        productPrice += diamond.Price;
                    }

                    result = await _warrantyService.Create(new WarrantyRequestModel
                    {
                        WarrantyID = warrantyID,
                        ExpiredDate = DateTime.Now.Date.AddYears(2),
                        IssueDate = DateTime.Now.Date,
                        ProductID = productID
                    });

                    result = await _productService.Create(new ProductRequestModel
                    {
                        ProductID = productID,
                        AccessoryID = string.Empty,
                        OrderID = orderID,
                        Price = productPrice,
                        WarrantyID = warrantyID
                    });

                    totalPrice += productPrice;
                    productPrice = 0;
                }

                context.Session.TryGetValue("accId", out byte[] session);
                result = await Create(new OrderRequestModel()
                {
                    OrderID = orderID,
                    CustomerID = JsonConvert.DeserializeObject<AuthRequestModel>(Encoding.UTF8.GetString(session)).AccountID,
                    DateOrdered = DateTime.Now,
                    DateReceived = DateTime.Now,
                    OrderStatus = OrderStatus.Pending,
                    PayMethod = PayMethod.Online,
                    TotalPrice = totalPrice
                });
                return result;
            }
            catch (Exception ex)
            {
                return new DSSResult(Const.ERROR_EXCEPTION, ex.Message);
            }
        }
    }
}
