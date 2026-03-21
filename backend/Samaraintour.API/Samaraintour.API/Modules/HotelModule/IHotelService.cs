namespace Samaraintour.API.Modules.HotelModule;

public interface IHotelService
{
    Task<IEnumerable<HotelDTO>> GetAll();
    Task<HotelDTO> GetHotel(string hotelId);
    Task CreateAsync(CommandCreateHotel command);
    Task ReplaceAsync(string hotelId, CommandUpdateHotel command);
    Task DeleteAsync(string hotelId);
    Task<bool> ExistAsync(string hotelId);
}
