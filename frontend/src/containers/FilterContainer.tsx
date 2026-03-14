import SearchHotel from '../components/Filters/SearchHotel'
import SearchWithFlight from '../components/Filters/SearchWithFlight'
import styles from './FilterContainer.module.css'
import type { SearchHotelFilterInterface, SearchWithFlightFilterInterface } from '../interfaces/FiltersInterface';

interface FilterContainerProps {
    hotelFilters: SearchHotelFilterInterface;
    setHotelFilters: React.Dispatch<React.SetStateAction<SearchHotelFilterInterface>>;

    flightFilters: SearchWithFlightFilterInterface;
    setFlightFilters: React.Dispatch<React.SetStateAction<SearchWithFlightFilterInterface>>;

    onClickToSearch: () => void
}

export default function FilterContainer({ hotelFilters, setHotelFilters, flightFilters, setFlightFilters, onClickToSearch }: FilterContainerProps) {
    return (
        <div className={styles.form__search}>
            <SearchWithFlight
                filters={flightFilters}
                onFilterChange={setFlightFilters}/>
            <SearchHotel
                filtersWithFlight={flightFilters}
                filtersHotel={hotelFilters}
                onFilterChange={setHotelFilters}
                onClickToSearch={onClickToSearch}/>
        </div>
    )
}