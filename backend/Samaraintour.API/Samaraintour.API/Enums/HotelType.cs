namespace Samaraintour.API.Enums;

public enum HotelType
{
    Any = 0,
    Hotel = 1,
    Pension = 2,
    RecreationСenter = 3,
    GuestHouse = 4,
    Apartments = 5,
    Villa = 6,
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
