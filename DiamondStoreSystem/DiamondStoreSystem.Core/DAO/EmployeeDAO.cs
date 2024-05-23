using DiamondStoreSystem.Core.Models;
using DiamondStoreSystem.Core.Base;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace DiamondStoreSystem.Core.DAO
{
    public class EmployeeDAO : BaseDAO<Employee>
    {
        public async Task<Employee> GetByAccountId(string accountid)
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
