using Samaraintour.API.Enums;
using Samaraintour.API.MongoModels;

namespace Samaraintour.API.DTOs;

public record FilterDTO
{
    public string Id { get; set; } = string.Empty;
    public string Field { get; set; } = string.Empty;
    public string DisplayName { get; set;  } = string.Empty;
    public FieldType FieldType { get; set; }
    public bool IsRequied { get; set; }
    public IList<string> DependsOn { get; set; } = [];
    public IList<FilterOption>? Options { get; set; }
    public object? MinValue { get; set; }
    public object? MaxValue { get; set; }
    public object? MinLength { get; set; }
    public object? MaxLength { get; set; }
    public string? Placeholder { get; set; }
}
