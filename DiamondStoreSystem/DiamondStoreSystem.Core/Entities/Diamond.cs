﻿using DiamondStoreSystem.Common.Enum;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DiamondStoreSystem.DTO.Entities
{
    public class Diamond
    {
        [Key]
        public string DiamondID { get; set; }
        public string Origin { get; set; }
        public LabCreated LabCreated { get; set; }
        public double TablePercent { get; set; }
        public double DepthPercent { get; set; }
        public string Description { get; set; }
        public int GIAReportNumber { get; set; }
        public DateTime IssueDate { get; set; }
        public Shape Shape { get; set; }
        public double CaratWeight { get; set; }
        public ColorGrade ColorGrade { get; set; }
        public ClarityGrade ClarityGrade { get; set; }
        public Grade CutGrade { get; set; }
        public Grade PolishGrade { get; set; }
        public Grade SymmetryGrade { get; set; }
        public Grade FluoresceneGrade { get; set; }
        public string Inscription { get; set; }
        public double Height {  get; set; }
        public double Width { get; set; }
        public double Length { get; set; }
        public double Price {  get; set; }
        public bool Block { get; set; }
        public int UnitInStock { get; set; }
        public string SKU {  get; set; }
        public ICollection<OrderDetail> OrderDetails { get; set; }
    }
}
