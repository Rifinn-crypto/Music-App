using MusicMarketplace.Domain;

namespace MusicMarket.Api.Repository;
public interface IMusicMarketRepository
{
    List<Customer> Customers { get; }
    List<Product> Products { get; }
    List<Purchase> Purchases { get; }
    List<Seller> Sellers { get; }
}