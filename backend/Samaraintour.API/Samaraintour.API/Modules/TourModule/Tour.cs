using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using Samaraintour.API.Shared;

namespace Samaraintour.API.Modules.TourModule;

public class Tour : BaseEntity
{
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

    [BsonRepresentation(BsonType.ObjectId)]
    public string DepartureCityId { get; set; } = string.Empty;

    [BsonRepresentation(BsonType.ObjectId)]
    public string HotelId { get; set; } = string.Empty;
}
