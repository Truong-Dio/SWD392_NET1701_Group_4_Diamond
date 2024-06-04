using AutoMapper;
using DiamondStoreSystem.Business.Interface;
using DiamondStoreSystem.Business.IService;
using DiamondStoreSystem.Common;
using DiamondStoreSystem.DTO.Entities;
using DiamondStoreSystem.DTO.EntitiesRequest.Account;
using DiamondStoreSystem.DTO.EntitiesResponse.Account;
using DiamondStoreSystem.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DiamondStoreSystem.Business.Service
{
    public class AccountService : IAccountService
    {
        private readonly IMapper _mapper;
        private readonly IGenericRepository<Account> _repository;
        private readonly IOrderService _orderService;
        public AccountService(IGenericRepository<Account> repository, IMapper mapper, IOrderService orderService)
        {
            _mapper = mapper;
            _repository = repository;
            _orderService = orderService;
        }
        public IDSSResult Add(AccountRequest account)
        {
            try
            {
                var result = GetByID(account.AccountID);
                if (result.Data != null)
                {
                    return new DSSResult(Const.FAIL_CREATE_CODE, Const.FAIL_CREATE_MSG);
                }
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
                var temp = _orderService.HardDeleteRangeByAccountID(account.AccountID);
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
                _repository.Update(account);
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
                var accounts = _repository.GetAll();
                if (accounts == null)
                {
                    return new DSSResult(Const.FAIL_READ_CODE, Const.FAIL_READ_MSG);
                }
                return new DSSResult(Const.SUCCESS_CREATE_CODE, Const.SUCCESS_READ_MSG, accounts);
            }
            catch (Exception ex)
            {
                return new DSSResult(Const.ERROR_EXCEPTION, ex.Message);
            }
        }

        public IDSSResult Login(AccountAuth auth)
        {
            try
            {
                var result = _repository.GetFirstOrDefault(x => x.Email == auth.Email && x.Password == auth.Password);
                
                if (result == null)
                {
                    return new DSSResult(Const.FAIL_READ_CODE, Const.FAIL_READ_MSG);
                }

                switch (result.Role)
                {
                    case Common.Enum.Role.Customer:
                        return new DSSResult(Const.SUCCESS_READ_CODE, Const.SUCCESS_READ_MSG, _mapper.Map<AccountCustomerResponse>(result));
                    case Common.Enum.Role.SalesStaff:
                        return new DSSResult(Const.SUCCESS_READ_CODE, Const.SUCCESS_READ_MSG, _mapper.Map<AccountEmployeeResponse>(result));
                    case Common.Enum.Role.DeliveryStaff:
                        return new DSSResult(Const.SUCCESS_READ_CODE, Const.SUCCESS_READ_MSG, _mapper.Map<AccountEmployeeResponse>(result));
                    case Common.Enum.Role.Manager:
                        return new DSSResult(Const.SUCCESS_READ_CODE, Const.SUCCESS_READ_MSG, _mapper.Map<AccountEmployeeResponse>(result));
                    case Common.Enum.Role.Admin:
                        return new DSSResult(Const.SUCCESS_READ_CODE, Const.SUCCESS_READ_MSG, _mapper.Map<AccountEmployeeResponse>(result));
                    default:
                        return new DSSResult(Const.SUCCESS_READ_CODE, Const.SUCCESS_READ_MSG, result);
                }
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

        public IDSSResult GetByEmail(string email)
        {
            try
            {
                var accounts = _repository.Find(x => x.Email == email);
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

        public IDSSResult Update(AccountRequest AccountRequest)
        {
            try
            {
                var accountRequest = _mapper.Map<Account>(AccountRequest);
                var result = GetByEmail(accountRequest.Email);
                if (result.Data == null)
                {
                    return result;
                }
                _repository.Update(accountRequest);
                var check = _repository.Save();
                if (check == 0)
                {
                    return new DSSResult(Const.FAIL_UPDATE_CODE, Const.FAIL_UPDATE_MSG);
                }
                return new DSSResult(Const.SUCCESS_CREATE_CODE, Const.SUCCESS_READ_MSG);
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
                await _repository.UpdateByIdByString(_mapper.Map<Account>(account), email);
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
