using DiamondStoreSystem.Common.Enum;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Security.Principal;

namespace DiamondStoreSystem.DTO.EntitiesRequest.Account
{
    public class AccountRequest
    {
        [Key]
        public string AccountID { get; set; }
        [Required]
        public string Email { get; set; }
        [Required]
        public string Password { get; set; }
        [Required]
        public string LastName { get; set; }
        [Required]
        public string FirstName { get; set; }
        [Required]
        public int Phone { get; set; }
        public string Address { get; set; }
        public Gender Gender { get; set; }
        public DateTime DOB { get; set; }
        public DateTime JoinDate { get; set; }
    }
}
