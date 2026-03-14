export default interface ResultSearch {
    tourId: number;
    hotelName: string;
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
    descriptionPlace: string;
    description: string;
    descriptionRoom: string;
    founded: number;
    imageUrls: string[];
    address: string;
    nutritions: string;
    hotelType: string;
    stars: number;
    cityName: string;
    countryName: string;
}