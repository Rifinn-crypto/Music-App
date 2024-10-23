using AutoMapper;
using MusicMarket;
using MusicMarket.Api.Dto;
using MusicMarketplace.Domain;

namespace MusicMarket.Api;

/// <summary>
/// Class for mapping types
/// </summary>
public class MappingProfile : Profile
{
    public MappingProfile()
    {
        CreateMap<Customer, CustomerPostDto>();
        CreateMap<Customer, CustomerGetDto>();
        CreateMap<Product, ProductPostDto>();
        CreateMap<Product, ProductGetDto>();
        CreateMap<Purchase, PurchasePostDto>();
        CreateMap<Purchase, PurchaseGetDto>();
        CreateMap<Seller, SellerPostDto>();
        CreateMap<Seller, SellerGetDto>();

        CreateMap<CustomerGetDto, Customer>();
        CreateMap<ProductGetDto, Product>();
        CreateMap<PurchaseGetDto, Purchase>();
        CreateMap<SellerGetDto, Seller>();

        CreateMap<CustomerPostDto, Customer>();
        CreateMap<ProductPostDto, Product>();
        CreateMap<PurchasePostDto, Purchase>();
        CreateMap<SellerPostDto, Seller>();
    }
}