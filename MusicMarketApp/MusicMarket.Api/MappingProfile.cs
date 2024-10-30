using AutoMapper;
using MusicMarketplace.Domain;
using MusicMarket.Api.Dto;

namespace MusicMarket.Api.MappingProfile;

/// <summary>
/// Class for mapping types
/// </summary>
public class MappingProfile : Profile
{
    /// <summary>
    /// Mapping settings
    /// </summary>
    public MappingProfile()
    {
        CreateMap<Customer, CustomerGetDto>();
        CreateMap<Product, ProductGetDto>();
        CreateMap<Purchase, PurchaseGetDto>();
        CreateMap<Seller, SellerGetDto>();

        CreateMap<CustomerPostDto, Customer>().ReverseMap();
        CreateMap<ProductPostDto, Product>().ReverseMap();
        CreateMap<PurchasePostDto, Purchase>().ReverseMap();
        CreateMap<SellerPostDto, Seller>().ReverseMap();
    }
}