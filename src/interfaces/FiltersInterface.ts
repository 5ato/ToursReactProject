export interface SearchWithFlightFilterInterface {
    fromCityValue: string;
    fromCityId: number;
    toCityValue: string;
    toCityId: number;
    startDateFlight: string;
    endDateFlight: string;
    startNight: number;
    endNight: number;
    adults: number;
    children: (string | null)[];
}

export interface SearchHotelFilterInterface {
    selectedMeal: number;
    hotelTypes: HotelTypeInterface[];
    ratingSelected: number;
    checkedToCitiesId: number[];
    checkedHotelsId: number[];
}

export interface HotelTypeInterface {
    id: number;
    name: string;
    checked: boolean;
}