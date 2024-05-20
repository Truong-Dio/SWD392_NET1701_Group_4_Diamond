using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DiamondStoreSystem.Core.Models
{
    public class Account
    {
        [Key]
        public string AccountID { get; set; }

        [Required]
        public string Password { get; set; }

        [Required]
        public string Email { get; set; }

        [Required]
        [StringLength(160)]
        public string Address { get; set; }

        [Required]
        public string Gender { get; set; }

        [Required]
        public int Phone { get; set; }

        [Required]
        public DateTime JoinDate { get; set; }
    }
}
