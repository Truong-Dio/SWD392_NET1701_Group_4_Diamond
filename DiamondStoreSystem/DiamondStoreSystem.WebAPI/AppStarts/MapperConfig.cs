using AutoMapper;
using DiamondStoreSystem.DTO.Entities;
using DiamondStoreSystem.DTO.EntitiesRequest.Account;
using DiamondStoreSystem.DTO.EntitiesRequest.Order;
using DiamondStoreSystem.DTO.EntitiesRequest.Product;
using DiamondStoreSystem.DTO.EntitiesResponse;
using DiamondStoreSystem.DTO.EntitiesResponse.Account;
using DiamondStoreSystem.DTO.EntitiesResponse.Order;
using DiamondStoreSystem.DTO.EntitiesResponse.Product;

namespace DiamondStoreSystem.WebAPI.AppStarts
{
    public class MapperConfig : Profile
    {
        public MapperConfig()
        {
            CreateMap<Account, AccountRequest>().ReverseMap();
            CreateMap<Account, AccountEmployeeResponse>().ReverseMap();
            CreateMap<Account, AccountCustomerResponse>().ReverseMap();
            CreateMap<AccountRequest, AccountCustomerResponse>().ReverseMap();
            CreateMap<AccountRequest, AccountEmployeeResponse>().ReverseMap();
            CreateMap<Account, AccountAllField>().ReverseMap();

            CreateMap<Accessory, AccessoryResponse>()
                        .ForMember(dest => dest.Material, opt => opt.MapFrom(src => src.Material.ToString()))
                        .ForMember(dest => dest.Style, opt => opt.MapFrom(src => src.Style.ToString()))
                        .ReverseMap(); 
            CreateMap<Accessory, AccessoryRequest>().ReverseMap();
            CreateMap<AccessoryRequest, AccessoryResponse>().ReverseMap();

            CreateMap<Diamond, DiamondResponse>().ReverseMap();
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

            CreateMap<DiamondResponse, CertificateResponse>().ReverseMap();
            CreateMap<Diamond, CertificateResponse>().ReverseMap();
        }
    }
}
