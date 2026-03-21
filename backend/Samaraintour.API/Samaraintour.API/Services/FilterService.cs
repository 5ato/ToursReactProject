using Microsoft.AspNetCore.Mvc.Filters;
using MongoDB.Bson;
using MongoDB.Driver;
using Samaraintour.API.DTOs;
using Samaraintour.API.Enums;
using Samaraintour.API.Interfaces;
using Samaraintour.API.Modules.CityModule;
using Samaraintour.API.Modules.CountryModule;
using Samaraintour.API.Modules.HotelModule;
using Samaraintour.API.Modules.TourModule;
using Samaraintour.API.MongoModels;

namespace Samaraintour.API.Services;

public class FilterService : IFilterService
{
    private readonly IMongoCollection<Tour> _tours;
    private readonly IMongoCollection<City> _cities;
    private readonly IMongoCollection<Country> _countries;
    private readonly IMongoCollection<Hotel> _hotels;

    private readonly ILogger<FilterService> _logger;

    public FilterService(IMongoDatabase collectionFactory, ILogger<FilterService> logger)
    {
        _tours = collectionFactory.GetCollection<Tour>(nameof(Tour));
        _cities = collectionFactory.GetCollection<City>(nameof(City));
        _countries = collectionFactory.GetCollection<Country>(nameof(Country));
        _hotels = collectionFactory.GetCollection<Hotel>(nameof(Hotel));
        _logger = logger;
    }

    public async Task<FilterMetadataResponse> GetFiltersMetadataAsync(string? selectedCountryId = null, string? selectedCityId = null)
    {
        _logger.LogInformation("Идёт строение фильтров с параметрами: Country={CountryId}, City={CityId}",
            selectedCountryId, selectedCityId);

        var tasks = new List<Task<FilterDTO>>
        {
            //BuildCountryFilterAsync(),
            //BuildCityFilterAsync(selectedCountryId),
            //BuildDepartureCityFilterAsync(),
            BuildHotelFilterAsync(selectedCityId),
            BuildMealTypeFilterAsync(),
            BuildHotelTypeFilterAsync(),
            BuildStarsFilterAsync(),
            BuildRatingTourFilterAsync(),
            //BuildNightsFilterAsync(),
            //BuildPriceFilterAsync(),
            //BuildDateFilterAsync(),
            //BuildGuestsFilterAsync()
        };

        var filters = await Task.WhenAll(tasks);

        return new FilterMetadataResponse(
            filters,
            DateTime.UtcNow
        );
    }

    private async Task<FilterDTO> BuildHotelFilterAsync(string? selectedCityId)
    {
        var hotelFilter = selectedCityId != null
            ? Builders<Hotel>.Filter.Eq(h => h.CityId, selectedCityId)
            : FilterDefinition<Hotel>.Empty;

        var hotels = await _hotels.Find(hotelFilter)
            .SortBy(h => h.Name)
            .ToListAsync();


        return new FilterDTO()
        {
            Id = Guid.NewGuid().ToString(),
            Field = "HotelsId",
            FieldType = FieldType.MultiSelection,
            IsRequied = false,
            DependsOn = ["СityId"],
            Options = [.. hotels.Select(h => new FilterOption { Label = h.Name, Value = h.Id })]
        };
    }

    private async Task<FilterDTO> BuildMealTypeFilterAsync()
    {
        return new FilterDTO()
        {
            Id = Guid.NewGuid().ToString(),
            Field = "MealTypes",
            DisplayName = "Питание",
            FieldType = FieldType.Selection,
            IsRequied = false,
            Options = [
                new FilterOption() { Label = Nutrition.Any.NutritionDisplay(), Value = Nutrition.Any },
                new FilterOption() { Label = Nutrition.BB.NutritionDisplay(), Value = Nutrition.BB },
                new FilterOption() { Label = Nutrition.HB.NutritionDisplay(), Value = Nutrition.HB },
                new FilterOption() { Label = Nutrition.FB.NutritionDisplay(), Value = Nutrition.FB },
                new FilterOption() { Label = Nutrition.AI.NutritionDisplay(), Value = Nutrition.AI },
                new FilterOption() { Label = Nutrition.UAI.NutritionDisplay(), Value = Nutrition.UAI }
                ]
        };
    }

    private async Task<FilterDTO> BuildStarsFilterAsync()
    {
        return new FilterDTO()
        {
            Id = Guid.NewGuid().ToString(),
            Field = "Stars",
            DisplayName = "Класс Отеля",
            FieldType = FieldType.Rating,
            IsRequied = false,
            MinValue = 1,
            MaxValue = 5,
        };
    }

