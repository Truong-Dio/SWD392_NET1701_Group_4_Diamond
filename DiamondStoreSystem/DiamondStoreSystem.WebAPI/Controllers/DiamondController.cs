using DiamondStoreSystem.Business.IService;
using DiamondStoreSystem.DTO.EntitiesRequest;
using Microsoft.AspNetCore.Mvc;

namespace DiamondStoreSystem.WebAPI.Controllers
{
    public class DiamondController : Controller
    {
        private readonly IDiamondService _diamondService;
        public DiamondController(IDiamondService diamondService)
        {
            _diamondService = diamondService;
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

        [HttpPut("DiamondID")]
        public IActionResult UpdateDiamond(string id, [FromBody]DiamondRequest diamondRequest)
        {
            diamondRequest.DiamondID = id;
            var result = _diamondService.Update(diamondRequest);
            return Ok(result);
        }

        [HttpPost("Diamond")]
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
    }
}
