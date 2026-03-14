import FilterContainer from "../../containers/FilterContainer"
import type { SearchHotelFilterInterface, SearchWithFlightFilterInterface } from "../../interfaces/FiltersInterface"
import styles from "./Filter.module.css"

interface FilterProps {
    hotelFilters: SearchHotelFilterInterface;
    setHotelFilters: React.Dispatch<React.SetStateAction<SearchHotelFilterInterface>>;

    flightFilters: SearchWithFlightFilterInterface;
    setFlightFilters: React.Dispatch<React.SetStateAction<SearchWithFlightFilterInterface>>;
}

export default function Filter({ hotelFilters, setHotelFilters, flightFilters, setFlightFilters }: FilterProps) {
    return (
        <article id="page-content" className={styles.page__content}>
            <h1 className={styles.page__content__title}>Поиск туров</h1>
            <FilterContainer
                hotelFilters={hotelFilters}
                setHotelFilters={setHotelFilters}
                flightFilters={flightFilters}
                setFlightFilters={setFlightFilters}/>
        </article>
    )
}