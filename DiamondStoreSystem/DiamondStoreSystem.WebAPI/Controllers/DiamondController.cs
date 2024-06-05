using AutoMapper;
using DiamondStoreSystem.Business.IService;
using DiamondStoreSystem.Business.Service;
using DiamondStoreSystem.DTO.EntitiesRequest.Product;
using Microsoft.AspNetCore.Mvc;

namespace DiamondStoreSystem.WebAPI.Controllers
{
    public class DiamondController : Controller
    {
        private readonly IDiamondService _diamondService;
        private readonly IMapper _mapper;
        public DiamondController(IDiamondService diamondService, IMapper mapper)
        {
            _diamondService = diamondService;
            _mapper = mapper;
        }

        [HttpGet("Diamonds")]
        public IActionResult GetAllDiamond()
        {
            var result = _diamondService.Get();
            return Ok(result);
        }

        [HttpGet("Diamond")]
        public IActionResult GetDiamond(string id)
        {
            var result = _diamondService.GetByID(id);
            return Ok(result);
        }

        [HttpPut("Update")]
        public IActionResult UpdateDiamond(string id, [FromBody]DiamondRequest diamondRequest)
        {
            diamondRequest.DiamondID = id;
            var result = _diamondService.Update(diamondRequest);
            return Ok(result);
        }

        [HttpPost("Create")]
        public IActionResult AddDiamond([FromBody]DiamondRequest diamondRequest)
        {
            var result = _diamondService.Add(diamondRequest);
            return Ok(result);
        }

        [HttpGet("Certificate")]
        public IActionResult GetCertificate(string id)
        {
            var result = _diamondService.ShowCertificate(id);
            return Ok(result);
        }

        [HttpDelete("Delete")]
        public IActionResult DeleteDiamond(string id)
        {
            var result = _diamondService.Delete(id);
            return Ok(result);
        }

        [HttpDelete("HardDelete")]
        public IActionResult Delete(string id)
        {
            var result = _diamondService.HardDelete(id);
            return Ok(result);
        }
    }
}
