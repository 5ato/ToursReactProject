using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using Samaraintour.API.Shared;

namespace Samaraintour.API.Modules.CityModule;

public class City : BaseEntity
{
    public string Name { get; set; } = string.Empty;


    [BsonRepresentation(BsonType.ObjectId)]
    public string CountryId { get; set; } = string.Empty;
}
