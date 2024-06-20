using AutoMapper;
using DiamondStoreSystem.Business.IService;
using DiamondStoreSystem.Business.Service;
using DiamondStoreSystem.DTO.EntitiesRequest.Account;
using DiamondStoreSystem.DTO.EntitiesRequest.Order;
using DiamondStoreSystem.DTO.EntitiesRequest.Product;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System.Text;
using System.Text.Json;

namespace DiamondStoreSystem.WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrderController : ControllerBase
    {
        private readonly IOrderService _orderService;
        public OrderController(IOrderService orderService)
        {
            _orderService = orderService;
        }

        [HttpGet("GetAll")]
        public IActionResult GetAllOrder()
        {
            var result = _orderService.Get();
            return Ok(result);
        }

        [HttpGet("GetById")]
        public IActionResult GetOrder(string id)
        {
            return Ok(_orderService.GetByID(id));
        }

        [HttpGet("GetByAccountId")]
        public IActionResult GetByAccountId(string id)
        {
            return Ok(_orderService.GetOrdersByAccountID(id));
        }

        [HttpPost("Create")]
        public IActionResult CreateOrder([FromBody] OrderRequest request)
        {
            var value = HttpContext.Session.Get("accId");
            var userJson = Encoding.UTF8.GetString(value);
            var user = JsonConvert.DeserializeObject<AccountLogin>(userJson);
            request.AccountID = user.AccountID;
            return Ok(_orderService.Add(request));
        }

        [HttpPut("Update")]
        public IActionResult UpdateOrder(string orderID, [FromBody] OrderRequest request)
        {
            request.OrderID = orderID;
            return Ok(_orderService.Update(request));
        }

        [HttpDelete("Delete")]
        public IActionResult DeleteOrder(string orderID)
        {
            return Ok(_orderService.Delete(orderID));
        }

        [HttpDelete("HardDelete")]
        public IActionResult HardDelete(string orderID)
        {
            return Ok(_orderService.HardDelete(orderID));
        }
    }
}
