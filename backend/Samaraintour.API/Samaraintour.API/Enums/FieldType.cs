namespace Samaraintour.API.Enums;

public enum FieldType
{
    Text,
    Number,
    Boolean,
    Selection,
    MultiSelection,
    Rating,
}

public static class FieldTypeEnumExtensions
{
    public static string DisplayFieldType(this FieldType fieldType)
    {
        return fieldType switch
        {
            FieldType.Text => "Текст",
            FieldType.Number => "Число",
            FieldType.Boolean => "Да Или Нет",
            FieldType.Selection => "Один Выбор",
            FieldType.MultiSelection => "Множественный Выбор",
            FieldType.Rating => "Рейтинг",
            _ => "Неизвестно"
        };
    }
}
