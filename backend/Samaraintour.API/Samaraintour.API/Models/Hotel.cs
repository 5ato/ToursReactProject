using Samaraintour.API.Enums;

namespace Samaraintour.API.Models;

public class HotelDTO
{
    public int Id { get; set; }
    public string Name { get; set; } = string.Empty;
    public string Description { get; set; } = string.Empty;
    public string DescriptionPlace {  get; set; } = string.Empty;
    public string DescriptionRoom {  get; set; } = string.Empty;
    public int Founded { get; set; }
    public ICollection<string> ImageUrls { get; set; } = [];
    public string Address {  get; set; } = string.Empty;
    public Nutrition Nutrition { get; set; }
    public string NutritionDisplay {  get; set; } = string.Empty;
    public HotelType HotelType { get; set; }
    public string HotelTypeDisplay { get; set; } = string.Empty;
    public int Stars { get; set; }
    public int ToCityId { get; set; }
    public string ToCityName { get; set; } = string.Empty;
    public string ToCountryName { get; set; } = string.Empty;
}
