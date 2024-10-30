namespace MusicMarket.Api.Dto;
/// <summary>
/// Информация о покупке
/// </summary>
public class PurchasePostDto
{
    /// <summary>
    /// Дата совершения покупки.
    /// </summary>
    public DateTime Date { get; set; }
    /// <summary>
    /// ID Товара.
    /// </summary>
    public int IdProduct { get; set; }
    /// <summary>
    /// ID Покупателя.
    /// </summary>
    public int IdCustomer { get; set; }
}