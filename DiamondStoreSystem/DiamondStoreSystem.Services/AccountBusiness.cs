using DiamondStoreSystem.Business.Interface;
using DiamondStoreSystem.Common;
using DiamondStoreSystem.Contracts.DTOs;
using DiamondStoreSystem.Core.DAO;
using DiamondStoreSystem.Core.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DiamondStoreSystem.Business
{
    public interface IAccountBusiness
    {
        Task<IDSSResult> GetAll();
        Task<IDSSResult> GetById(string id);
        Task<IDSSResult> Create(AccountDTO result);
        Task<IDSSResult> Update(AccountDTO result);
        Task<IDSSResult> Delete(string id);
    }

    public class AccountBusiness : IAccountBusiness
    {
        private IEmployeeBusiness _employeeBusiness;
        private ICustomerBusiness _customerBusiness;
        private readonly AccountDAO _DAO;
        public AccountBusiness()
        {
            _employeeBusiness = new EmployeeBusiness();
            _customerBusiness = new CustomerBusiness();
            _DAO = new AccountDAO();
        }
        public static Account Transfer(AccountDTO accountDTO)
        {
            return new Account()
            {
                AccountID = accountDTO.AccountID,
                Email = accountDTO.Email,
                Password = accountDTO.Password,
            };
        }
        public async Task<IDSSResult> Create(AccountDTO result)
        {
            try
            {
                var acc = await GetById(result.AccountID);
                if (acc.Status == Const.SUCCESS_READ_CODE)
                {
                    return new DSSResult(Const.FAIL_CREATE_CODE, Const.FAIL_CREATE_MSG);
                }
                var check = await _DAO.CreateAsync(Transfer(result));
                if (check == 0)
                {
                    return new DSSResult(Const.FAIL_CREATE_CODE, Const.FAIL_CREATE_MSG);
                }
                return new DSSResult(Const.SUCCESS_CREATE_CODE, Const.SUCCESS_CREATE_MSG, check);
            }
            catch (Exception ex)
            {
                return new DSSResult(Const.ERROR_EXCEPTION, ex.Message);
            }
        }

        public async Task<IDSSResult> Delete(string id)
        {
            try
            {
                var acc = await GetById(id);
                if (acc.Status != Const.SUCCESS_READ_CODE)
                {
                    return new DSSResult(Const.FAIL_DELETE_CODE, Const.FAIL_DELETE_MSG);
                }
                await _customerBusiness.DeleteByAccountId(id);
                await _employeeBusiness.DeleteByAccountId(id);
                var check = await _DAO.RemoveAsync((Account)acc.Data);
                if (check == false)
                {
                    return new DSSResult(Const.FAIL_DELETE_CODE, Const.FAIL_DELETE_MSG);
                }
                return new DSSResult(Const.SUCCESS_DELETE_CODE, Const.SUCCESS_DELETE_MSG, check);
            }
            catch (Exception ex)
            {
                return new DSSResult(Const.ERROR_EXCEPTION, ex.Message);
            }
        }

        public async Task<IDSSResult> GetAll()
        {
            try
            {
                var result = await _DAO.GetAllAsync();
                if (result == null)
                {
                    return new DSSResult(Const.FAIL_READ_CODE, Const.FAIL_READ_MSG);
                }
                return new DSSResult(Const.SUCCESS_READ_CODE, Const.SUCCESS_READ_MSG, result);
            }
            catch (Exception ex)
            {
                return new DSSResult(Const.ERROR_EXCEPTION, ex.Message);
            }
        }

            public async Task<IDSSResult> GetById(string id)
        {
            try
            {
                var result = await _DAO.GetByIdAsync(id);
                if (result == null)
                {
                    return new DSSResult(Const.FAIL_READ_CODE, Const.FAIL_READ_MSG);
                }
                return new DSSResult(Const.SUCCESS_READ_CODE, Const.SUCCESS_READ_MSG, result);
            }
            catch (Exception ex)
            {
                return new DSSResult(Const.ERROR_EXCEPTION, ex.Message);
            }
        }

        public async Task<IDSSResult> Update(AccountDTO result)
        {
            try
            {
                var acc = await GetById(result.AccountID);
                if (acc.Status != Const.SUCCESS_READ_CODE)
                {
                    return new DSSResult(Const.FAIL_UPDATE_CODE, Const.FAIL_UPDATE_MSG);
                }
                var check = await _DAO.UpdateAsync(Transfer(result));
                if (check == 0)
                {
                    return new DSSResult(Const.FAIL_UPDATE_CODE, Const.FAIL_UPDATE_MSG);
                }
                return new DSSResult(Const.SUCCESS_UPDATE_CODE, Const.SUCCESS_UPDATE_MSG, check);
            }
            catch (Exception ex)
            {
                return new DSSResult(Const.ERROR_EXCEPTION, ex.Message);
            }
        }
    }
}
