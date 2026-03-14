import Filter from "../components/Filters/Filter";
import styles from "./HomePage.module.css"
import ListTours from "../components/ListHotTours/ListHotTours";
import type { SearchHotelFilterInterface, SearchWithFlightFilterInterface } from "../interfaces/FiltersInterface";
import { useState } from "react";
import hotelTypesData from "../data/hotelTypesData";


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
        startDateFlight: '',
        endDateFlight: '',
        startNight: 6,
        endNight: 6,
        adults: 2,
        children: []
    });

    return (
        <section className={styles.page}>
            <Filter
                hotelFilters={hotelFilters}
                setHotelFilters={setHotelFilters}
                flightFilters={flightFilters}
                setFlightFilters={setFlightFilters}/>
            <p className={styles.space}></p>
            <p className={styles.informationAlert}>*Обратите внимание! По некоторым странам, не входящим в список направлений массового туризма, стоимость тура указана с учетом перелета регулярным рейсом по минимальному тарифу экономического класса и требует обязательной актуализации цены именно под ваши даты. В связи с этим стоимость туров с перелетом регулярными рейсами не является окончательной.</p>
            <hr />
            <h2 className={styles.lastMinutTours}>Горящие туры</h2>
            <ListTours/>
        </section>
    )
}