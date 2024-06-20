using AutoMapper;
using DiamondStoreSystem.Business.Interface;
using DiamondStoreSystem.Business.IService;
using DiamondStoreSystem.Business.Service;
using DiamondStoreSystem.Common.Enum;
using DiamondStoreSystem.DTO.Entities;
using DiamondStoreSystem.DTO.EntitiesRequest.Account;
using DiamondStoreSystem.DTO.EntitiesResponse;
using Microsoft.AspNetCore.Authorization;
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

        [HttpGet("GetAll")]
        [Authorize(Roles = "Admin")]
        public IActionResult GetAllAccount()
        {
            var result = _accountService.Get();
            return Ok(result);
        }

        [HttpGet("Email")]
        [Authorize(Roles= "Customer,SalesStaff,Manager,Admin")]
        public IActionResult Get(string email)
        {
            var result = _accountService.GetByEmail(email);
            return Ok(result);
        }
        
        [HttpPut("UpdateByEmail")]
        [Authorize(Roles = "Customer,SalesStaff,Manager,Admin")]
        public async Task<IActionResult> UpdateAccountByClient(string email, [FromBody] AccountClient accountClient)
        {
            var result = await _accountService.UpdateByEmail(email, accountClient);
            return Ok(result);
        }
        [HttpPut("Update")]
        [Authorize(Roles = "Admin")]
        public IActionResult UpdateByAdmin(string accountid, [FromBody]AccountAllField account)
        {
            account.AccountID = accountid;
            return Ok(_accountService.Update(account));
        }
        [HttpPost("Create")]
        [Authorize(Roles = "Admin")]
        public IActionResult CreateNewAccount([FromBody] AccountRequest account)
        {
            var result = _accountService.Add(account);
            return Ok(result);
        }

        [HttpDelete("Delete")]
        [Authorize(Roles = "Admin,Manager")]
        public IActionResult Delete(string id)
        {
            var result = _accountService.Delete(id);
            return Ok(result);
        }

        [HttpDelete("HardDelete")]
        [Authorize(Roles = "Admin")]
        public IActionResult HardDelete(string id)
        {
            var result = _accountService.HardDelete(id);
            return Ok(result);
        }
    }
}
