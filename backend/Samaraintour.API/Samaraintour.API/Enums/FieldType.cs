using System.ComponentModel.DataAnnotations;

namespace Samaraintour.API.Enums;

public enum FieldType
{
    [Display(Name = "Текст")]
    Text,

    [Display(Name = "Число")]
    Number,

    [Display(Name = "Да Или Нет")]
    Boolean,

    [Display(Name = "Один Выбор")]
    Selection,

    [Display(Name = "Множественный Выбор")]
    MultiSelection,

    [Display(Name = "Рейтинг")]
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
