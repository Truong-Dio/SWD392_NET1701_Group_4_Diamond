using AutoMapper;
using DiamondStoreSystem.Business.IService;
using DiamondStoreSystem.Business.Service;
using DiamondStoreSystem.DTO.EntitiesRequest.Product;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace DiamondStoreSystem.WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AccessoryController : ControllerBase
    {
        private readonly IAccessoryService _accessoryService;
        public AccessoryController(IAccessoryService accessoryService)
        {
            _accessoryService = accessoryService;
        }

        [HttpGet("GetAll")]
        public IActionResult GetAllAccessory()
        {
            var result = _accessoryService.Get();
            return Ok(result);
        }

        [HttpGet("GetById")]
        public IActionResult GetAccessory(string id)
        {
            return Ok(_accessoryService.GetByID(id));
        }

        [HttpPost("Create")]
        public IActionResult CreateAccessory([FromBody] AccessoryRequest request)
        {
            return Ok(_accessoryService.Add(request));
        }

        [HttpPut("Update")]
        public IActionResult UpdateAccessory(string accessoryID, [FromBody] AccessoryRequest request)
        {
            request.AccessoryID = accessoryID;
            return Ok(_accessoryService.Update(request));
        }

        [HttpDelete("Delete")]
        public IActionResult DeleteAccessory(string accessoryID)
        {
            return Ok(_accessoryService.Delete(accessoryID));
        }

        [HttpDelete("HardDelete")]
        public IActionResult HardDelete(string accessoryID)
        {
            return Ok(_accessoryService.HardDelete(accessoryID));
        }
    }
}
