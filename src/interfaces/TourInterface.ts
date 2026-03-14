export default interface Tour {
    id: number;
    hotelId: number;
    oldPrice: number;
    newPrice: number;
    discount: number;
    rating: number;
    adultCount: number;
    childrenCount: number;
    nightCount: number;
    departureDate: Date;
    backDepartureDate: Date;
    isHot: boolean;
    fromCityId: number;
}