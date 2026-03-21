using Samaraintour.API.Modules.TourModule;

namespace Samaraintour.API.DTOs;

public record FilterSearchResponse(
    IList<TourSearchResultDTO> Tours,
    int TotalCount);
