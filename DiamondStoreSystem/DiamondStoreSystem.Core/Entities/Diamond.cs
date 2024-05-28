using DiamondStoreSystem.Common.Enum;
using System;
using System.Collections.Generic;
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
        public float TablePercent { get; set; }
        public float DepthPercent { get; set; }
        public string Description { get; set; }
        public int GIAReportNumber { get; set; }
        public DateTime IssueDate { get; set; }
        public Shape Shape { get; set; }
        public float CaratWeight { get; set; }
        public ColorGrade ColorGrade { get; set; }
        public ClarityGrade ClarityGrade { get; set; }
        public Grade CutGrade { get; set; }
        public Grade PolishGrade { get; set; }
        public Grade SymmetryGrade { get; set; }
        public Grade FluoresceneGrade { get; set; }
        public string Inscription { get; set; }
        public float Height {  get; set; }
        public float Width { get; set; }
        public float Length { get; set; }
        public ICollection<ProductDiamond> ProductDiamonds { get; set; }
        public bool Status { get; set; } = true;
    }
}
