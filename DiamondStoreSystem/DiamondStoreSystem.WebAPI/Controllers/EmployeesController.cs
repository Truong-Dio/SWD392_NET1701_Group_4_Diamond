using DiamondStoreSystem.Business;
using DiamondStoreSystem.Contracts.DTOs;
using DiamondStoreSystem.Core.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace DiamondStoreSystem.WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeesController : ControllerBase
    {
        private IEmployeeBusiness _business = new EmployeeBusiness();
        // GET: api/<EmployeesController>
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Employee>>> GetEmployeesAsync()
        {
            var result = await _business.GetAll();
            return Ok((IEnumerable<Employee>)result.Data);
        }

        // GET api/<EmployeesController>/5
        [HttpGet("{id}")]
        public async Task<IActionResult> Get(string id)
        {
            var result = await _business.GetById(id);
            Employee account = (Employee)result.Data;
            return Ok(account);
        }

        // POST api/<EmployeesController>
        [HttpPost]
        public async Task<IActionResult> Post([FromBody] EmployeeDTO account)
        {
            var result = await _business.Create(account);
            return Ok(result.Message);
        }

        // PUT api/<EmployeesController>/5
        [HttpPut]
        public async Task<IActionResult> Put([FromBody] EmployeeDTO value)
        {
            var result = await _business.Update(value);
            return Ok(result.Message);
        }

        // DELETE api/<EmployeesController>/5
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
            Employee account = (Employee)result.Data;
            return Ok(account);
        }
    }
}
