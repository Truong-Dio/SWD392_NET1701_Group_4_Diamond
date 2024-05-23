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
    public class PurchaseOrderDAO : BaseDAO<PurchaseOrder>
    {
        public PurchaseOrderDAO()
        {
            
        }

        public async Task<List<PurchaseOrder>> GetByUserUID(string userUID)
        {
            try
            {
                return await (from po in _dbSet
                              where po.UserUID == userUID
                              select po).ToListAsync();
            }
            catch (Exception)
            {
                throw;
            }
        }

        public async Task<List<PurchaseOrder>> GetByEmpID(string userUID)
        {
            try
            {
                return await (from po in _dbSet
                              where po.EmpID == userUID
                              select po).ToListAsync();
            }
            catch (Exception)
            {
                throw;
            }
        }
    }
}
