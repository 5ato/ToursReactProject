using Samaraintour.API.Shared;

namespace Samaraintour.API.Modules.CountryModule;

public class Country : BaseEntity
{
    public string Name { get; set; } = string.Empty;
    public string FlagImage { get; set; } = string.Empty;
    public bool HasAirport {  get; set; }
}
