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
    public interface IPurchaseOrderBusiness
    {
        Task<IDSSResult> GetAll();
        Task<IDSSResult> GetById(string id);
        Task<IDSSResult> Create(PurchaseOrderDTO result);
        Task<IDSSResult> Update(PurchaseOrderDTO result);
        Task<IDSSResult> Delete(string id);
        Task<IDSSResult> DeleteByUserUId(string id);
        Task<IDSSResult> GetByUserUID(string id);
        Task<IDSSResult> DeleteByEmpId(string id);
        Task<IDSSResult> GetByEmpID(string id);
    }

    public class PurchaseOrderBusiness : IPurchaseOrderBusiness
    {
        private readonly PurchaseOrderDAO _DAO;
        public PurchaseOrderBusiness()
        {
            _DAO = new PurchaseOrderDAO();
        }
        public async Task<IDSSResult> Create(PurchaseOrderDTO result)
        {
            try
            {
                var acc = await GetById(result.POID);
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
                var check = await _DAO.RemoveAsync((PurchaseOrder)acc.Data);
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
        private async Task<bool> DeleteMultiple(List<PurchaseOrder> list)
        {
            foreach (var item in list)
            {
                var check = await Delete(item.POID);
                if (check.Status != Const.SUCCESS_DELETE_CODE)
                {
                    return false;
                }
            }
            return true;
        }
        public async Task<IDSSResult> DeleteByUserUId(string id)
        {
            try
            {
                var acc = await GetByUserUID(id);
                if (acc.Status != Const.SUCCESS_READ_CODE)
                {
                    return new DSSResult(Const.FAIL_DELETE_CODE, Const.FAIL_DELETE_MSG);
                }
                List<PurchaseOrder> purchaseOrders = (List<PurchaseOrder>)acc.Data;
                await DeleteMultiple(purchaseOrders);
                return new DSSResult(Const.SUCCESS_DELETE_CODE, Const.SUCCESS_DELETE_MSG);
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

        public async Task<IDSSResult> GetByUserUID(string id)
        {
            try
            {
                var result = await _DAO.GetByUserUID(id);
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

        public async Task<IDSSResult> Update(PurchaseOrderDTO result)
        {
            try
            {
                var acc = await GetById(result.POID);
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

        private PurchaseOrder Transfer(PurchaseOrderDTO result)
        {
            return new PurchaseOrder()
            {
                POID = result.POID,
                EmpID = result.EmpID,
                DateOrdered = result.DateOrdered,
                DateReceived = result.DateReceived,
                OrderStatus = result.OrderStatus,
                OrderTotal = result.OrderTotal,
                UserUID = result.UserUID,
            };
        }

        public async Task<IDSSResult> DeleteByEmpId(string id)
        {
            try
            {
                var acc = await GetByEmpID(id);
                if (acc.Status != Const.SUCCESS_READ_CODE)
                {
                    return new DSSResult(Const.FAIL_DELETE_CODE, Const.FAIL_DELETE_MSG);
                }
                List<PurchaseOrder> purchaseOrders = (List<PurchaseOrder>)acc.Data;
                await DeleteMultiple(purchaseOrders);
                return new DSSResult(Const.SUCCESS_DELETE_CODE, Const.SUCCESS_DELETE_MSG);
            }
            catch (Exception ex)
            {
                return new DSSResult(Const.ERROR_EXCEPTION, ex.Message);
            }
        }

        public async Task<IDSSResult> GetByEmpID(string id)
        {
            try
            {
                var result = await _DAO.GetByEmpID(id);
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
    }
}
