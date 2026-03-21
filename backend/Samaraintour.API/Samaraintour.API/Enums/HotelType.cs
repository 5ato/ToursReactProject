using System.ComponentModel.DataAnnotations;

namespace Samaraintour.API.Enums;

public enum HotelType
{
    [Display(Name = "Любой")]
    Any = 0,

    [Display(Name = "Отель")]
    Hotel = 1,

    [Display(Name = "Пансионат")]
    Pension = 2,

    [Display(Name = "База отдыха")]
    RecreationСenter = 3,

    [Display(Name = "Гостевой дом")]
    GuestHouse = 4,

    [Display(Name = "Апартаменты")]
    Apartments = 5,

    [Display(Name = "Вилла")]
    Villa = 6,

    [Display(Name = "Хостел")]
    Hostel = 7,
}

public static class HotelTypeEnumExtensions
{
    public static string HotelTypeDisplay(this HotelType hotel)
    {
        return hotel switch
        {
            HotelType.Any => "Любой",
            HotelType.Hotel => "Отель",
            HotelType.Pension => "Пансионат",
            HotelType.RecreationСenter => "База отдыха",
            HotelType.GuestHouse => "Гостевой дом",
            HotelType.Apartments => "Апартаменты",
            HotelType.Villa => "Вилла",
            HotelType.Hostel => "Хостел",
            _ => "Неизвестно",
        };
    }
}
