using AutoMapper;
using DiamondStoreSystem.BusinessLayer.Commons;
using DiamondStoreSystem.BusinessLayer.Helpers;
using DiamondStoreSystem.BusinessLayer.IServices;
using DiamondStoreSystem.BusinessLayer.ResponseModels;
using DiamondStoreSystem.BusinessLayer.ResquestModels;
using DiamondStoreSystem.DataLayer.Models;
using DiamondStoreSystem.Repositories.IRepositories;

namespace DiamondStoreSystem.BusinessLayer.Services
{
    public class AccessoryService : IAccessoryService
    {
        private readonly IAccessoryRepository _accessoryRepository;
        private readonly IMapper _mapper;

        public AccessoryService(IMapper mapper, IAccessoryRepository accessoryRepository)
        {
            _accessoryRepository = accessoryRepository;
            _mapper = mapper;
        }
        public async Task<IDSSResult> Create(AccessoryRequestModel model)
        {
            try
            {
                var result = await GetById(model.AccessoryID);
                if (result.Status > 0 ) return result;
                _accessoryRepository.Insert(_mapper.Map<Accessory>(model));
                var check = _accessoryRepository.SaveChanges();
                if (check <= 0) return new DSSResult(Const.FAIL_CREATE_CODE, Const.FAIL_CREATE_MSG);
                return new DSSResult(Const.SUCCESS_CREATE_CODE, Const.SUCCESS_CREATE_MSG);
            }
            catch (Exception ex)
            {
                return new DSSResult(Const.ERROR_EXCEPTION, ex.Message);
            }
        }

        public async Task<IDSSResult> Block(string id)
        {
            try
            {
                var result = await IsExist(id);
                if (result.Status <= 0) return result;

                var accessory = result.Data as Accessory;

                var check = await UpdateProperty(accessory, nameof(accessory.Block), true);

                if (check.Status <= 0) return new DSSResult(Const.FAIL_DELETE_CODE, Const.FAIL_DELETE_MSG);

                return new DSSResult(Const.SUCCESS_DELETE_CODE, Const.SUCCESS_DELETE_MSG);
            }
            catch (Exception ex)
            {
                return new DSSResult(Const.ERROR_EXCEPTION, ex.Message);
            }
        }

        public async Task<IDSSResult> UpdateQuantity(string id, string change, int quantity)
        {
            try
            {
                var result = await IsExist(id);
                if (result.Status <= 0) return result;

                var accessory = result.Data as Accessory;
                int currentUnitInStock = accessory.UnitInStock;
                switch (change)
                {
                    case "increase":
                        currentUnitInStock = accessory.UnitInStock + quantity;
                        break;
                    case "decrease":
                        currentUnitInStock = accessory.UnitInStock - quantity;
                        if (accessory.UnitInStock < 0)
                        {
                            result = await Block(id);
                            if(result.Status <= 0) return result;
                            return new DSSResult(Const.FAIL_UPDATE_CODE, "This accessory in stock is not enough.");
                        }
                        break;
                    default:
                        return new DSSResult(Const.FAIL_UPDATE_CODE, Const.FAIL_UPDATE_MSG);
                }

                var check = await UpdateProperty(accessory, nameof(accessory.UnitInStock), currentUnitInStock);

                if (check.Status <= 0) return new DSSResult(Const.FAIL_UPDATE_CODE, Const.FAIL_UPDATE_MSG);

                return new DSSResult(Const.SUCCESS_UPDATE_CODE, Const.SUCCESS_UPDATE_MSG, accessory);
            }
            catch (Exception ex)
            {
                return new DSSResult(Const.ERROR_EXCEPTION, ex.Message);
            }
        }

        public async Task<IDSSResult> UpdateProperty(Accessory accessory, string propertyName, object value)
        {
            try
            {   
                var propertyInfo = accessory.GetType().GetProperty(propertyName);
                if (propertyInfo == null)
                    return new DSSResult(Const.FAIL_READ_CODE, $"Property '{propertyName}' not found.");

                propertyInfo.SetValue(accessory, Convert.ChangeType(value, propertyInfo.PropertyType), null);

                await _accessoryRepository.UpdateById(accessory, accessory.AccessoryID);
                var check = _accessoryRepository.SaveChanges();
                if (check <= 0)
                    return new DSSResult(Const.FAIL_UPDATE_CODE, Const.FAIL_UPDATE_MSG);

                return new DSSResult(Const.SUCCESS_UPDATE_CODE, Const.SUCCESS_UPDATE_MSG);
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
                var result = await _accessoryRepository.GetWhere(a => !a.Block);
                if (result.Count() <= 0)
                {
                    return new DSSResult(Const.FAIL_READ_CODE, Const.FAIL_READ_MSG);
                }
                return new DSSResult(Const.SUCCESS_READ_CODE, Const.SUCCESS_READ_MSG, result.Select(_mapper.Map<AccessoryResponseModel>)
                    .ToList());
            }
            catch (Exception ex)
            {
                return new DSSResult(Const.ERROR_EXCEPTION, ex.Message);
            }
        }

