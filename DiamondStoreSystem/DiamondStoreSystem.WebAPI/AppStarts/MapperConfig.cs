using AutoMapper;
using DiamondStoreSystem.DTO.Entities;
using DiamondStoreSystem.DTO.EntitiesRequest;
using DiamondStoreSystem.DTO.EntitiesResponse;

namespace DiamondStoreSystem.WebAPI.AppStarts
{
    public class MapperConfig : Profile
    {
        public MapperConfig()
        {
            CreateMap<Account, AccountRequest>().ReverseMap();
            CreateMap<Account, AccountResponse>().ReverseMap();
            CreateMap<Account, AccountClient>().ReverseMap();
            CreateMap<AccountRequest, AccountResponse>().ReverseMap();

            CreateMap<Accessory, AccessoryResponse>().ReverseMap();
            CreateMap<Accessory, AccessoryResponse>().ReverseMap();
            CreateMap<AccessoryRequest, AccessoryResponse>().ReverseMap();

            CreateMap<Diamond, DiamondResponse>().ReverseMap();
            CreateMap<Diamond, DiamondRequest>().ReverseMap();
            CreateMap<DiamondRequest, DiamondResponse>().ReverseMap();

            CreateMap<Order, OrderResponse>().ReverseMap();
            CreateMap<Order, OrderRequest>().ReverseMap();
            CreateMap<OrderRequest, OrderResponse>().ReverseMap();

            CreateMap<OrderDetail, OrderDetailResponse>().ReverseMap();
            CreateMap<OrderDetail, OrderDetailRequest>().ReverseMap();
            CreateMap<OrderDetailRequest, OrderDetailResponse>().ReverseMap();

            CreateMap<Product, ProductResponse>().ReverseMap();
            CreateMap<Product, ProductRequest>().ReverseMap();
            CreateMap<ProductRequest, ProductResponse>().ReverseMap();

            CreateMap<ProductDiamond, ProductDiamondResponse>().ReverseMap();
            CreateMap<ProductDiamond, ProductDiamondRequest>().ReverseMap();
            CreateMap<ProductDiamondRequest, ProductDiamondResponse>().ReverseMap();

            CreateMap<DiamondResponse, CertificateResponse>().ReverseMap();
            CreateMap<Diamond, CertificateResponse>().ReverseMap();
        }
    }
}
