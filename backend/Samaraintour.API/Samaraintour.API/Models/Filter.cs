using Samaraintour.API.Enums;

namespace Samaraintour.API.Models;

public class Filter
{
    public int Id { get; set; }
    public string Field { get; set; } = string.Empty;
    public string DisplayName { get; set;  } = string.Empty;
    public FieldType FieldType { get; set; }
    public bool IsRequied { get; set; }
    public ICollection<FilterOption>? Options { get; set; } = null;
    public object? MinValue { get; set; }
    public object? MaxValue { get; set; }
    public string? Placeholder { get; set; } = string.Empty;
}

public class FilterOption
{
    public string Label { get; set; } = string.Empty;
    public object Value { get; set; }
    public object? Data { get; set; }
}



