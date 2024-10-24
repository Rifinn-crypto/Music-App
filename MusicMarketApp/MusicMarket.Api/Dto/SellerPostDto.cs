﻿namespace MusicMarketServer.Dto;
/// <summary>
/// Информация о продавце
/// </summary>
public class SellerPostDto
{
    /// <summary>
    /// Название магазина.
    /// </summary>
    public string ShopName { get; set; } = string.Empty;

    /// <summary>
    /// Страна доставки.
    /// </summary>
    public string CountryOfDelivery { get; set; } = string.Empty;

    /// <summary>
    /// Стоимость доставки за 1 товар.
    /// </summary>
    public double Price { get; set; } = 0;
}