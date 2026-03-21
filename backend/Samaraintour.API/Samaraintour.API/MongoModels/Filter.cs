using Microsoft.VisualBasic.FileIO;

namespace Samaraintour.API.MongoModels;

public class Filter
{
    public string Id { get; set; } = string.Empty;

    public string Field { get; set; } = string.Empty;
    public string DisplayName { get; set; } = string.Empty;
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


public record FilterOption
{
    public string Label { get; set; } = string.Empty;
    public object Value { get; set; } = null!;
    public object? Data { get; set; }
}
