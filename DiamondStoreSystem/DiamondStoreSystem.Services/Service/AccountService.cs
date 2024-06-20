using AutoMapper;
using DiamondStoreSystem.Business.Interface;
using DiamondStoreSystem.Business.IService;
using DiamondStoreSystem.Common;
using DiamondStoreSystem.DTO.Entities;
using DiamondStoreSystem.DTO.EntitiesRequest.Account;
using DiamondStoreSystem.DTO.EntitiesResponse.Account;
using DiamondStoreSystem.Repository;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;

namespace DiamondStoreSystem.Business.Service
{
    public class AccountService : IAccountService
    {
        private readonly IMapper _mapper;
        private readonly IGenericRepository<Account> _repository;
        private readonly IServiceProvider _serviceProvider;

        public AccountService(IGenericRepository<Account> repository, IMapper mapper, IServiceProvider serviceProvider)
        {
            _mapper = mapper;
            _repository = repository;
            _serviceProvider = serviceProvider;
        }

        private IOrderService OrderService => _serviceProvider.GetService<IOrderService>();
        public IDSSResult Add(AccountRequest account)
        {
            try
            {
                var result = IsExist(account.AccountID);
                if (result.Data != null)
                {
                    return new DSSResult(Const.FAIL_CREATE_CODE, Const.FAIL_CREATE_MSG);
                }
                account.Password = Util.HashPassword(account.Password);
                _repository.Insert(_mapper.Map<Account>(account));
                int check = _repository.Save();
                if (check == 0)
                {
                    return new DSSResult(Const.FAIL_CREATE_CODE, Const.FAIL_CREATE_MSG);
                }
                return new DSSResult(Const.SUCCESS_CREATE_CODE, Const.SUCCESS_CREATE_MSG);
            }
            catch (Exception ex)
            {
                return new DSSResult(Const.ERROR_EXCEPTION, ex.Message);
            }
        }
        private IDSSResult IsExist(string AccountId)
        {
            try
            {
                var account = _repository.GetFirstOrDefault(x => x.AccountID == AccountId);
                if (account == null)
                {
                    return new DSSResult(Const.FAIL_READ_CODE, Const.FAIL_READ_MSG);
                }
                return new DSSResult(Const.SUCCESS_CREATE_CODE, Const.SUCCESS_READ_MSG, account);
            }
            catch (Exception ex)
            {
                return new DSSResult(Const.ERROR_EXCEPTION, ex.Message);
            }
        }
        public IDSSResult HardDelete(string AccountId)
        {
            try
            {
                //var accountRequest = _mapper.Map<Account>(AccountRequest);
                var result = GetByID(AccountId);
                if (result.Data == null)
                {
                    return result;
                }
                var account = _mapper.Map<Account>(result.Data);
                account.Block = true;
                var temp = OrderService.HardDeleteRangeByAccountID(account.AccountID);
                if (temp.Status <= 0)
                {
                    return temp;
                }
                _repository.HardDeleteByString(account.AccountID);
                var check = _repository.Save();
                if (check == 0)
                {
                    return new DSSResult(Const.FAIL_DELETE_CODE, Const.FAIL_DELETE_MSG);
                }
                return new DSSResult(Const.SUCCESS_DELETE_CODE, Const.SUCCESS_DELETE_MSG);
            }
            catch (Exception ex)
            {
                return new DSSResult(Const.ERROR_EXCEPTION, ex.Message);
            }
        }
        public IDSSResult Delete(string AccountId)
        {
            try
            {
                var result = GetByEmail(AccountId);
                if (result.Data == null)
                {
                    return result;
                }
                var account = _mapper.Map<Account>(result.Data);
                account.Block = true;
                _repository.UpdateByIdByString(account, AccountId);
                var check = _repository.Save();
                if (check == 0)
                {
                    return new DSSResult(Const.FAIL_UPDATE_CODE, Const.FAIL_UPDATE_MSG);
                }
                return new DSSResult(Const.SUCCESS_UPDATE_CODE, Const.SUCCESS_UPDATE_MSG);
            }
            catch (Exception ex)
            {
                return new DSSResult(Const.ERROR_EXCEPTION, ex.Message);
            }
        }

