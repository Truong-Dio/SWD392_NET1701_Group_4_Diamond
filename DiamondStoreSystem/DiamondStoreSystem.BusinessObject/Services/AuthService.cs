﻿using AutoMapper;
using DiamondStoreSystem.BusinessLayer.Commons;
using DiamondStoreSystem.BusinessLayer.Helper;
using DiamondStoreSystem.BusinessLayer.IServices;
using DiamondStoreSystem.BusinessLayer.ResponseModels;
using DiamondStoreSystem.BusinessLayer.ResquestModels;
using DiamondStoreSystem.DataLayer.Models;
using DiamondStoreSystem.Repositories.IRepositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DiamondStoreSystem.BusinessLayer.Services
{
    public class AuthService : IAuthService
    {
        private readonly IMapper _mapper;
        private readonly IAccountRepository _accountRepository;

        public AuthService(IMapper mapper, IAccountRepository accountRepository)
        {
            _mapper = mapper;
            _accountRepository = accountRepository;
        }
        public async Task<IDSSResult> GetByEmail(string email)
        {
            try
            {
                var accounts = await _accountRepository.GetWhere(x => x.Email == email);
                if (accounts.Count() <= 0) return new DSSResult(Const.FAIL_READ_CODE, Const.FAIL_READ_MSG);

                return new DSSResult(Const.SUCCESS_READ_CODE, Const.SUCCESS_READ_MSG, _mapper.Map<CustomerResponseModel>(accounts.FirstOrDefault(x => !x.Block)));
            }
            catch (Exception ex)
            {
                return new DSSResult(Const.ERROR_EXCEPTION, ex.Message);
            }
        }

        public async Task<IDSSResult> Login(string email, string password)
        {
            try
            {
                var result = _accountRepository.GetFirstOrDefault(x => x.Email == email && x.Password == DiamondStoreSystemDBContext.HashPassword(password) && !x.Block);

                if (result == null)
                {
                    return new DSSResult(Const.FAIL_READ_CODE, Const.FAIL_READ_MSG);
                }
                return new DSSResult(Const.SUCCESS_READ_CODE, Const.SUCCESS_READ_MSG, new AuthRequestModel
                {
                    AccountID = result.AccountID,
                    Role = (Role?)result.Role,
                    Email = email
                });
            }
            catch (Exception ex)
            {
                return new DSSResult(Const.ERROR_EXCEPTION, ex.Message);
            }
        }
    }
}
