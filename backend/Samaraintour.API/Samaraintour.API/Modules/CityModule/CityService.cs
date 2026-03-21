namespace Samaraintour.API.Modules.CityModule;

public class CityService : ICityService
{
    private readonly ICityRepository _cityRepository;

    public CityService(ICityRepository cityRepository)
    {
        _cityRepository = cityRepository;
    }

    public async Task CreateAsync(CommandCreateCity command)
    {
        var city = new City()
        {
            Name = command.Name,
            CountryId = command.CountryId,
        };

        await _cityRepository.CreateAsync(city);
    }

    public async Task DeleteAsync(string cityId)
    {
        await _cityRepository.DeleteAsync(cityId);
    }

    public async Task<bool> ExistAsync(string cityId)
    {
        return await _cityRepository.ExistAsync(cityId);
    }

    public async Task<IEnumerable<CityDTO>> GetAll()
    {
        var data = await _cityRepository.GetAllAsync();

        var result = data.Select(c => new CityDTO(
            c.Id,
            c.Name,
            c.CountryId));

        return result;
    }

    public async Task<CityDTO> GetCity(string cityId)
    {
        var data = await _cityRepository.GetByAsync(c => c.Id == cityId);

        var result = new CityDTO(
            data.Id,
            data.Name,
            data.CountryId);

        return result;
    }

    public async Task ReplaceAsync(string cityId, CommandUpdateCity command)
    {
        var city = new City()
        {
            Id = cityId,
            Name = command.Name,
            CountryId = command.CountryId,
        };

        await _cityRepository.ReplaceAsync(cityId, city);
    }
}