    public async Task<FilterDTO> BuildRatingTourFilterAsync()
    {
        return new FilterDTO()
        {
            Id = Guid.NewGuid().ToString(),
            Field = "Rating",
            DisplayName = "Ретинг Тура",
            FieldType = FieldType.Selection,
            IsRequied = false,
            Options = [
                new FilterOption() { Label = "Любое", Value = 0 },
                new FilterOption() { Label = "3.0 и более", Value = 3.0 },
                new FilterOption() { Label = "3.5 и более", Value = 3.5 },
                new FilterOption() { Label = "4.0 и более", Value = 4.0 },
                new FilterOption() { Label = "4.5 и более", Value = 4.5 },
                ]
        };
    }

    public async Task<FilterDTO> BuildHotelTypeFilterAsync()
    {
        return new FilterDTO()
        {
            Id = Guid.NewGuid().ToString(),
            Field = "HotelTypes",
            DisplayName = "Тип Отеля",
            FieldType = FieldType.MultiSelection,
            IsRequied = false,
            Options = [
                new FilterOption() { Label = HotelType.Any.HotelTypeDisplay(), Value = HotelType.Any },
                new FilterOption() { Label = HotelType.Hotel.HotelTypeDisplay(), Value = HotelType.Hotel },
                new FilterOption() { Label = HotelType.Pension.HotelTypeDisplay(), Value = HotelType.Pension },
                new FilterOption() { Label = HotelType.RecreationСenter.HotelTypeDisplay(), Value = HotelType.RecreationСenter },
                new FilterOption() { Label = HotelType.GuestHouse.HotelTypeDisplay(), Value = HotelType.GuestHouse },
                new FilterOption() { Label = HotelType.Apartments.HotelTypeDisplay(), Value = HotelType.Apartments },
                new FilterOption() { Label = HotelType.Villa.HotelTypeDisplay(), Value = HotelType.Villa },
                new FilterOption() { Label = HotelType.Hostel.HotelTypeDisplay(), Value = HotelType.Hostel },
                ]
        };
    }

    public async Task<FilterSearchResponse> SearchToursAsync(FilterRequest request)
    {

        _logger.LogInformation("Запуск построения фильтров");

        var query = _tours.AsQueryable();

        if (request.HotelsId?.Count > 0)
            query = query.Where(t => request.HotelsId.Contains(t.HotelId));

        if (request.DepartureCityId != null)
            query = query.Where(t => t.DepartureCityId == request.DepartureCityId);

        if (request.RatingTour != null && request.RatingTour != 0)
            query = query.Where(t => t.Rating >= request.RatingTour);

        _logger.LogInformation("Результат построения фильтрации для коллекции Тура в виде Mongo запроса: {mongoQuery}", 
            query.ToString());

        var joinedQuery = query
            .Join(
                _hotels.AsQueryable(),
                t => t.HotelId,
                h => h.Id,
                (t, h) => new { Tour = t, Hotel = h })
            .Join(
                _cities.AsQueryable(),
                th => th.Tour.DepartureCityId,
                c => c.Id,
                (th, c) => new { th.Tour, th.Hotel, DepartureCity = c})
            .Join(
                _cities.AsQueryable(),
                thd => thd.Hotel.CityId,
                c => c.Id,
                (thd, c) => new { thd.Tour, thd.Hotel, thd.DepartureCity, HotelCity = c})
            .Join(
                _countries.AsQueryable(),
                thdc => thdc.HotelCity.CountryId,
                c => c.Id,
                (thdc, c) => new { thdc.Tour, thdc.Hotel, thdc.DepartureCity, thdc.HotelCity, HotelCountry = c});

        _logger.LogInformation("Результат построения объединения для коллекций в виде Mongo запроса: {mongoQuery}",
            joinedQuery.ToString());

        if (request.Stars != null)
            joinedQuery = joinedQuery.Where(r => r.Hotel.Stars == request.Stars);

        if (request.MealType != null && request.MealType != Nutrition.Any)
            joinedQuery = joinedQuery.Where(r => r.Hotel.Nutrition == request.MealType);

        _logger.LogInformation("Результат построения фильтрации для коллекций после объединения в виде Mongo запроса: {mongoQuery}",
            joinedQuery.ToString());

        var result = joinedQuery.Select(r => new TourSearchResultDTO(
            r.Tour.Id,
            r.Hotel.ImageUrls[0],
            r.Hotel.Stars,
            r.Hotel.Name,
            r.Hotel.Description,
            r.Hotel.DescriptionPlace,
            r.Tour.NewPrice)).ToList();

        _logger.LogInformation("Результат выполнения запроса: {result}",
            result);

        return new FilterSearchResponse(
            result,
            result.Count);
    }
}
