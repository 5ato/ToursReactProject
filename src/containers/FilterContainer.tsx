import { useState } from 'react';
import SearchHotel from '../components/Filters/SearchHotel'
import SearchWithFlight from '../components/Filters/SearchWithFlight'
import styles from './FilterContainer.module.css'
import type { SearchHotelFilterInterface, SearchWithFlightFilterInterface } from '../interfaces/FiltersInterface';
import hotelTypesData from '../data/hotelTypesData';

export default function FilterContainer() {
    const [hotelFilters, setHotelFilters] = useState<SearchHotelFilterInterface>({
        selectedMeal: 1,
        hotelTypes: hotelTypesData,
        ratingSelected: 1
    });

    const [flightFilters, setFlightFilters] = useState<SearchWithFlightFilterInterface>({
        fromCityValue: 'Самара',
        toCityValue: 'Турция',
        startDateFlight: '',
        endDateFlight: '',
        startNight: 6,
        endNight: 6,
        adults: 2,
        children: []
    });


    return (
        <div className={styles.form__search}>
            <SearchWithFlight
                filters={flightFilters}
                onFilterChange={setFlightFilters}/>
            <SearchHotel
                filters={hotelFilters}
                onFilterChange={setHotelFilters}/>
        </div>
    )
}