using DiamondStoreSystem.Business;
using DiamondStoreSystem.Contract.DTOs;
using DiamondStoreSystem.Contracts.DTOs;
using DiamondStoreSystem.Core.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace DiamondStoreSystem.WebAPI.Controllers
{
    [Route("api/")]
    [ApiController]
    public class PurchaseOrdersController : ControllerBase
    {
        private IPurchaseOrderBusiness _business = new PurchaseOrderBusiness();
        // GET: api/<PurchaseOrdersController>
        [HttpGet("PurchaseOrder")]
        public async Task<ActionResult<IEnumerable<PurchaseOrder>>> GetPurchaseOrdersAsync()
        {
            var result = await _business.GetAll();
            return Ok((IEnumerable<PurchaseOrder>)result.Data);
        }

        // GET api/<PurchaseOrdersController>/5
        [HttpGet("PurchaseOrder/{id}")]
        public async Task<IActionResult> Get(string id)
        {
            var result = await _business.GetById(id);
            PurchaseOrder account = (PurchaseOrder)result.Data;
            return Ok(account);
        }

        // POST api/<PurchaseOrdersController>
        [HttpPost("PurchaseOrder")]
        public async Task<IActionResult> Post([FromBody] PurchaseOrderDTO account)
        {
            var result = await _business.Create(account);
            return Ok(result.Message);
        }

        // PUT api/<PurchaseOrdersController>/5
        [HttpPut("PurchaseOrder")]
        public async Task<IActionResult> Put([FromBody] PurchaseOrderDTO value)
        {
            var result = await _business.Update(value);
            return Ok(result.Message);
        }

        // DELETE api/<PurchaseOrdersController>/5
        [HttpDelete("PurchaseOrder/{id}")]
        public async Task<IActionResult> Delete(string id)
        {
            var result = await _business.Delete(id);
            return Ok(result.Message);
        }

        [HttpGet("PurchaseOrderByUserId/{userId}")]
        public async Task<ActionResult<IEnumerable<PurchaseOrder>>> GetPurchaseOrdersByUserId(string userId)
        {
            var result = await _business.GetByUserUID(userId);
            return Ok((IEnumerable<PurchaseOrder>)result.Data);
        }

        [HttpGet("PurchaseOrderByEmpId/{empId}")]
        public async Task<ActionResult<IEnumerable<PurchaseOrder>>> GetPurchaseOrdersByEmpId(string empId)
        {
            var result = await _business.GetByEmpID(empId);
            return Ok((IEnumerable<PurchaseOrder>)result.Data);
        }
    }
}
