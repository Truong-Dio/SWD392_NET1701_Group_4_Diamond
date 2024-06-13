using AutoMapper;
using DiamondStoreSystem.Business.Interface;
using DiamondStoreSystem.Business.IService;
using DiamondStoreSystem.Common;
using DiamondStoreSystem.DTO.Entities;
using DiamondStoreSystem.DTO.EntitiesRequest.Product;
using DiamondStoreSystem.DTO.EntitiesResponse.Product;
using DiamondStoreSystem.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DiamondStoreSystem.Business.Service
{
    public class AccessoryService : IAccessoryService
    {
        private readonly IMapper _mapper;
        private readonly IGenericRepository<Accessory> _repository;

        public AccessoryService(IMapper mapper, IGenericRepository<Accessory> repository)
        {
            _mapper = mapper;
            _repository = repository;
        }

        public IDSSResult Add(AccessoryRequest accessoryRequest)
        {
            try
            {
                var result = IsExist(accessoryRequest.AccessoryID);
                if (result.Status > 0)
                {
                    return result;
                }
                _repository.Insert(_mapper.Map<Accessory>(accessoryRequest));
                var check = _repository.Save();
                if (check <= 0)
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

        public IDSSResult Delete(string accessoryId)
        {
            try
            {
                var result = GetByID(accessoryId);
                if (result.Status <= 0)
                {
                    return result;
                }
                Accessory Accessory = _mapper.Map<Accessory>(result.Data);
                Accessory.Block = true;
                _repository.UpdateByIdByString(Accessory, accessoryId);
                var check = _repository.Save();
                if (check <= 0)
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
        public IDSSResult GetFull()
        {
            try
            {
                var result = _repository.GetAll();
                if (result.ToList() == null)
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
        public IDSSResult Get()
        {
            try
            {
                var result = _repository.GetWhere(a => a.Block == false);
                if (result.Result.ToList() == null)
                {
                    return new DSSResult(Const.FAIL_READ_CODE, Const.FAIL_READ_MSG);
                }

                return new DSSResult(Const.SUCCESS_READ_CODE, Const.SUCCESS_READ_MSG, result.Result.Select(result => _mapper.Map<AccessoryResponse>(result)).ToList());
            }
            catch (Exception ex)
            {
                return new DSSResult(Const.ERROR_EXCEPTION, ex.Message);
            }
        }

        public IDSSResult GetByID(string accessoryId)
        {
            try
            {
                var result = Get();
                if (result.Status <= 0)
                {
                    return result;
                }
                var accessories = (result.Data as List<AccessoryResponse>);
                var accessory = accessories.FirstOrDefault(accessory => accessory.AccessoryID == accessoryId);
                if (accessory == null) return new DSSResult(Const.FAIL_READ_CODE, Const.FAIL_READ_MSG);
                return new DSSResult(Const.SUCCESS_READ_CODE, Const.SUCCESS_READ_MSG, accessory);
            }
            catch (Exception ex)
            {
                return new DSSResult(Const.ERROR_EXCEPTION, ex.Message);
            }
        }

        private IDSSResult IsExist(string accessoryId)
        {
            try
            {
                var accessory = _repository.GetFirstOrDefault(r => r.AccessoryID == accessoryId);
                if (accessory == null) return new DSSResult(Const.FAIL_READ_CODE, Const.FAIL_READ_MSG);
                return new DSSResult(Const.SUCCESS_READ_CODE, Const.SUCCESS_READ_MSG, accessory);
            }
            catch (Exception ex)
            {
                return new DSSResult(Const.ERROR_EXCEPTION, ex.Message);
            }
        }

        public IDSSResult Update(AccessoryRequest accessoryRequest)
        {
            try
            {
                var result = GetByID(accessoryRequest.AccessoryID);
                if (result.Status <= 0)
                {
                    return result;
                }
                _repository.UpdateByIdByString(_mapper.Map<Accessory>(accessoryRequest), accessoryRequest.AccessoryID);
                var check = _repository.Save();
                if (check <= 0)
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

        public IDSSResult HardDelete(string accessoryId)
        {
            try
            {
                var result = GetByID(accessoryId);
                if (result.Status <= 0)
                {
                    return result;
                }
                _repository.HardDeleteByString(accessoryId);
                var check = _repository.Save();
                if (check <= 0)
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
    }
}
