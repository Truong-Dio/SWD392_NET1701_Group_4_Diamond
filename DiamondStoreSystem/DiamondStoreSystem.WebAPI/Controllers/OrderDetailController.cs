using AutoMapper;
using DiamondStoreSystem.Business.IService;
using DiamondStoreSystem.Business.Service;
using DiamondStoreSystem.DTO.EntitiesRequest.Order;
using DiamondStoreSystem.DTO.EntitiesRequest.Product;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace DiamondStoreSystem.WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrderDetailController : ControllerBase
    {
        private readonly IOrderDetailService _orderDetailService;
        private readonly IMapper _mapper;
        public OrderDetailController(IOrderDetailService orderDetailService, IMapper mapper)
        {
            _orderDetailService = orderDetailService;
            _mapper = mapper;
        }

        [HttpGet("GetAll")]
        public IActionResult GetAllOrderDetail()
        {
            var result = _orderDetailService.Get();
            return Ok(result);
        }

        [HttpGet("GetById")]
        public IActionResult GetOrderDetail(string id)
        {
            return Ok(_orderDetailService.GetByID(id));
        }

        [HttpGet("GetByOrderID")]
        public IActionResult GetByOrderID(string id) { return Ok(_orderDetailService.GetByOrderID(id)); }

        [HttpGet("GetByAccessoryID")]
        public IActionResult GetByAccessoryID(string id) { return Ok(_orderDetailService.GetByAccessoryID(id)); }

        [HttpGet("GetByDiamondID")]
        public IActionResult GetByDiamondID(string id) { return Ok(_orderDetailService.GetByDiamondID(id)); }

        [HttpPost("Create")]
        public IActionResult CreateOrderDetail([FromBody] OrderDetailRequest request)
        {
            return Ok(_orderDetailService.Add(request));
        }

        //[HttpPut("Update")]
        //public IActionResult UpdateOrderDetail(string orderDetailID, [FromBody] OrderDetailRequest request)
        //{
        //    request.OrderDetailID = orderDetailID;
        //    return Ok(_orderDetailService.Update(request));
        //}

        [HttpDelete("Delete")]
        public IActionResult DeleteOrderDetail(string orderDetailID)
        {
            return Ok(_orderDetailService.Delete(orderDetailID));
        }

        [HttpDelete("HardDelete")]
        public IActionResult HardDelete(string orderDetailID)
        {
            return Ok(_orderDetailService.HardDelete(orderDetailID));
        }
    }
}
