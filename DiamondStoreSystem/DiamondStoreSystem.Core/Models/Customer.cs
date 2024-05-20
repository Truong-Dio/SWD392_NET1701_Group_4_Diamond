using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DiamondStoreSystem.Core.Models
{
    public class Customer
    {
        [Key]
        public string UserUID { get; set; }

        [Required]
        [StringLength(50)]
        public string FirstName { get; set; }

        [Required]
        [StringLength(50)]
        public string LastName { get; set; }

        [Required]
        public int LoyaltyPoint { get; set; }

        [ForeignKey("AccountID")]
        public Account Account { get; set; }
    }
}
