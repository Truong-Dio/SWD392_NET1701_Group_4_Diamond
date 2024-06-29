using DiamondStoreSystem.BusinessLayer.IServices;
using DiamondStoreSystem.BusinessLayer.ResquestModels;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using Newtonsoft.Json;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace DiamondStoreSystem.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly IConfiguration _config;
        private readonly IAuthService _authService;

        public AuthController(IConfiguration configuration, IAuthService authService)
        {
            _config = configuration;
            _authService = authService;
        }

        [HttpPost("Login")]
        public async Task<IActionResult> Login(string email, string password)
        {
            IActionResult response = Unauthorized();
            var auth = await _authService.Login(email, password);
            if (auth.Status > 0)
            {
                var user = auth.Data as AuthRequestModel;
                HttpContext.Session.Set("accId", Encoding.UTF8.GetBytes(JsonConvert.SerializeObject(user)));
                var tokenString = GenerateJSONWebToken(user);
                response = Ok(tokenString);
            }
            return response;
        }

        private string GenerateJSONWebToken(AuthRequestModel userInfo)
        {
            try
            {
                var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config["Jwt:Key"]));
                var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);
                var claims = new List<Claim>
            {
                new Claim(ClaimTypes.Role, userInfo.Role.ToString()),
                new Claim("Email", userInfo.Email)
            };
                var token = new JwtSecurityToken(_config["Jwt:Issuer"],
                    _config["Jwt:Issuer"], claims, expires: DateTime.Now.AddMinutes(Convert.ToDouble(_config["Jwt:Time"])), signingCredentials: credentials);
                return new JwtSecurityTokenHandler().WriteToken(token);
            }
            catch (Exception)
            {

                throw;
            }
        }
    }
}
