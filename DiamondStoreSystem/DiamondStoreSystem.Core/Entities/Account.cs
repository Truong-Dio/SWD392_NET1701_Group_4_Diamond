using DiamondStoreSystem.Common.Enum;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Security.Principal;

namespace DiamondStoreSystem.DTO.Entities
{
    public class Account
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
        public decimal Phone { get; set; }
        public string Address { get; set; }
        public string Gender { get; set; }
        public DateTime DOB { get; set; }
        public DateTime JoinDate { get; set; }
        public int? LoyaltyPoint { get; set; }
        public ICollection<Order> Orders { get; set; }
        public bool Status { get; set; } = true;
        public Role Role { get; set; }
    }
}
