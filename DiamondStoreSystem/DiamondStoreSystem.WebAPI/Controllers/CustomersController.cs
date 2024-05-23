using DiamondStoreSystem.Business;
using DiamondStoreSystem.Contract.DTOs;
using DiamondStoreSystem.Core.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace DiamondStoreSystem.WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CustomersController : ControllerBase
    {
        private ICustomerBusiness _business = new CustomerBusiness();
        // GET: api/<CustomersController>
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Customer>>> GetCustomersAsync()
        {
            var result = await _business.GetAll();
            return Ok((IEnumerable<Customer>)result.Data);
        }

        // GET api/<CustomersController>/5
        [HttpGet("{id}")]
        public async Task<IActionResult> Get(string id)
        {
            var result = await _business.GetById(id);
            Customer account = (Customer)result.Data;
            return Ok(account);
        }

        // POST api/<CustomersController>
        [HttpPost]
        public async Task<IActionResult> Post([FromBody] CustomerDTO account)
        {
            var result = await _business.Create(account);
            return Ok(result.Message);
        }

        // PUT api/<CustomersController>/5
        [HttpPut]
        public async Task<IActionResult> Put([FromBody] CustomerDTO value)
        {
            var result = await _business.Update(value);
            return Ok(result.Message);
        }

        // DELETE api/<CustomersController>/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(string id)
        {
            var result = await _business.Delete(id);
            return Ok(result.Message);
        }
        [HttpGet("GetByAccountId/{id}")]
        public async Task<IActionResult> GetByAccount(string id)
        {
            var result = await _business.GetByAccountId(id);
            Customer account = (Customer)result.Data;
            return Ok(account);
        }
    }
}
