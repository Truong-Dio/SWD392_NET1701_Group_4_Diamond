using AutoMapper;
using DiamondStoreSystem.BusinessLayer.Commons;
using DiamondStoreSystem.BusinessLayer.Helper;
using DiamondStoreSystem.BusinessLayer.Helpers;
using DiamondStoreSystem.BusinessLayer.IServices;
using DiamondStoreSystem.BusinessLayer.ResponseModels;
using DiamondStoreSystem.BusinessLayer.ResquestModels;
using DiamondStoreSystem.DataLayer.Models;
using DiamondStoreSystem.Repositories.IRepositories;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using Newtonsoft.Json;
using System.Text;

namespace DiamondStoreSystem.BusinessLayer.Services
{
    public class OrderService : IOrderService
    {
        private readonly IOrderRepository _orderRepository;
        private readonly IVnPaymentRepository _vnPaymentRepository;
        private readonly IConfiguration _config;
        private readonly ISubDiamondService _subDiamondService;
        private readonly IWarrantyService _warrantyService;
        private readonly IAccessoryService _accessoryService;
        private readonly IDiamondService _diamondService;
        private readonly IProductService _productService;
        private readonly IAccountService _accountService;
        private readonly IMapper _mapper;

        public OrderService(IMapper mapper, IOrderRepository orderRepository, IAccessoryService accessoryService, IDiamondService diamondService, IWarrantyService warrantyService, IProductService productService, IAccountService accountService, ISubDiamondService subDiamondService, IConfiguration configuration, IVnPaymentRepository vnPaymentRepository)
        {
            _config = configuration;
            _subDiamondService = subDiamondService;
            _warrantyService = warrantyService;
            _accessoryService = accessoryService;
            _diamondService = diamondService;
            _productService = productService;
            _accountService = accountService;
            _orderRepository = orderRepository;
            _vnPaymentRepository = vnPaymentRepository;
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

        public async Task<IDSSResult> UpdatePriceOrder(string id, double totalPrice)
        {
            try
            {
                var result = await IsExist(id);
                if (result.Status <= 0) return result;

                var order = result.Data as Order;
                order.TotalPrice = totalPrice;

                var check = await Update(order.OrderID, _mapper.Map<OrderRequestModel>(order));

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

        private async Task<AccountResponseModel> AssignToOrderResponse(string accID)
        {
            var result = await _accountService.GetById(accID);
            var acc = result.Data as AccountResponseModel;
            return acc;
        }

        private async Task<Account> AssignToOrder(string accID)
        {
            var result = await _accountService.IsExist(accID);
            var acc = result.Data as Account;
            return acc;
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
                var orders = result.Select(_mapper.Map<OrderResponseModel>).ToList();
                foreach (var order in orders)
                {
                    order.Customer = await AssignToOrderResponse(order.CustomerID);
                    order.Employee = await AssignToOrderResponse(order.EmployeeAssignID);
                }
                return new DSSResult(Const.SUCCESS_READ_CODE, Const.SUCCESS_READ_MSG, orders);
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
                var orders = result.ToList();
                orders.ForEach(async r =>
                {
                    r.Customer = await AssignToOrder(r.CustomerID);
                    r.EmployeeAccount = await AssignToOrder(r.EmployeeAssignID);
                });
                return new DSSResult(Const.SUCCESS_READ_CODE, Const.SUCCESS_READ_MSG, orders);
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
                var result = await GetAll();
                if (result.Status <= 0)
                {
                    return result;
                }
                var r = (result.Data as List<OrderResponseModel>).FirstOrDefault(o => o.OrderID.Equals(id));
                return new DSSResult(Const.SUCCESS_READ_CODE, Const.SUCCESS_READ_MSG, r);
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
                var result = GetAllWithAllField();
                if (result.Status <= 0)
                {
                    return result;
                }
                var r = (result.Data as List<Order>).FirstOrDefault(o => o.OrderID.Equals(id));
                return new DSSResult(Const.SUCCESS_READ_CODE, Const.SUCCESS_READ_MSG, r);
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

        public async Task<string> GetCart(CartRequestModel model, HttpContext context)
        {
            var result = CreateCart(model, context);
            if (result.Status <= 0)
            {
                return "Payment failed " + result.Message;
            }
            return result.Data as string;
        }

        public IDSSResult CreateCart(CartRequestModel model, HttpContext context)
        {
            try
            {
                IDSSResult result = new DSSResult(Const.FAIL_CREATE_CODE, Const.FAIL_CREATE_MSG);
                string orderID = "O" + DateTime.Now.Ticks;
                double productPrice = 0;
                double totalPrice = 0;
                ICollection<Product> products = new List<Product>();

                // Retrieve customer ID from session or hardcode
                context.Session.TryGetValue("accId", out byte[] session);
                string customerID = session != null ? JsonConvert.DeserializeObject<AuthRequestModel>(Encoding.UTF8.GetString(session)).AccountID : "C001";

                // Verify customer existence
                result = _accountService.IsExist(customerID).Result;
                if (result.Status <= 0) return result;
                var customer = result.Data as Account;

                // Create order
                var orderRequest = new OrderRequestModel
                {
                    OrderID = orderID,
                    EmployeeAssignID = "S002",
                    DateOrdered = DateTime.Now,
                    DateReceived = DateTime.Now,
                    CustomerID = customerID,
                    OrderStatus = OrderStatus.Pending,
                    PayMethod = PayMethod.Online,
                    TotalPrice = totalPrice
                };

                result = Create(orderRequest).Result;
                if (result.Status <= 0) return result;

                // Process each product in the cart
                foreach (var productTemp in model.Cart)
                {
                    productPrice = 0;

                    // Update accessory quantity if accessory exists
                    if (!string.IsNullOrEmpty(productTemp.AccessoryID))
                    {
                        result = _accessoryService.UpdateQuantity(productTemp.AccessoryID, "-", 1).Result;
                        if (result.Status <= 0) return result;
                        var accessory = result.Data as Accessory;
                        productPrice += accessory.Price;
                    }

                    // Block main diamond and update price
                    result = _diamondService.Block(productTemp.MainDiamondID).Result;
                    if (result.Status <= 0) return result;
                    var diamond = result.Data as Diamond;
                    productPrice += diamond.Price;

                    // Create product record
                    string accessoryID = productTemp.AccessoryID;
                    if (productTemp.AccessoryID.IsNullOrEmpty()) accessoryID = "0000";
                    string productID = "P" + productTemp.MainDiamondID.Substring(1) + accessoryID.Substring(1);
                    var productRequest = new ProductRequestModel
                    {
                        ProductID = productID,
                        AccessoryID = string.IsNullOrEmpty(productTemp.AccessoryID) ? null : productTemp.AccessoryID,
                        OrderID = orderID,
                        Price = productPrice,
                        MainDiamondID = productTemp.MainDiamondID
                    };

                    result = _productService.Create(productRequest).Result;
                    if (result.Status <= 0) return result;

                    // Process sub-diamonds and update price
                    foreach (var subDiamondID in productTemp.SubDiamondID)
                    {
                        if (!string.IsNullOrEmpty(subDiamondID))
                        {
                            result = _subDiamondService.Create(new SubDiamondRequestModel { ProductID = productID, SubDiamondID = subDiamondID }).Result;
                            if (result.Status <= 0) return result;

                            result = _diamondService.Block(subDiamondID).Result;
                            if (result.Status <= 0) return result;
                            var subDiamond = result.Data as Diamond;
                            productPrice += subDiamond.Price;
                        }
                    }

                    // Update product price if necessary
                    if (productRequest.Price != productPrice)
                    {
                        productRequest.Price = productPrice;
                        result = _productService.Update(productID, productRequest).Result;
                        if (result.Status <= 0) return result;
                    }

                    // Create warranty record
                    string warrantyID = "W" + productID.Substring(1);
                    result = _warrantyService.Create(new WarrantyRequestModel { WarrantyID = warrantyID, ExpiredDate = DateTime.Now.AddYears(2), IssueDate = DateTime.Now, ProductID = productID }).Result;
                    if (result.Status <= 0) return result;

                    products.Add(_mapper.Map<Product>(productRequest));
                    totalPrice += productPrice;
                }

                // Update order total price
                result = UpdatePriceOrder(orderID, totalPrice).Result;
                if (result.Status <= 0) return result;

                // Create payment URL
                var paymentRequest = new VnPaymentRequestModel
                {
                    Amount = totalPrice,
                    CreatedDate = DateTime.Now,
                    Description = "Thanh toan",
                    FullName = $"{customer.FirstName} {customer.LastName}",
                    OrderId = orderID
                };

                var paymentUrl = CreatePaymentUrl(context, paymentRequest);

                return new DSSResult(Const.SUCCESS_CREATE_CODE, Const.SUCCESS_CREATE_MSG, paymentUrl);
            }
            catch (Exception ex)
            {
                return new DSSResult(Const.ERROR_EXCEPTION, ex.Message);
            }
        }

        public string CreatePaymentUrl(HttpContext context, VnPaymentRequestModel model)
        {
            try
            {
                var tick = DateTime.Now.Ticks.ToString();
                var vnpay = new VnPayLibrary();
                vnpay.AddRequestData("vnp_Version", _config["VnPay:Version"]);
                vnpay.AddRequestData("vnp_Command", _config["VnPay:Command"]);
                vnpay.AddRequestData("vnp_TmnCode", _config["VnPay:TmnCode"]);
                vnpay.AddRequestData("vnp_Amount", (model.Amount * 100).ToString());
                vnpay.AddRequestData("vnp_CreateDate", model.CreatedDate.ToString("yyyyMMddHHmmss"));
                vnpay.AddRequestData("vnp_CurrCode", _config["VnPay:CurrCode"]);
                vnpay.AddRequestData("vnp_IpAddr", Utils.GetIpAddress(context));
                vnpay.AddRequestData("vnp_Locale", _config["VnPay:Locate"]);
                vnpay.AddRequestData("vnp_OrderInfo", "Pay Order:" + model.OrderId);
                vnpay.AddRequestData("vnp_OrderType", "other"); // default value: other
                vnpay.AddRequestData("vnp_ReturnUrl", _config["VnPay:PaymentBackReturnUrl"]);
                vnpay.AddRequestData("vnp_TxnRef", tick);

                var paymentUrl = vnpay.CreateRequestUrl(_config["VnPay:BaseUrl"], _config["VnPay:HashSecret"]);
                return paymentUrl;
            }
            catch (Exception ex)
            {
                return ex.Message;
            }
        }

        public IDSSResult PaymentExecute(IQueryCollection collections)
        {
            try
            {
                var vnpay = new VnPayLibrary();
                foreach (var (key, value) in collections)
                {
                    if (!string.IsNullOrEmpty(key) && key.StartsWith("vnp_"))
                    {
                        vnpay.AddResponseData(key, value.ToString());
                    }
                }

                var vnp_OrderId = vnpay.GetResponseData("vnp_TxnRef");
                var vnp_TransactionId = vnpay.GetResponseData("vnp_TransactionNo");
                var vnp_SecureHash = collections.FirstOrDefault(p => p.Key == "vnp_SecureHash").Value;
                var vnp_responseCode = vnpay.GetResponseData("vnp_ResponseCode");
                var vnp_OrderInfo = vnpay.GetResponseData("vnp_OrderInfo");
                bool checkSignature = vnpay.ValidateSignature(vnp_SecureHash, _config["VnPay:HashSecret"]);
                //if (!checkSignature)
                //{
                //    return new DSSResult(Const.FAIL_CREATE_CODE, Const.FAIL_CREATE_MSG);
                //}

                var orderId = vnp_OrderInfo.Substring(vnp_OrderInfo.IndexOf(":") + 1);
                var vnpayResponse = new VnPaymentResponse
                {
                    OrderId = orderId,
                    Success = true,
                    PaymentMethod = "VnPay",
                    OrderDescription = vnp_OrderInfo,
                    VnpOrderId = vnp_OrderId,
                    TransactionId = vnp_TransactionId,
                    Token = vnp_SecureHash,
                    VnPayResponseCode = vnp_responseCode,
                };

                _vnPaymentRepository.Insert(vnpayResponse);
                var check = _vnPaymentRepository.SaveChanges();
                if (check <= 0)
                {
                    return new DSSResult(Const.FAIL_CREATE_CODE, Const.FAIL_CREATE_MSG);
                }

                return new DSSResult(Const.SUCCESS_CREATE_CODE, Const.SUCCESS_CREATE_MSG, vnpayResponse);
            }
            catch (Exception ex)
            {
                return new DSSResult(Const.ERROR_EXCEPTION, ex.Message);
            }
        }

        public async Task<IDSSResult> FilterSearch(Dictionary<string, object> searchParams)
        {
            try
            {
                var result = await GetAll();
                if (result.Status <= 0) return result;
                var orders = result.Data as List<OrderResponseModel>;
                if (searchParams!=null && searchParams.Count>0)
                {
                    orders = SupportingFeature.Instance.FilterModel(orders, searchParams);
                    if (orders.Count == 0) return new DSSResult(Const.WARNING_NO_DATA_CODE, Const.WARNING_NO_DATA__MSG);
                }
                return new DSSResult(Const.SUCCESS_READ_CODE, Const.SUCCESS_READ_MSG, orders);
            }
            catch (Exception ex)
            {
                return new DSSResult(Const.ERROR_EXCEPTION, ex.Message);
            }
        }
    }
}
