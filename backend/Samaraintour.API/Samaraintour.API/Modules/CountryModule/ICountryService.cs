namespace Samaraintour.API.Modules.CountryModule;

public interface ICountryService
{
    Task<IEnumerable<CountryDTO>> GetAll();
    Task<CountryDTO> GetCountry(string countryId);
    Task CreateAsync(CommandCreateCountry command);
    Task ReplaceAsync(string countryId, CommandUpdateCountry command);
    Task DeleteAsync(string countryId);
    Task<bool> ExistAsync(string countryId);
}
