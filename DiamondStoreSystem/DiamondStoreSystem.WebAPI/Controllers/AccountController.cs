using DiamondStoreSystem.Business.Interface;
using DiamondStoreSystem.Business.IService;
using DiamondStoreSystem.Business.Service;
using DiamondStoreSystem.DTO.Entities;
using DiamondStoreSystem.DTO.EntitiesRequest;
using DiamondStoreSystem.DTO.EntitiesResponse;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace DiamondStoreSystem.WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AccountController : ControllerBase
    {
        private readonly IAccountService _accountService;
        public AccountController(IAccountService accountService)
        {
            _accountService = accountService;
        }

        [HttpGet("Accounts")]
        public IActionResult GetAllAccount()
        {
            var result = _accountService.Get();
            if (result.Status <= 0)
            {
                return Ok(result.Message);
            }
            return Ok(result.Data);
        }

        [HttpGet("Email")]
        public IActionResult Get(string email)
        {
            var result = _accountService.GetByEmail(email);
            if (result.Status <= 0)
            {
                return Ok(result.Message);
            }
            return Ok(result.Data);
        }

        [HttpPut("Email")]
        public async Task<IActionResult> UpdateAccountByClient(string email, [FromBody] AccountClient accountClient)
        {
            var result = await _accountService.UpdateByEmail(email, accountClient);
            if (result.Status <= 0)
            {
                return Ok(result.Message);
            }
            return Ok(result.Message);
        }

        [HttpPost]
        public IActionResult CreateNewAccount([FromBody] AccountRequest account)
        {
            var result = _accountService.Add(account);
            if (result.Status <= 0)
            {
                return Ok(result.Message);
            }
            return Ok(result.Message);
        }
    }
}
