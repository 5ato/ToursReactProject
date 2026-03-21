namespace Samaraintour.API.Modules.CityModule;

public record CityDTO(
    string Id,
    string Name,
    string CountryId);

public record CommandCreateCity(
    string Name,
    string CountryId);

public record CommandUpdateCity(
    string Name,
    string CountryId);
