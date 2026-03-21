
using Samaraintour.API.Enums;
using Samaraintour.API.Modules.CountryModule;

namespace Samaraintour.API.Modules.HotelModule;

public class HotelService : IHotelService
{

    private readonly IHotelRepository _hotelRepository;

    public HotelService(IHotelRepository hotelRepository)
    {
        _hotelRepository = hotelRepository;
    }
    public async Task CreateAsync(CommandCreateHotel command)
    {
        var hotel = new Hotel()
        {
            Name = command.Name,
            Description = command.Description,
            DescriptionPlace = command.DescriptionPlace,
            DescriptionRoom = command.DescriptionRoom,
            Founded = command.Founded,
            ImageUrls = command.ImageUrls,
            Address = command.Address,
            Nutrition = command.Nutrition,
            NutritionDisplay = command.Nutrition.NutritionDisplay(),
            HotelType = command.HotelType,
            HotelTypeDisplay = command.HotelType.HotelTypeDisplay(),
            Stars = command.Stars,
            CityId = command.CityId,
        };

        await _hotelRepository.CreateAsync(hotel);
    }

    public async Task DeleteAsync(string hotelId)
    {
        await _hotelRepository.DeleteAsync(hotelId);
    }

    public async Task<bool> ExistAsync(string hotelId)
    {
        return await _hotelRepository.ExistAsync(hotelId);
    }

    public async Task<IEnumerable<HotelDTO>> GetAll()
    {
        var data = await _hotelRepository.GetAllAsync();

        var result = data.Select(c => new HotelDTO(
            c.Id,
            c.Name,
            c.Description,
            c.DescriptionPlace,
            c.DescriptionRoom,
            c.Founded,
            c.ImageUrls,
            c.Address,
            c.Nutrition,
            c.NutritionDisplay,
            c.HotelType,
            c.HotelTypeDisplay,
            c.Stars,
            c.CityId));

        return result;
    }

    public async Task<HotelDTO> GetHotel(string hotelId)
    {
        var data = await _hotelRepository.GetByAsync(c => c.Id == hotelId);

        var result = new HotelDTO(
            data.Id,
            data.Name,
            data.Description,
            data.DescriptionPlace,
            data.DescriptionRoom,
            data.Founded,
            data.ImageUrls,
            data.Address,
            data.Nutrition,
            data.NutritionDisplay,
            data.HotelType,
            data.HotelTypeDisplay,
            data.Stars,
            data.CityId);

        return result;
    }

    public async Task ReplaceAsync(string hotelId, CommandUpdateHotel command)
    {
        var hotel = new Hotel()
        {
            Id = hotelId,
            Name = command.Name,
            Description = command.Description,
            DescriptionPlace = command.DescriptionPlace,
            DescriptionRoom = command.DescriptionRoom,
            Founded = command.Founded,
            ImageUrls = command.ImageUrls,
            Address = command.Address,
            Nutrition = command.Nutrition,
            NutritionDisplay = command.Nutrition.NutritionDisplay(),
            HotelType = command.HotelType,
            HotelTypeDisplay = command.HotelType.HotelTypeDisplay(),
            Stars = command.Stars,
            CityId = command.CityId,

        };

        await _hotelRepository.ReplaceAsync(hotelId, hotel);
    }
}
