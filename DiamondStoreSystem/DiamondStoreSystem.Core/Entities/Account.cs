using DiamondStoreSystem.Common.Enum;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

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
        public Gender Gender { get; set; }
        public DateTime DOB { get; set; }
        public DateTime JoinDate { get; set; }
        public int? LoyaltyPoint { get; set; }
        public ICollection<Order> Orders { get; set; }
        public bool Block { get; set; }
        public Role Role { get; set; }
        public WorkingSchedule WorkingSchedule { get; set; }
    }
}
