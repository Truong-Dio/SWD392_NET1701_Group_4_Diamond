using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DiamondStoreSystem.Contracts.DTOs
{
    public class AccountDTO
    {
        public string AccountID { get; set; }

        public string Password { get; set; }

        public string Email { get; set; }
    }
}