        public IDSSResult GetAllWithAllField()
        {
            try
            {
                var result = _accessoryRepository.GetAll();
                if (result.Count() <= 0 )
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
                var result = await _accessoryRepository.GetWhere(a => !a.Block && a.AccessoryID == id);
                if (result.Count() <= 0)
                {
                    return new DSSResult(Const.FAIL_READ_CODE, Const.FAIL_READ_MSG);
                }
                return new DSSResult(Const.SUCCESS_READ_CODE, Const.SUCCESS_READ_MSG, _mapper.Map<AccessoryResponseModel>(result.FirstOrDefault(r => true)));
            }
            catch (Exception ex)
            {
                return new DSSResult(Const.ERROR_EXCEPTION, ex.Message);
            }
        }

        public async Task<IDSSResult> IsExist(string id)
        {
            try
            {
                var result = await _accessoryRepository.GetById(id);
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

        public IDSSResult GetEnum() => new DSSResult()
        {
            Data = new List<Dictionary<int, string>>()
            {
                SupportingFeature.Instance.GetEnumName<Material>(),
                SupportingFeature.Instance.GetEnumName<Style>(),
            },
            Message = Const.SUCCESS_READ_MSG,
            Status = Const.SUCCESS_READ_CODE,
        };

        public async Task<IDSSResult> Update(string id, AccessoryRequestModel model)
        {
            try
            {
                var result = await GetById(id);
                if (result.Status <= 0) return result;

                await _accessoryRepository.UpdateById(_mapper.Map<Accessory>(model), id);

                var check = _accessoryRepository.SaveChanges();

                if (check <= 0) return new DSSResult(Const.FAIL_UPDATE_CODE, Const.FAIL_UPDATE_MSG);

                return new DSSResult(Const.SUCCESS_UPDATE_CODE, Const.SUCCESS_UPDATE_MSG);
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
                var result = await IsExist(id);
                if (result.Status <= 0) return result;

                _accessoryRepository.Delete(result.Data as Accessory);

                var check = _accessoryRepository.SaveChanges();

                if (check <= 0) return new DSSResult(Const.FAIL_DELETE_CODE, Const.FAIL_DELETE_MSG);

                return new DSSResult(Const.SUCCESS_DELETE_CODE, Const.SUCCESS_DELETE_MSG);
            }
            catch (Exception ex)
            {
                return new DSSResult(Const.ERROR_EXCEPTION, ex.Message);
            }
        }

        public async Task<IDSSResult> UnBlock(string id)
        {
            try
            {
                var result = await IsExist(id);
                if (result.Status <= 0) return result;

                var accessory = result.Data as Accessory;

                var check = await UpdateProperty(accessory, nameof(accessory.Block), false);

                if (check.Status <= 0) return new DSSResult(Const.FAIL_UPDATE_CODE, Const.FAIL_UPDATE_MSG);

                return new DSSResult(Const.SUCCESS_UPDATE_CODE, Const.SUCCESS_UPDATE_MSG);
            }
            catch (Exception ex)
            {
                return new DSSResult(Const.ERROR_EXCEPTION, ex.Message);
            }
        }
        public IDSSResult GetByCategory(Dictionary<string, object> categories)
        {
            try
            {
                var allAccessories = _accessoryRepository.GetAll();
                var accessories = allAccessories.Where(d => !d.Block).ToList();
                foreach (var category in categories)
                {
                    if (int.TryParse(category.Value.ToString(), out int grade))
                    {
                        accessories = accessories.Where(d => int.TryParse(d.GetPropertyValue(category.Key).ToString(), out var value) &&
                                                       value == grade).ToList();
                    }

                    else if (SupportingFeature.Instance.TryParseJsonArrayGrades(category.Value.ToString(), out List<double> range))
                    {
                        accessories = accessories.Where(d => double.TryParse(d.GetPropertyValue(category.Key).ToString(), out var value) && range[0] <= value && value <= range[1]
                        ).ToList();
                    }

                    else if (SupportingFeature.Instance.TryParseJsonArrayDatetimes(category.Value.ToString(), out List<DateTime> datetimes))
                    {
                        accessories = accessories.Where(d => DateTime.TryParse(d.GetPropertyValue(category.Key).ToString(), out var value) && value.CompareTo(datetimes[0]) >= 0 && value.CompareTo(datetimes[1]) <= 0
                        ).ToList();
                    }

                    else
                    {
                        accessories = accessories.Where(d => d.GetPropertyValue(category.Key).ToString().Trim().ToUpper()
                                                                .Contains(category.Value.ToString().Trim().ToUpper())).ToList();
                    }
                }
                if (accessories.Count() <= 0)
                {
                    return new DSSResult(Const.WARNING_NO_DATA_CODE, Const.WARNING_NO_DATA__MSG);
                }
                return new DSSResult(Const.SUCCESS_READ_CODE, Const.SUCCESS_READ_MSG, accessories.Select(_mapper.Map<AccessoryResponseModel>));
            }
            catch (Exception ex)
            {
                return new DSSResult(Const.ERROR_EXCEPTION, ex.Message);
            }
        }

    }
}
