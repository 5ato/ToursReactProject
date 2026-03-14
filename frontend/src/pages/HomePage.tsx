import Filter from "../components/Filters/Filter";
import styles from "./HomePage.module.css"
import ListHotTours from "../components/ListHotTours/ListHotTours";
import type { SearchHotelFilterInterface, SearchWithFlightFilterInterface } from "../interfaces/FiltersInterface";
import { useState } from "react";
import hotelTypesData from "../data/hotelTypesData";
import ListTours from "../components/ListTours/ListTours";
import type Hotel from "../interfaces/HotelInterface";
import type Tour from "../interfaces/TourInterface";
import type ResultSearch from "../interfaces/ResultSearchInterface";


export default function HomePage() {
    const [hotelFilters, setHotelFilters] = useState<SearchHotelFilterInterface>({
        selectedMeal: 1,
        hotelTypes: hotelTypesData,
        ratingSelected: 1,
        checkedToCitiesId: [],
        checkedHotelsId: []
    });

    const [flightFilters, setFlightFilters] = useState<SearchWithFlightFilterInterface>({
        fromCityValue: 'Самара',
        fromCityId: 5,
        toCityValue: 'Турция',
        toCityId: 1,
        startDateFlightDisplay: '',
        startDateFlight: null,
        endDateFlightDisplay: '',
        endDateFlight: null,
        startNight: 6,
        endNight: 6,
        adults: 2,
        children: []
    });

    const [hasView, setHasView] = useState<boolean>(false);

    const [resultSearch, setResultSearch] = useState<ResultSearch[]>([]);

    async function startFindTours() {
        if (flightFilters.startDateFlight === null || flightFilters.endDateFlight === null)
            return;

        console.log(1111111);

        let fetchHotels: Hotel[] = await fetch("/data/hotelsData.json").then(result => result.json());

        let fetchTours: Tour[] = await fetch("/data/toursData.json").then(result => result.json());
        
        fetchTours = fetchTours.map(t => {
            t.departureDate = new Date(t.departureDate);
            t.backDepartureDate = new Date(t.backDepartureDate);
            return t
        })

        fetchTours = fetchTours.filter(t => 
            t.fromCityId === flightFilters.fromCityId 
            && (flightFilters.startDateFlight! <= t.departureDate && t.departureDate <= flightFilters.endDateFlight!)
            && (flightFilters.startNight <= t.nightCount && t.nightCount <= flightFilters.endNight)
            && flightFilters.adults === t.adultCount
            && flightFilters.children.length === t.childrenCount
        )
        fetchHotels = fetchHotels.filter(h =>
            hotelFilters.ratingSelected <= h.stars
        )

        if (hotelFilters.checkedHotelsId.length > 0)
            fetchHotels = fetchHotels.filter(h => hotelFilters.checkedHotelsId.includes(h.id))

        let selectedHotelTypes = hotelFilters.hotelTypes.filter(t => t.checked);
        if (selectedHotelTypes[0].id !== 1)
            fetchHotels = fetchHotels.filter(h => selectedHotelTypes.map(t => t.name).includes(h.hotelType))

        if (hotelFilters.checkedToCitiesId.length > 0 && hotelFilters.checkedToCitiesId[0] !== 0)
            fetchHotels = fetchHotels.filter(h => hotelFilters.checkedToCitiesId.includes(h.toCityId))
        
        let result: ResultSearch[] = [];
        
        for (const tour of fetchTours) {
            let hotel = fetchHotels.find(h => h.id === tour.hotelId)
            if (!hotel)
                continue

            result.push({
                tourId: tour.id,
                hotelName: hotel.name,
                oldPrice: tour.oldPrice,
                newPrice: tour.newPrice,
                discount: tour.discount,
                rating: tour.rating,
                adultCount: tour.adultCount,
                childrenCount: tour.childrenCount,
                nightCount: tour.nightCount,
                departureDate: tour.departureDate,
                backDepartureDate: tour.backDepartureDate,
                isHot: tour.isHot,
                description: hotel.description,
                descriptionPlace: hotel.descriptionPlace,
                descriptionRoom: hotel.descriptionRoom,
                founded: hotel.founded,
                imageUrls: hotel.imageUrls,
                address: hotel.address,
                nutritions: hotel.nutritions,
                hotelType: hotel.hotelType,
                stars: hotel.stars,
                cityName: hotel.cityName,
                countryName: hotel.countryName
            })
        }
        
        setResultSearch(result)
        setHasView(true);
        
    }

    return (
        <section className={styles.page}>
            <Filter
                hotelFilters={hotelFilters}
                setHotelFilters={setHotelFilters}
                flightFilters={flightFilters}
                setFlightFilters={setFlightFilters}
                onClickToSearch={startFindTours}/>
            <p className={styles.space}></p>
            {hasView ?
                resultSearch.length === 0 ?
                    <div>Ничего не нашли</div> :
                    <ListTours resultSearch={resultSearch}/> 
            : ""}
            <p className={styles.informationAlert}>*Обратите внимание! По некоторым странам, не входящим в список направлений массового туризма, стоимость тура указана с учетом перелета регулярным рейсом по минимальному тарифу экономического класса и требует обязательной актуализации цены именно под ваши даты. В связи с этим стоимость туров с перелетом регулярными рейсами не является окончательной.</p>
            <hr />
            <h2 className={styles.lastMinutTours}>Горящие туры</h2>
            <ListHotTours/>
        </section>
    )
}