namespace Samaraintour.API.Modules.TourModule;

public record TourDTO(
    string Id,
    int OldPrice,
    int NewPrice,
    decimal Discount,
    decimal Rating,
    int AdultCount,
    int ChildrenCount,
    int NightCount,
    DateTime DepartureDate,
    DateTime BackDepartureDate,
    bool IsHot,
    string DepartureCityId,
    string HotelId);

public record CommandCreateTour(
    int OldPrice,
    int NewPrice,
    decimal Discount,
    decimal Rating,
    int AdultCount,
    int ChildrenCount,
    int NightCount,
    DateTime DepartureDate,
    DateTime BackDepartureDate,
    bool IsHot,
    string DepartureCityId,
    string HotelId);

public record CommandUpdateTour(
    int OldPrice,
    int NewPrice,
    decimal Discount,
    decimal Rating,
    int AdultCount,
    int ChildrenCount,
    int NightCount,
    DateTime DepartureDate,
    DateTime BackDepartureDate,
    bool IsHot,
    string DepartureCityId,
    string HotelId);

public record TourSearchResultDTO(
    string Id,
    string MainImageUrl,
    int Stars,
    string HotelName,
    string HotelDescription,
    string HotelPlaceDescription,
    decimal Price);
