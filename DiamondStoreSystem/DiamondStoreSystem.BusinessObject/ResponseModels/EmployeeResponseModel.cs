﻿using DiamondStoreSystem.DataLayer.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DiamondStoreSystem.BusinessLayer.ResponseModels
{
    public class EmployeeResponseModel
    {
        public string AccountID { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public string LastName { get; set; }
        public string FirstName { get; set; }
        public decimal Phone { get; set; }
        public string Address { get; set; }
        public string Gender { get; set; }
        public DateTime DOB { get; set; }
        public DateTime JoinDate { get; set; }
        public string Role { get; set; }
        public string WorkingSchedule { get; set; }
        public ICollection<OrderResponseModel> Orders { get; set; }
    }
}
