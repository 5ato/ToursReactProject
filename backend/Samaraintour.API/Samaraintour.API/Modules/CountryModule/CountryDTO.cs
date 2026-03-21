namespace Samaraintour.API.Modules.CountryModule;

public record CountryDTO(
    string Id,
    string Name,
    string FlagImageUrl,
    bool HasAirport);

public record CommandCreateCountry(
    string Name,
    string FlagImageUrl,
    bool HasAirport);

public record CommandUpdateCountry(
    string Name,
    string FlagImageUrl,
    bool HasAirport);