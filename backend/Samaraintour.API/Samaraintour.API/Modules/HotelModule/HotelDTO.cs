using Samaraintour.API.Enums;

namespace Samaraintour.API.Modules.HotelModule;

public record HotelDTO(
    string Id,
    string Name,
    string Description,
    string DescriptionPlace,
    string DescriptionRoom,
    int Founded,
    IList<string> ImageUrls,
    string Address,
    Nutrition Nutrition,
    string NutritionDisplay,
    HotelType HotelType,
    string HotelTypeDisplay,
    int Stars,
    string CityId);

public record CommandCreateHotel(
    string Name,
    string Description,
    string DescriptionPlace,
    string DescriptionRoom,
    int Founded,
    IList<string> ImageUrls,
    string Address,
    Nutrition Nutrition,
    HotelType HotelType,
    int Stars,
    string CityId);

public record CommandUpdateHotel(
    string Name,
    string Description,
    string DescriptionPlace,
    string DescriptionRoom,
    int Founded,
    IList<string> ImageUrls,
    string Address,
    Nutrition Nutrition,
    HotelType HotelType,
    int Stars,
    string CityId);
