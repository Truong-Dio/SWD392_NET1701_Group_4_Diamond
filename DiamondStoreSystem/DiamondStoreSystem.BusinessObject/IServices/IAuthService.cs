using DiamondStoreSystem.BusinessLayer.Commons;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DiamondStoreSystem.BusinessLayer.IServices
{
    public interface IAuthService
    {
        Task<IDSSResult> Login(string email, string password);
        Task<IDSSResult> GetByEmail(string email);
    }
}
