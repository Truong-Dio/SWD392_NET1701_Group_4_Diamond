using DiamondStoreSystem.Business.Interface;
using DiamondStoreSystem.Common;
using DiamondStoreSystem.Contracts.DTOs;
using DiamondStoreSystem.Core.DAO;
using DiamondStoreSystem.Core.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http.Headers;
using System.Text;
using System.Threading.Tasks;

namespace DiamondStoreSystem.Business
{
    public interface IEmployeeBusiness
    {
        Task<IDSSResult> GetAll();
        Task<IDSSResult> GetById(string id);
        Task<IDSSResult> Create(EmployeeDTO result);
        Task<IDSSResult> Update(EmployeeDTO result);
        Task<IDSSResult> Delete(string id);
        Task<IDSSResult> GetByAccountId(string id);
        Task<IDSSResult> DeleteByAccountId(string id);
    }

    public class EmployeeBusiness : IEmployeeBusiness
    {
        private readonly EmployeeDAO _DAO;
        private readonly IPurchaseOrderBusiness _purchaseOrderBusiness;
        public EmployeeBusiness()
        {
            _DAO = new EmployeeDAO();
            _purchaseOrderBusiness = new PurchaseOrderBusiness();
        }
        public async Task<IDSSResult> GetByAccountId(string id)
        {
            try
            {
                var result = await _DAO.GetByAccountId(id);
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
        public async Task<IDSSResult> DeleteByAccountId(string id)
        {
            try
            {
                var acc = await GetByAccountId(id);
                if (acc.Status != Const.SUCCESS_READ_CODE)
                {
                    return new DSSResult(Const.FAIL_DELETE_CODE, Const.FAIL_DELETE_MSG);
                }
                var check = await _DAO.RemoveAsync((Employee)acc.Data);
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
        public async Task<IDSSResult> Create(EmployeeDTO result)
        {
            try
            {
                var acc = await GetById(result.EmpID);
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

        private static Employee Transfer(EmployeeDTO result)
        {
            return new Employee()
            {
                AccountID = result.AccountID,
                DOB = result.DOB,
                EmpAddress = result.EmpAddress,
                EmpGender = result.EmpGender,
                EmpID = result.EmpID,
                EmpJoinDate = result.EmpJoinDate,
                EmpName = result.EmpName,
                EmpPhone = result.EmpPhone,
            };
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
                var check = await _DAO.RemoveAsync((Employee)acc.Data);
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

        public async Task<IDSSResult> Update(EmployeeDTO result)
        {
            try
            {
                var acc = await GetById(result.EmpID);
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
