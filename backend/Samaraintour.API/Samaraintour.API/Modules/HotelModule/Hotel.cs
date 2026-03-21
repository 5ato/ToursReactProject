using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using Samaraintour.API.Enums;
using Samaraintour.API.Shared;

namespace Samaraintour.API.Modules.HotelModule;

public class Hotel : BaseEntity
{
    public string Name { get; set; } = string.Empty;
    public string Description { get; set; } = string.Empty;
    public string DescriptionPlace { get; set; } = string.Empty;
    public string DescriptionRoom { get; set; } = string.Empty;
    public int Founded { get; set; }
    public IList<string> ImageUrls { get; set; } = [];
    public string Address { get; set; } = string.Empty;
    public Nutrition Nutrition { get; set; }
    public string NutritionDisplay { get; set; } = string.Empty;
    public HotelType HotelType { get; set; }
    public string HotelTypeDisplay { get; set; } = string.Empty;
    public int Stars { get; set; }

    [BsonRepresentation(BsonType.ObjectId)]
    public string CityId { get; set; } = string.Empty;
}
