using AutoMapper;
using DiamondStoreSystem.Business.Interface;
using DiamondStoreSystem.Business.IService;
using DiamondStoreSystem.Business.Service;
using DiamondStoreSystem.DTO.Entities;
using DiamondStoreSystem.DTO.EntitiesRequest.Account;
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
        private readonly IMapper _mapper;
        public AccountController(IAccountService accountService, IMapper mapper)
        {
            _mapper = mapper;
            _accountService = accountService;
        }

        [HttpGet("GetAll")]
        public IActionResult GetAllAccount()
        {
            var result = _accountService.Get();
            return Ok(result);
        }

        [HttpGet("Email")]
        public IActionResult Get(string email)
        {
            var result = _accountService.GetByEmail(email);
            return Ok(result);
        }

        [HttpPost("Login")]
        public IActionResult Post(string email, string password)
        {
            var result = _accountService.Login(email, password);
            return Ok(result);
        }

        [HttpPut("UpdateByEmail")]
        public async Task<IActionResult> UpdateAccountByClient(string email, [FromBody] AccountClient accountClient)
        {
            var result = await _accountService.UpdateByEmail(email, accountClient);
            return Ok(result);
        }
        [HttpPut("Update")]
        public IActionResult UpdateByAdmin(string accountid, [FromBody]AccountAllField account)
        {
            account.AccountID = accountid;
            return Ok(_accountService.Update(account));
        }
        [HttpPost("Create")]
        public IActionResult CreateNewAccount([FromBody] AccountRequest account)
        {
            var result = _accountService.Add(account);
            return Ok(result);
        }

        [HttpDelete("Delete")]
        public IActionResult Delete(string id)
        {
            var result = _accountService.HardDelete(id);
            return Ok(result);
        }

        [HttpDelete("HardDelete")]
        public IActionResult HardDelete(string id)
        {
            var result = _accountService.HardDelete(id);
            return Ok(result);
        }
    }
}
