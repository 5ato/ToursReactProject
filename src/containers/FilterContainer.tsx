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

    console.log(hotelFilters)

    return (
        <div className={styles.form__search}>
            <SearchWithFlight
                filters={flightFilters}
                onFilterChange={setFlightFilters}/>
            <SearchHotel
                filtersWithFlight={flightFilters}
                filtersHotel={hotelFilters}
                onFilterChange={setHotelFilters}/>
        </div>
    )
}