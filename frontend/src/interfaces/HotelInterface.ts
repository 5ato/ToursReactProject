export default interface Hotel {
    id: number;
    name: string;
    descriptionPlace: string;
    description: string;
    descriptionRoom: string;
    founded: number;
    imageUrls: string[];
    address: string;
    nutritions: string;
    hotelType: string;
    stars: number;
    toCityId: number;
    cityName: string;
    countryName: string;
    checked: boolean;
}