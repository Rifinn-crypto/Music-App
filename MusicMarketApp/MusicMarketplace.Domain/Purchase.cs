﻿using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace MusicMarketplace.Domain;

/// <summary>
/// Покупка.
/// </summary>
public class Purchase
{
    /// <summary>
    /// ID Покупки.
    /// </summary>
    [Key]
    public int Id { get; set; }

    /// <summary>
    /// ID Товара.
    /// </summary>

    [ForeignKey("IdProduct")]
    public int IdProduct { get; set; }

    /// <summary>
    /// Товар.
    /// </summary>
    public Product? Product { get; set; }

    /// <summary>
    /// ID Покупателя.
    /// </summary>
    [ForeignKey("IdCustomer")]
    public int IdCustomer { get; set; }
    /// <summary>
    /// Покупатель.
    /// </summary>
    public Customer? Customer { get; set; }

    /// <summary>
    /// Дата совершения покупки.
    /// </summary>
    [Required]
    public DateTime Date { get; set; }

    /// <summary>
    /// Конструктор по умолчанию. 
    /// </summary>
    public Purchase() { }

    /// <summary>
    /// Конструктор с параметрами. 
    /// </summary>
    public Purchase(int id, int product, DateTime date, int customer)
    {
        Id = id;
        IdProduct = product;
        IdCustomer = customer;
        Date = date;

    }

}