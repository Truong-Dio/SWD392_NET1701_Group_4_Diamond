using DiamondStoreSystem.Business.Interface;
using DiamondStoreSystem.DTO.EntitiesRequest.Account;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DiamondStoreSystem.Business.IService
{
    public interface IAccountService
    {
        public IDSSResult Get();
        public IDSSResult Update(AccountRequest AccountRequest);
        public IDSSResult Delete(string AccountId);
        public IDSSResult Add(AccountRequest AccountRequest);
        public IDSSResult GetByID(string AccountId);
        public IDSSResult GetByEmail(string email);
        public IDSSResult Login(AccountAuth auth);
        public IDSSResult HardDelete(string AccountId);
        public Task<IDSSResult> UpdateByEmail(string email, AccountClient accountClient);
    }
}
