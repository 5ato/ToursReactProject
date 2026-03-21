using Samaraintour.API.DTOs;

namespace Samaraintour.API.Interfaces;

public interface IFilterService
{
    Task<FilterMetadataResponse> GetFiltersMetadataAsync(
        string? selectedCountryId = null,
        string? selectedCityId = null);

    Task<FilterSearchResponse> SearchToursAsync(FilterRequest request);
}
