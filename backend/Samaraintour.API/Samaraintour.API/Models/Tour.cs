using System.Text.Json.Serialization;

namespace Samaraintour.API.Models;

public class TourDTO
{
    [JsonPropertyName("id")]
    public int Id { get; set; }
    public int HotelId { get; set; }
    public int OldPrice { get; set; }
    public int NewPrice { get; set; }
    public decimal Discount { get; set; }
    public decimal Rating { get; set; }
    public int AdultCount { get; set; }
    public int ChildrenCount { get; set; }
    public int NightCount { get; set; }
    public DateTime DepartureDate { get; set; }
    public DateTime BackDepartureDate { get; set; }
    public bool IsHot { get; set; }
    public int FromCityId { get; set; }
}
