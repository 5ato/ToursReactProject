using System.ComponentModel.DataAnnotations;

namespace Samaraintour.API.Enums;

public enum Nutrition
{
    [Display(Name = "Любое")]
    Any = 0,

    [Display(Name = "BB - Только завтрак")]
    BB = 1,

    [Display(Name = "HB - Завтрак, ужин")]
    HB = 2,

    [Display(Name = "FB - Полный пансион")]
    FB = 3,

    [Display(Name = "AI - Всё включено")]
    AI = 4,

    [Display(Name = "UAI - Ультра всё включено")]
    UAI = 5,
}


public static class NutritionEnumExtensions
{
    public static string NutritionDisplay(this Nutrition nutrition)
    {
        return nutrition switch
        {
            Nutrition.Any => "Любой",
            Nutrition.BB => "BB - Только завтрак",
            Nutrition.HB => "HB - Завтрак, ужин",
            Nutrition.FB => "FB - Полный пансион",
            Nutrition.AI => "AI - Всё включено",
            Nutrition.UAI => "UAI - Ультра всё включено",
            _ => "Неизвестно"
        };
    }
}
