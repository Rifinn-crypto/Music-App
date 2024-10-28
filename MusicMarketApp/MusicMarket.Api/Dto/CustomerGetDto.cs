﻿namespace MusicMarket.Api.Dto;
/// <summary>
/// Информация о покупателе
/// </summary>
public class CustomerGetDto
{
    /// <summary>
    /// ID Покупателя.
    /// </summary>
    public int Id { get; set; } = 0;

    /// <summary>
    /// Ф.И.О.
    /// </summary>
    public string Name { get; set; } = string.Empty;

    /// <summary>
    /// Страна проживания.
    /// </summary>
    public string Country { get; set; } = string.Empty;

    /// <summary>
    /// Адрес.
    /// </summary>
    public string Address { get; set; } = string.Empty;
}