        public IDSSResult Get()
        {
            try
            {
                var result = _repository.GetWhere(a => !a.Block);
                if (result == null)
                {
                    return new DSSResult(Const.FAIL_READ_CODE, Const.FAIL_READ_MSG);
                }
                var account = result.Result as List<Account>;
                return new DSSResult(Const.SUCCESS_CREATE_CODE, Const.SUCCESS_READ_MSG, account.Select(a => _mapper.Map<AccountAllField>(a)));
            }
            catch (Exception ex)
            {
                return new DSSResult(Const.ERROR_EXCEPTION, ex.Message);
            }
        }

        public IDSSResult Login(string email, string password)
        {
            try
            {
                var result = _repository.GetFirstOrDefault(x => x.Email == email && x.Password == Util.HashPassword(password) && !x.Block);
                
                if (result == null)
                {
                    return new DSSResult(Const.FAIL_READ_CODE, Const.FAIL_READ_MSG);
                }
                return new DSSResult(Const.SUCCESS_READ_CODE, Const.SUCCESS_READ_MSG, new AccountLogin
                {
                    AccountID = result.AccountID,
                    Role = result.Role.ToString(),
                    Email = email
                    });
            }
            catch (Exception ex)
            {
                return new DSSResult(Const.ERROR_EXCEPTION, ex.Message);
            }
        }

        public IDSSResult GetByID(string AccountId)
        {
            try
            {
                var account = _repository.GetFirstOrDefault(x => x.AccountID == AccountId && !x.Block);
                if (account == null)
                {
                    return new DSSResult(Const.FAIL_READ_CODE, Const.FAIL_READ_MSG);
                }
                return new DSSResult(Const.SUCCESS_CREATE_CODE, Const.SUCCESS_READ_MSG, account);
            }
            catch (Exception ex)
            {
                return new DSSResult(Const.ERROR_EXCEPTION, ex.Message);
            }
        }

        public IDSSResult GetByEmail(string email)
        {
            try
            {
                var accounts = _repository.Find(x => x.Email == email && !x.Block);
                if (accounts == null)
                {
                    return new DSSResult(Const.FAIL_READ_CODE, Const.FAIL_READ_MSG);
                }
                return new DSSResult(Const.SUCCESS_CREATE_CODE, Const.SUCCESS_READ_MSG, _mapper.Map<AccountEmployeeResponse>(accounts));
            }
            catch (Exception ex)
            {
                return new DSSResult(Const.ERROR_EXCEPTION, ex.Message);
            }
        }

        public IDSSResult Update(AccountAllField account)
        {
            try
            {
                var accountRequest = _mapper.Map<Account>(account);
                var result = GetByEmail(accountRequest.Email);
                if (result.Data == null)
                {
                    return result;
                }
                _repository.UpdateByIdByString(accountRequest, accountRequest.AccountID);
                var check = _repository.Save();
                if (check == 0)
                {
                    return new DSSResult(Const.FAIL_UPDATE_CODE, Const.FAIL_UPDATE_MSG);
                }
                return new DSSResult(Const.SUCCESS_UPDATE_CODE, Const.SUCCESS_UPDATE_MSG);
            }
            catch (Exception ex)
            {
                return new DSSResult(Const.ERROR_EXCEPTION, ex.Message);
            }
        }

        public async Task<IDSSResult> UpdateByEmail(string email, AccountClient accountClient)
        {
            try
            {
                var result = GetByEmail(email);
                if (result.Data == null)
                {
                    return result;
                }
                var account = (AccountEmployeeResponse)result.Data;
                account.JoinDate = accountClient.JoinDate;
                account.FirstName = accountClient.FirstName;
                account.LastName = accountClient.LastName;
                account.Email = email;
                account.DOB = accountClient.DOB;
                account.Phone = accountClient.Phone;
                account.Address = accountClient.Address;
                await _repository.UpdateByIdByString(_mapper.Map<Account>(account), account.AccountID);
                var check = _repository.Save();
                if (check == 0)
                {
                    return new DSSResult(Const.FAIL_UPDATE_CODE, Const.FAIL_UPDATE_MSG);
                }
                return new DSSResult(Const.SUCCESS_CREATE_CODE, Const.SUCCESS_CREATE_MSG);
            }
            catch (Exception ex)
            {
                return new DSSResult(Const.ERROR_EXCEPTION, ex.Message);
            }
        }
    }
}
