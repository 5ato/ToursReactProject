using Samaraintour.API.Enums;
using System.ComponentModel.DataAnnotations;

namespace Samaraintour.API.DTOs;

public record FilterRequest
{
    
    [MaxLength(50)]
    public string? CountryId { get; set; }

    [MaxLength(50)]
    public string? CityId { get; set; }

    public IReadOnlyList<string>? HotelsId { get; set; }

    [MaxLength(50)]
    public string? DepartureCityId { get; set; }

    public decimal? RatingTour { get; set; }

    public IReadOnlyList<HotelType>? HotelTypes { get; set; }

    public Nutrition? MealType { get; set; }

    [Range(1, 5)]
    public int? Stars { get; set; }

    public int? MinNights { get; set; }

    public int? MaxNights { get; set; }

    [Range(1, 6)]
    public int? Adults { get; set; }

    [Range(0, 3)]
    public int? Children { get; set; }

    public DateTime? DateFrom { get; set; }
    public DateTime? DateTo { get; set; }

    public bool IncludeUpdatedFilters { get; set; } = false;
}