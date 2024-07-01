using AutoMapper;
using DiamondStoreSystem.BusinessLayer.Commons;
using DiamondStoreSystem.BusinessLayer.Helpers;
using DiamondStoreSystem.BusinessLayer.IServices;
using DiamondStoreSystem.BusinessLayer.ResponseModels;
using DiamondStoreSystem.BusinessLayer.ResquestModels;
using DiamondStoreSystem.DataLayer.Models;
using DiamondStoreSystem.Repositories.IRepositories;
using DiamondStoreSystem.Repositories.Repositories;
using Microsoft.AspNetCore.Http;
using Microsoft.IdentityModel.Tokens;
using Newtonsoft.Json;
using System.Text;

namespace DiamondStoreSystem.BusinessLayer.Services
{
    public class OrderService : IOrderService
    {
        private readonly IOrderRepository _orderRepository;
        private readonly ISubDiamondService _subDiamondService;
        private readonly IWarrantyService _warrantyService;
        private readonly IAccessoryService _accessoryService;
        private readonly IDiamondService _diamondService;
        private readonly IProductService _productService;
        private readonly IAccountService _accountService;
        private readonly IMapper _mapper;

        public OrderService(IMapper mapper, IOrderRepository orderRepository, IAccessoryService accessoryService, IDiamondService diamondService, IWarrantyService warrantyService, IProductService productService, IAccountService accountService, ISubDiamondService subDiamondService)
        {
            _subDiamondService = subDiamondService;
            _warrantyService = warrantyService;
            _accessoryService = accessoryService;
            _diamondService = diamondService; 
            _productService = productService;
            _accountService = accountService;
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

                if (check.Status <= 0) return new DSSResult(Const.FAIL_UPDATE_CODE, Const.FAIL_UPDATE_MSG);

                return new DSSResult(Const.SUCCESS_UPDATE_CODE, Const.SUCCESS_UPDATE_MSG);
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

                var order = _mapper.Map<Order>(model);

                //result = await _accountService.IsExist(model.CustomerID);

                //if (result.Status <= 0) return result;

                //order.Customer = result.Data as Account;

                //result = await _accountService.IsExist(model.EmployeeAssignID);

                //if (result.Status <= 0) return result;

                //order.EmployeeAccount = result.Data as Account;

                //order.Products = products;

                _orderRepository.Insert(order);
                
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

        public async Task<IDSSResult> UpdatePrice(string id, double totalPrice, ICollection<Product> products)
        {
            try
            {
                var result = await IsExist(id);
                if (result.Status <= 0) return result;

                var order = result.Data as Order;

                order.Products = products;

                var check = await UpdateProperty(order, nameof(order.TotalPrice), totalPrice);

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
                var orderID = "O" + DateTime.Now.Ticks.ToString();
                double productPrice = 0;
                double totalPrice = 0;
                ICollection<Product> products = new List<Product>();

                #region Customer
                context.Session.TryGetValue("accId", out byte[] session);
                //var customerID = JsonConvert.DeserializeObject<AuthRequestModel>(Encoding.UTF8.GetString(session)).AccountID;
                var customerID = "C001";

                result = await _accountService.IsExist(customerID);
                if (result.Status <= 0) return result;
                var customer = result.Data as Account;
                #endregion

                #region Order
                result = await Create(new OrderRequestModel()
                {
                    OrderID = orderID,
                    EmployeeAssignID = "S002",
                    DateOrdered = DateTime.Now,
                    DateReceived = DateTime.Now,
                    CustomerID = customerID,
                    OrderStatus = OrderStatus.Pending,
                    PayMethod = PayMethod.Online,
                    TotalPrice = totalPrice
                });
                if (result.Status <= 0) return result;
                #endregion

                #region Products

                foreach (var productTemp in model.Cart)
                {
                    var mainDiamondID = productTemp.MainDiamondID;
                    var subDiamond = productTemp.SubDiamondID;
                    var accessoryID = productTemp.AccessoryID;
                    Accessory accessory = null;

                    if (!accessoryID.IsNullOrEmpty())
                    {
                        #region Accessory
                        result = await _accessoryService.UpdateQuantity(accessoryID, "decrease", 1);
                        if (result.Status <= 0) return result;
                        accessory = result.Data as Accessory;
                        #endregion
                        productPrice += accessory.Price;
                    }

                    if (accessoryID.IsNullOrEmpty()) accessoryID = "0000";

                    var productID = "P" + mainDiamondID.Substring(1) + accessoryID.Substring(1);

                    var warrantyID = "W" + productID.Substring(1);

                    #region Main Diamond
                    result = await _diamondService.Block(mainDiamondID);
                    if (result.Status <= 0) return result;
                    var diamond = result.Data as Diamond;
                    #endregion

                    productPrice += diamond.Price;

                    #region Product
                    var product = new ProductRequestModel
                    {
                        ProductID = productID,
                        AccessoryID = productTemp.AccessoryID,
                        OrderID = orderID,
                        Price = productPrice,
                        WarrantyID = warrantyID,
                        MainDiamondID = mainDiamondID,
                    };
                    result = await _productService.Create(product);
                    if (result.Status <= 0) return result;
                    #endregion

                    #region Sub Diamonds
                    foreach (var item in subDiamond)
                    {
                        if (!item.IsNullOrEmpty())
                        {
                            result = await _subDiamondService.Create(new SubDiamondRequestModel()
                            {
                                ProductID = productID,
                                SubDiamondID = item
                            });
                            if (result.Status <= 0) return result;
                            //result = await _diamondService.Block(item);
                            //if (result.Status <= 0) return result;
                            diamond = result.Data as Diamond;
                            productPrice += diamond.Price;
                        }
                    }
                    #endregion

                    product.Price = productPrice;

                    result = await _productService.Update(productID, product);
                    if (result.Status <= 0) return result;

                    #endregion

                    products.Add(_mapper.Map<Product>(product));

                    result = await _warrantyService.Create(new WarrantyRequestModel
                    {
                        WarrantyID = warrantyID,
                        ExpiredDate = DateTime.Now.Date.AddYears(2),
                        IssueDate = DateTime.Now.Date,
                        ProductID = productID
                    });
                    if (result.Status <= 0) return result;

                    totalPrice += productPrice;
                    productPrice = 0;
                }

/*                var paymentUrl = _vnPaymentService.CreatePaymentUrl(context, new VnPaymentRequestModel()
                {
                    Amount = totalPrice,
                    CreatedDate = DateTime.Now.Date,
                    Description = "Thanh toan",
                    FullName = customer.FirstName + " " + customer.LastName,
                    OrderId = orderID,
                });

                result = _vnPaymentService.CreateTemporary(new VnPaymentResponse()
                {
                    OrderDescription = string.Empty,
                    OrderId = orderID,
                    PaymentMethod = string.Empty,
                    Success = false,
                    Token = string.Empty,
                    TransactionId = string.Empty,
                    VnPayResponseCode = string.Empty,
                    VnpOrderId = string.Empty,
                });
*/

                result = await UpdatePrice(orderID, productPrice, products);
                if (result.Status <= 0) return result;

                return result;
            }
            catch (Exception ex)
            {
                return new DSSResult(Const.ERROR_EXCEPTION, ex.Message);
            }
        }
    }
}
