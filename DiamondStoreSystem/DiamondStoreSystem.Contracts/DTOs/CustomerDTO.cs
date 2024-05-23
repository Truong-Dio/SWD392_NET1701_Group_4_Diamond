﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DiamondStoreSystem.Contract.DTOs
{
    public class CustomerDTO
    {
        public string UserUID { get; set; }

        public string FirstName { get; set; }

        public string LastName { get; set; }

        public string Address { get; set; }

        public string Gender { get; set; }

        public int Phone { get; set; }

        public DateTime DOB { get; set; }

        public DateTime JoinDate { get; set; }

        public int LoyaltyPoint { get; set; }

        public string AccountID { get; set; }
    }
}
