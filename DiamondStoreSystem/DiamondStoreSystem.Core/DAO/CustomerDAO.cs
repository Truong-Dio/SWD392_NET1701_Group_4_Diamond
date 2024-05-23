using DiamondStoreSystem.Core.Base;
using DiamondStoreSystem.Core.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DiamondStoreSystem.Core.DAO
{
    public class CustomerDAO : BaseDAO<Customer>
    {
        public async Task<Customer> GetByAccountId(string accountid)
        {
			try
			{
				return await _dbSet.FirstOrDefaultAsync(a => a.AccountID == accountid);
			}
			catch (Exception)
			{

				throw;
			}
        }
    }
}
