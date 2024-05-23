using DiamondStoreSystem.Business;
using DiamondStoreSystem.Contracts.DTOs;
using DiamondStoreSystem.Core.Models;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace DiamondStoreSystem.WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AccountsController : ControllerBase
    {
        private IAccountBusiness accountBusiness = new AccountBusiness();
        // GET: api/<AccountsController>
        [HttpGet]
        public async Task<ActionResult<IEnumerable<AccountDTO>>> GetAccountsAsync()
        {
            var result = await accountBusiness.GetAll();
            return Ok((IEnumerable<Account>)result.Data);
        }

        // GET api/<AccountsController>/5
        [HttpGet("{id}")]
        public async Task<IActionResult> Get(string id)
        {
            var result = await accountBusiness.GetById(id);
            Account account = (Account)result.Data;
            return Ok(account);
        }

        // POST api/<AccountsController>
        [HttpPost]
        public async Task<IActionResult> Post([FromBody] AccountDTO value)
        {
            var result = await accountBusiness.Create(value);
            return Ok(result.Message);
        }

        // PUT api/<AccountsController>/5
        [HttpPut]
        public async Task<IActionResult> Put([FromBody] AccountDTO value)
        {
            var result = await accountBusiness.Update(value);
            return Ok(result.Message);
        }

        // DELETE api/<AccountsController>/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(string id)
        {
            var result = await accountBusiness.Delete(id);
            return Ok(result.Message);
        }
    }
}
