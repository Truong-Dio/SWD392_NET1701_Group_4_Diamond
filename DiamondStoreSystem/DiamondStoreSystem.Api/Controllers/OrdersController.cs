using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using DiamondStoreSystem.BusinessLayer.IServices;
using DiamondStoreSystem.BusinessLayer.ResquestModels;
using DiamondStoreSystem.BusinessLayer.Services;
using DiamondStoreSystem.BusinessLayer.ResponseModels;

namespace OrderStoreSystem.API.Controllers
{
    [EnableCors("AllowAnyOrigins")]
    [Route("api/[controller]")]
    [ApiController]
    public class OrdersController : ControllerBase
    {
        private readonly IOrderService _orderService;
        private readonly IVnPaymentService _vpnPaymentService;
        public OrdersController(IOrderService orderService, IVnPaymentService vpnPaymentService)
        {
            _orderService = orderService;
            _vpnPaymentService = vpnPaymentService;
        }

        [HttpGet("Enum")]
        public IActionResult GetEnum() => Ok(_orderService.GetEnum());

        [HttpGet("GetAllWithAllField")]
        public IActionResult GetAllWithAllField() => Ok(_orderService.GetAllWithAllField());

        [HttpGet("GetAll")]
        public IActionResult GetAll() => Ok(_orderService.GetAll().Result);

        [HttpGet("GetByIdWithAllField/{id}")]
        public IActionResult GetByIdWithAllField(string id) => Ok(_orderService.IsExist(id).Result);

        [HttpGet("GetById/{id}")]
        public IActionResult GetById(string id) => Ok(_orderService.GetById(id).Result);

        [HttpPost("Create")]
        public IActionResult Create([FromBody] OrderRequestModel model) => Ok(_orderService.Create(model).Result);

        [HttpPut("Update/{id}")]
        public IActionResult Update([FromBody] OrderRequestModel model, string id) => Ok(_orderService.Update(id, model).Result);

        [HttpDelete("Block/{id}")]
        public IActionResult Block(string id) => Ok(_orderService.Block(id).Result);

        [HttpDelete("Delete/{id}")]
        public IActionResult Delete(string id) => Ok(_orderService.Delete(id).Result);

        [HttpPost("Cart")]
        public IActionResult GetCart([FromBody] CartRequestModel model) => Ok(_orderService.GetCart(model, HttpContext));

        [HttpPost("CreatePaymentUrl")]
        public async Task<IActionResult> CreatePaymentUrl([FromBody] VnPaymentRequestModel model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var result = await _orderService.GetById(model.OrderId);
            if (result.Status <= 0)
            {
                return BadRequest(result);
            }

            var order = result.Data as OrderResponseModel;
            model.Amount = order.TotalPrice;
            model.CreatedDate = DateTime.Now;
            model.Description = "Thanh toan";
            var paymentUrl = _vpnPaymentService.CreatePaymentUrl(HttpContext, model);
            return Ok(paymentUrl);
        }

        [HttpGet("PaymentExecute")]
        public IActionResult PaymentExecute()
        {
            var queryCollection = HttpContext.Request.Query;
            var result = _vpnPaymentService.PaymentExecute(queryCollection);
            if (result.Status <= 0)
            {
                return BadRequest(result);
            }
            return Ok(result);
        }

    }
}
