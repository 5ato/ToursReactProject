namespace Samaraintour.API.DTOs;

public record FilterMetadataResponse(
    IList<FilterDTO> Filters,
    DateTime GeneratedAt);
