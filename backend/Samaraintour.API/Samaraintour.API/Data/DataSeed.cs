using Samaraintour.API.Enums;
using Samaraintour.API.Models;
using System.Text.Json;

namespace Samaraintour.API.Data;

public static class DataSeed
{
    private static IEnumerable<TourDTO>? Tours = null;
    public static async Task<IEnumerable<TourDTO>> GetAllTours(IWebHostEnvironment environment)
    {
        if (Tours != null)
            return Tours;

        var filePath = Path.Combine(environment.WebRootPath, "Data", "toursData.json");

        var jsonContent = await File.ReadAllTextAsync(filePath);

        var options = new JsonSerializerOptions
        {
            PropertyNameCaseInsensitive = true,
        };

        Tours = JsonSerializer.Deserialize<List<TourDTO>>(jsonContent, options)!;

        return Tours;
    }

    public static IEnumerable<Filter> GetFilters()
    {
        return [
            new Filter()
            {
                Id = 1,
                DisplayName = "Класс Отеля",
                FieldType = FieldType.Rating,
                IsRequied = false,
                MinValue = 1,
                MaxValue = 5,
                Field = FieldType.Rating.DisplayFieldType()
            },
            new Filter()
            {
                Id = 2,
                DisplayName = "Тип Отеля",
                Placeholder = "Тип Отеля",
                FieldType = FieldType.MultiSelection,
                IsRequied = false,
                Field = FieldType.MultiSelection.DisplayFieldType(),
                Options = [
                        new FilterOption()
                        {
                            Label = HotelType.Any.HotelTypeDisplay(),
                            Value = HotelType.Any,
                        },
                        new FilterOption()
                        {
                            Label = HotelType.Hotel.HotelTypeDisplay(),
                            Value = HotelType.Hotel,
                        },
                        new FilterOption()
                        {
                            Label = HotelType.Pension.HotelTypeDisplay(),
                            Value = HotelType.Pension,
                        },
                        new FilterOption()
                        {
                            Label = HotelType.RecreationСenter.HotelTypeDisplay(),
                            Value = HotelType.RecreationСenter,
                        },
                        new FilterOption()
                        {
                            Label = HotelType.GuestHouse.HotelTypeDisplay(),
                            Value = HotelType.GuestHouse,
                        },
                        new FilterOption()
                        {
                            Label = HotelType.Apartments.HotelTypeDisplay(),
                            Value = HotelType.Apartments,
                        },
                        new FilterOption()
                        {
                            Label = HotelType.Villa.HotelTypeDisplay(),
                            Value = HotelType.Villa,
                        },
                        new FilterOption()
                        {
                            Label = HotelType.Hostel.HotelTypeDisplay(),
                            Value = HotelType.Hostel,
                        },
                    ]
            }
        ];
    }
}
