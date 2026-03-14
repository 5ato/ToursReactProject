namespace Samaraintour.API.Enums;

public enum Nutrition
{
    Any = 0,
    BB = 1,
    HB = 2,
    FB = 3,
    AI = 4,
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
