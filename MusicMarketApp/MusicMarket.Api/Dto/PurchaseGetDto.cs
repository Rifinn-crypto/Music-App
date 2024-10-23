﻿namespace MusicMarket.Api.Dto;
/// <summary>
/// Информация о покупке
/// </summary>
public class PurchaseGetDto
{
    /// <summary>
    /// ID Покупки.
    /// </summary>
    public int Id;

    /// <summary>
    /// Дата совершения покупки.
    /// </summary>
    public DateTime Date { get; set; }
}