namespace Samaraintour.API.Modules.CityModule;

public interface ICityService
{
    Task<IEnumerable<CityDTO>> GetAll();
    Task<CityDTO> GetCity(string cityId);
    Task CreateAsync(CommandCreateCity command);
    Task ReplaceAsync(string cityId, CommandUpdateCity command);
    Task DeleteAsync(string cityId);
    Task<bool> ExistAsync(string cityId);
}
