using AutoMapper;
using DiamondStoreSystem.DTO.Entities;
using DiamondStoreSystem.DTO.EntitiesRequest.Account;
using DiamondStoreSystem.DTO.EntitiesRequest.Order;
using DiamondStoreSystem.DTO.EntitiesRequest.Product;
using DiamondStoreSystem.DTO.EntitiesResponse;
using DiamondStoreSystem.DTO.EntitiesResponse.Account;
using DiamondStoreSystem.DTO.EntitiesResponse.Order;
using DiamondStoreSystem.DTO.EntitiesResponse.Product;
using Org.BouncyCastle.Asn1.Sec;

namespace DiamondStoreSystem.WebAPI.AppStarts
{
    public class MapperConfig : Profile
    {
        public MapperConfig()
        {
            CreateMap<Account, AccountRequest>().ReverseMap();
            CreateMap<Account, AccountEmployeeResponse>()
                .ForMember(dest => dest.Gender, opt => opt.MapFrom(src => src.Gender.ToString()))
                .ForMember(dest => dest.WorkingSchedule, opt => opt.MapFrom(src => src.WorkingSchedule.ToString()))
                .ReverseMap();
            CreateMap<Account, AccountCustomerResponse>()
                .ForMember(dest => dest.Gender, opt => opt.MapFrom(src => src.Gender.ToString()))
                .ReverseMap();
            CreateMap<AccountRequest, AccountCustomerResponse>().ReverseMap();
            CreateMap<AccountRequest, AccountEmployeeResponse>().ReverseMap();
            CreateMap<Account, AccountAllField>().ForMember(dest => dest.Gender, opt => opt.MapFrom(src => src.Gender.ToString()))
                .ForMember(dest => dest.Role, opt => opt.MapFrom(src => src.Role.ToString()))
                .ForMember(dest => dest.WorkingSchedule, opt => opt.MapFrom(src => src.WorkingSchedule.ToString())).ReverseMap();

            CreateMap<Accessory, AccessoryResponse>()
                        .ForMember(dest => dest.Material, opt => opt.MapFrom(src => src.Material.ToString()))
                        .ForMember(dest => dest.Style, opt => opt.MapFrom(src => src.Style.ToString()))
                        .ReverseMap();
            CreateMap<Accessory, AccessoryRequest>().ReverseMap();
            CreateMap<AccessoryRequest, AccessoryResponse>().ReverseMap();

            CreateMap<Diamond, DiamondResponse>()
                .ForMember(dest => dest.LabCreated, opt => opt.MapFrom(src => src.LabCreated.ToString()))
                .ForMember(dest => dest.Shape, opt => opt.MapFrom(src => src.Shape.ToString()))
                .ForMember(dest => dest.ColorGrade, opt => opt.MapFrom(src => src.ColorGrade.ToString()))
                .ForMember(dest => dest.ClarityGrade, opt => opt.MapFrom(src => src.ClarityGrade.ToString()))
                .ForMember(dest => dest.CutGrade, opt => opt.MapFrom(src => src.CutGrade.ToString()))
                .ForMember(dest => dest.PolishGrade, opt => opt.MapFrom(src => src.PolishGrade.ToString()))
                .ForMember(dest => dest.SymmetryGrade, opt => opt.MapFrom(src => src.SymmetryGrade.ToString()))
                .ForMember(dest => dest.FluoresceneGrade, opt => opt.MapFrom(src => src.FluoresceneGrade.ToString()))
                .ReverseMap();
            CreateMap<Diamond, DiamondRequest>().ReverseMap();
            CreateMap<DiamondRequest, DiamondResponse>().ReverseMap();

            CreateMap<Order, OrderResponse>()
           .ForMember(dest => dest.OrderStatus, opt => opt.MapFrom(src => src.OrderStatus.ToString()))
           .ForMember(dest => dest.PayMethod, opt => opt.MapFrom(src => src.PayMethod.ToString()))
           .ReverseMap();
            CreateMap<Order, OrderRequest>().ReverseMap();
            CreateMap<OrderRequest, OrderResponse>().ReverseMap();

            CreateMap<OrderDetail, OrderDetailResponse>().ReverseMap();
            CreateMap<OrderDetail, OrderDetailRequest>().ReverseMap();
            CreateMap<OrderDetailRequest, OrderDetailResponse>().ReverseMap();

            CreateMap<DiamondResponse, CertificateResponse>()
                .ForMember(dest => dest.Shape, opt => opt.MapFrom(src => src.Shape.ToString()))
                .ForMember(dest => dest.ColorGrade, opt => opt.MapFrom(src => src.ColorGrade.ToString()))
                .ForMember(dest => dest.ClarityGrade, opt => opt.MapFrom(src => src.ClarityGrade.ToString()))
                .ForMember(dest => dest.CutGrade, opt => opt.MapFrom(src => src.CutGrade.ToString()))
                .ForMember(dest => dest.PolishGrade, opt => opt.MapFrom(src => src.PolishGrade.ToString()))
                .ForMember(dest => dest.SymmetryGrade, opt => opt.MapFrom(src => src.SymmetryGrade.ToString()))
                .ForMember(dest => dest.FluoresceneGrade, opt => opt.MapFrom(src => src.FluoresceneGrade.ToString())).ReverseMap();
            CreateMap<Diamond, CertificateResponse>()
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
