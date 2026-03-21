namespace Samaraintour.API.Modules.CountryModule;

public class CountryService : ICountryService
{
    private readonly ICountryRepository _countryRepository;

    public CountryService(ICountryRepository countryRepository)
    {
        _countryRepository = countryRepository;
    }

    public async Task CreateAsync(CommandCreateCountry command)
    {
        var country = new Country()
        {
            Name = command.Name,
            FlagImage = command.FlagImageUrl,
            HasAirport = command.HasAirport,
        };

        await _countryRepository.CreateAsync(country);
    }

    public async Task DeleteAsync(string countryId)
    {
        await _countryRepository.DeleteAsync(countryId);
    }

    public async Task<bool> ExistAsync(string countryId)
    {
        return await _countryRepository.ExistAsync(countryId);
    }

    public async Task<IEnumerable<CountryDTO>> GetAll()
    {
        var data = await _countryRepository.GetAllAsync();

        var result = data.Select(c => new CountryDTO(
            c.Id,
            c.Name,
            c.FlagImage,
            c.HasAirport));

        return result;
    }

    public async Task<CountryDTO> GetCountry(string countryId)
    {
        var data = await _countryRepository.GetByAsync(c => c.Id == countryId);

        var result = new CountryDTO(
            data.Id,
            data.Name,
            data.FlagImage,
            data.HasAirport);

        return result;
    }

    public async Task ReplaceAsync(string countryId, CommandUpdateCountry command)
    {
        var country = new Country()
        {
            Id = countryId,
            Name = command.Name,
            FlagImage = command.FlagImageUrl,
            HasAirport = command.HasAirport,
        };

        await _countryRepository.ReplaceAsync(countryId, country);
    }
}
