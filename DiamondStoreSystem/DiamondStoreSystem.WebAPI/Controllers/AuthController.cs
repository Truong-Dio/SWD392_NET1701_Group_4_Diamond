using Microsoft.Extensions.Configuration;
using DiamondStoreSystem.Business.Interface;
using DiamondStoreSystem.Business.IService;
using DiamondStoreSystem.DTO.EntitiesRequest.Account;
using DiamondStoreSystem.DTO.EntitiesResponse.Account;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Text;
using System.Collections.Generic;
using System.Security.Claims;
using System.IdentityModel.Tokens.Jwt;
using Newtonsoft.Json;

namespace DiamondStoreSystem.WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : Controller
    {
        private readonly IAccountService _accountService;
        private readonly IConfiguration _configuration;
        public AuthController(IAccountService accountService, IConfiguration configuration)
        { 
            _configuration = configuration;
            _accountService = accountService;
        }

        [AllowAnonymous]
        [HttpPost]
        public IActionResult Login([FromBody] AccountLogin account)
        {
            IActionResult response = Unauthorized();
            var auth = _accountService.Login(account.Email, account.Password);
            if (auth.Status > 0)
            {
                var user = auth.Data as AccountLogin;
                HttpContext.Session.Set("accId", Encoding.UTF8.GetBytes(JsonConvert.SerializeObject(user)));
                var tokenString = GenerateJSONWebToken(user);
                response = Ok(tokenString);
            }
            return response;
        }

        private string GenerateJSONWebToken(AccountLogin userInfo)
        {
            try
            {
                var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["Jwt:Key"]));
                var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);
                var claims = new List<Claim>
            {
                new Claim(ClaimTypes.Role, userInfo.Role.ToString()),
                new Claim("Email", userInfo.Email)
            };
                var token = new JwtSecurityToken(_configuration["Jwt:Issuer"],
                    _configuration["Jwt:Issuer"], claims, expires: DateTime.Now.AddMinutes(120), signingCredentials: credentials);
                return new JwtSecurityTokenHandler().WriteToken(token);
            }
            catch (Exception)
            {

                throw;
            }
        }
    }
}
