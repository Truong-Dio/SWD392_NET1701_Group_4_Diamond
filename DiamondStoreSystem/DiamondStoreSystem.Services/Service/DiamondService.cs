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
    public class DiamondService : IDiamondService
    {
        private readonly IMapper _mapper;
        private readonly IGenericRepository<Diamond> _repository;

        public DiamondService(IMapper mapper, IGenericRepository<Diamond> repository)
        {
            _mapper = mapper;
            _repository = repository;
        }

        public IDSSResult Add(DiamondRequest DiamondRequest)
        {
            try
            {
                var result = IsExist(DiamondRequest.DiamondID);
                if (result.Status > 0)
                {
                    return result;
                }
                _repository.Insert(_mapper.Map<Diamond>(DiamondRequest));
                var check = _repository.Save();
                if (check <= 0)
                {
                    return new DSSResult(Const.FAIL_CREATE_CODE, Const.FAIL_CREATE_MSG);
                }
                return new DSSResult(Const.SUCCESS_CREATE_CODE, Const.SUCCESS_CREATE_MSG);
            }
            catch(Exception ex)
            {
                return new DSSResult(Const.ERROR_EXCEPTION, ex.Message);
            }
        }

        private IDSSResult IsExist(string DiamondId)
        {
            try
            {
                var result = _repository.GetFirstOrDefault(diamond => diamond.DiamondID == DiamondId);
                if (result == null)
                {
                    return new DSSResult(Const.FAIL_READ_CODE, Const.FAIL_READ_MSG);
                }

                return new DSSResult(Const.SUCCESS_READ_CODE, Const.SUCCESS_READ_MSG, _mapper.Map<DiamondResponse>(result));
            }
            catch (Exception ex)
            {
                return new DSSResult(Const.ERROR_EXCEPTION, ex.Message);
            }
        }

        public IDSSResult Delete(string DiamondId)
        {
            try
            {
                var result = GetByID(DiamondId);
                if (result.Status <= 0)
                {
                    return result;
                }
                Diamond diamond = _mapper.Map<Diamond>(result.Data);
                diamond.Block = true;
                _repository.UpdateByIdByString(diamond, DiamondId);
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

        public IDSSResult Get()
        {
            try
            {
                var result = _repository.GetWhere(a => a.Block == false);
                if (result == null)
                {
                    return new DSSResult(Const.FAIL_READ_CODE, Const.FAIL_READ_MSG);
                }
                var diamonds = result.Result as List<Diamond>;
                return new DSSResult(Const.SUCCESS_READ_CODE, Const.SUCCESS_READ_MSG, diamonds.Select(result => _mapper.Map<DiamondResponse>(result)));
            }
            catch (Exception ex)
            {
                return new DSSResult(Const.ERROR_EXCEPTION, ex.Message);
            }
        }

        public IDSSResult GetByID(string DiamondId)
        {
            try
            {
                var result = _repository.GetFirstOrDefault(diamond => diamond.DiamondID == DiamondId && !diamond.Block);
                if (result == null)
                {
                    return new DSSResult(Const.FAIL_READ_CODE, Const.FAIL_READ_MSG);
                }

                return new DSSResult(Const.SUCCESS_READ_CODE, Const.SUCCESS_READ_MSG, _mapper.Map<DiamondResponse>(result));
            }
            catch (Exception ex)
            {
                return new DSSResult(Const.ERROR_EXCEPTION, ex.Message);
            }
        }

        public IDSSResult Update(DiamondRequest DiamondRequest)
        {
            try
            {
                var result = GetByID(DiamondRequest.DiamondID);
                if (result.Status <= 0)
                {
                    return result;
                }
                _repository.UpdateByIdByString(_mapper.Map<Diamond>(DiamondRequest), DiamondRequest.DiamondID);
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

        public IDSSResult ShowCertificate(string DiamondId)
        {
            try
            {
                var result = GetByID(DiamondId);
                if (result.Status <= 0)
                {
                    return result;
                }
                return new DSSResult(Const.SUCCESS_READ_CODE, Const.SUCCESS_READ_MSG, _mapper.Map<CertificateResponse>((DiamondResponse)result.Data));
            }
            catch (Exception ex)
            {
                return new DSSResult(Const.ERROR_EXCEPTION, ex.Message);
            }
        }

        public IDSSResult HardDelete(string DiamondId)
        {
            try
            {
                var result = GetByID(DiamondId);
                if (result.Status <= 0)
                {
                    return result;
                }
                _repository.HardDeleteByString(DiamondId);
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
