using AutoMapper;
using DiamondStoreSystem.BusinessLayer.ResponseModels;
using DiamondStoreSystem.BusinessLayer.ResquestModels;
using DiamondStoreSystem.DataLayer.Models;
using DiamondStoreSystem.BusinessLayer.Commons;

namespace DiamondStoreSystem.API.AppStart
{
    public class MapperConfig : Profile
    {
        public MapperConfig()
        {
            #region Account
            CreateMap<Account, AccountRequestModel>().ReverseMap();
            CreateMap<Account, EmployeeResponseModel>()
                .ForMember(dest => dest.Gender, opt => opt.MapFrom(src => src.Gender.ToString()))
                .ForMember(dest => dest.WorkingSchedule, opt => opt.MapFrom(src => src.WorkingSchedule.ToString()))
                .ReverseMap();
            CreateMap<Account, CustomerResponseModel>()
                .ForMember(dest => dest.Gender, opt => opt.MapFrom(src => src.Gender.ToString()))
                .ReverseMap();
            CreateMap<AccountRequestModel, CustomerResponseModel>().ReverseMap();
            CreateMap<AccountRequestModel, EmployeeResponseModel>().ReverseMap();
            CreateMap<Account, AccountResponseModel>().ForMember(dest => dest.Gender, opt => opt.MapFrom(src => src.Gender.ToString()))
                .ForMember(dest => dest.Role, opt => opt.MapFrom(src => src.Role.ToString()))
                .ForMember(dest => dest.WorkingSchedule, opt => opt.MapFrom(src => src.WorkingSchedule.ToString())).ReverseMap();
            #endregion

            #region Accessory
            // Map Accessory to AccessoryResponseModel
            CreateMap<Accessory, AccessoryResponseModel>()
                .ForMember(dest => dest.Material, opt => opt.MapFrom(src => ((Material)src.Material).ToString()))
                .ForMember(dest => dest.Style, opt => opt.MapFrom(src => ((Style)src.Style).ToString()))
                .ReverseMap();

            // Map AccessoryRequestModel to Accessory
            CreateMap<AccessoryRequestModel, Accessory>()
                .ForMember(dest => dest.Material, opt => opt.MapFrom(src => (int)src.Material))
                .ForMember(dest => dest.Style, opt => opt.MapFrom(src => (int)src.Style))
                .ReverseMap();
            #endregion

            CreateMap<Diamond, DiamondResponseModel>()
                .ForMember(dest => dest.LabCreated, opt => opt.MapFrom(src => src.LabCreated.ToString()))
                .ForMember(dest => dest.Shape, opt => opt.MapFrom(src => src.Shape.ToString()))
                .ForMember(dest => dest.ColorGrade, opt => opt.MapFrom(src => src.ColorGrade.ToString()))
                .ForMember(dest => dest.ClarityGrade, opt => opt.MapFrom(src => src.ClarityGrade.ToString()))
                .ForMember(dest => dest.CutGrade, opt => opt.MapFrom(src => src.CutGrade.ToString()))
                .ForMember(dest => dest.PolishGrade, opt => opt.MapFrom(src => src.PolishGrade.ToString()))
                .ForMember(dest => dest.SymmetryGrade, opt => opt.MapFrom(src => src.SymmetryGrade.ToString()))
                .ForMember(dest => dest.FluoresceneGrade, opt => opt.MapFrom(src => src.FluoresceneGrade.ToString()))
                .ReverseMap();
            CreateMap<Diamond, DiamondRequestModel>().ReverseMap();
            CreateMap<DiamondRequestModel, DiamondResponseModel>().ReverseMap();

            CreateMap<Order, OrderResponseModel>()
           .ForMember(dest => dest.OrderStatus, opt => opt.MapFrom(src => src.OrderStatus.ToString()))
           .ForMember(dest => dest.PayMethod, opt => opt.MapFrom(src => src.PayMethod.ToString()))
           .ReverseMap();
            CreateMap<Order, OrderRequestModel>().ReverseMap();
            CreateMap<OrderRequestModel, OrderResponseModel>().ReverseMap();

            CreateMap<Product, ProductResponseModel>().ReverseMap();
            CreateMap<Product, ProductRequestModel>().ReverseMap();
            CreateMap<ProductRequestModel, ProductResponseModel>().ReverseMap();

            CreateMap<DiamondResponseModel, CertificateResponseModel>()
                .ForMember(dest => dest.Shape, opt => opt.MapFrom(src => src.Shape.ToString()))
                .ForMember(dest => dest.ColorGrade, opt => opt.MapFrom(src => src.ColorGrade.ToString()))
                .ForMember(dest => dest.ClarityGrade, opt => opt.MapFrom(src => src.ClarityGrade.ToString()))
                .ForMember(dest => dest.CutGrade, opt => opt.MapFrom(src => src.CutGrade.ToString()))
                .ForMember(dest => dest.PolishGrade, opt => opt.MapFrom(src => src.PolishGrade.ToString()))
                .ForMember(dest => dest.SymmetryGrade, opt => opt.MapFrom(src => src.SymmetryGrade.ToString()))
                .ForMember(dest => dest.FluoresceneGrade, opt => opt.MapFrom(src => src.FluoresceneGrade.ToString())).ReverseMap();
            CreateMap<Diamond, CertificateResponseModel>()
                .ForMember(dest => dest.Shape, opt => opt.MapFrom(src => src.Shape.ToString()))
                .ForMember(dest => dest.ColorGrade, opt => opt.MapFrom(src => src.ColorGrade.ToString()))
                .ForMember(dest => dest.ClarityGrade, opt => opt.MapFrom(src => src.ClarityGrade.ToString()))
                .ForMember(dest => dest.CutGrade, opt => opt.MapFrom(src => src.CutGrade.ToString()))
                .ForMember(dest => dest.PolishGrade, opt => opt.MapFrom(src => src.PolishGrade.ToString()))
                .ForMember(dest => dest.SymmetryGrade, opt => opt.MapFrom(src => src.SymmetryGrade.ToString()))
                .ForMember(dest => dest.FluoresceneGrade, opt => opt.MapFrom(src => src.FluoresceneGrade.ToString())).ReverseMap();
        }
    }
}
