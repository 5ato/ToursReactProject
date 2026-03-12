import checkboxTreeData from "../../data/checkboxTreeData"
import nameHotelData from "../../data/nameHotelData"
import useDropdownManager from "../../hooks/useDropdownManager"
import CheckboxTreeItem from "../CheckboxTreeItem/CheckboxTreeItem"
import MealMenu from "../DropMenus/MealMenu/MealMenu"
import RatingMenu from "../DropMenus/RatingMenu/RatingMenu"
import TypeHotelMenu from "../DropMenus/TypeHotelMenu/TypeHotelMenu"
import FieldSearch from "../FieldSearch/FieldSearch"
import AddSelectFilter from "./AddSelectFilter/AddSelectFilter"
import FilterCheckbox from "./FilterCheckbox/FilterCheckbox"
import styles from "./SearchHotel.module.css"
import mealData from "../../data/mealData"
import ratingData from "../../data/ratingData"
import type { SearchHotelFilterInterface, SearchWithFlightFilterInterface } from "../../interfaces/FiltersInterface"
import { useEffect, useState } from "react"

interface SearchHotelProps {
    filtersWithFlight: SearchWithFlightFilterInterface,
    filtersHotel: SearchHotelFilterInterface,
    onFilterChange: React.Dispatch<React.SetStateAction<SearchHotelFilterInterface>>
}

interface ToCity {
    id: number;
    name: string;
    toCountryId: number;
}

export default function SearchHotel({ filtersHotel, filtersWithFlight, onFilterChange }: SearchHotelProps)  {
    const {isActive, toggleDropdown} = useDropdownManager({ initialActiveId: null });

    const [toCities, setToCities] = useState<ToCity[]>([]);

    function handleFilterChange(field: keyof SearchHotelFilterInterface, value: any) {
        onFilterChange(prev => ({
            ...prev,
            [field]: value
        }))
    }

    useEffect(() => {
        fetch("data/toCitiesData.json")
            .then(data => data.json())
            .then((result: ToCity[]) => setToCities(result.filter(c => c.toCountryId == filtersWithFlight.toCityId)));
    }, [filtersWithFlight])

    return (
        <div className={styles.searchHotel}>
            <div className={styles.searchFromColumnFlexBlockFirst}>
                <div className={styles.starsFilter}>
                    <div className={styles.starsSelect}>
                        <p className={styles.starsSelectTitle}>Класс отеля</p>
                        <p className={styles.starsSelectItem}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#ffa300" stroke="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                        </p>
                        <p className={styles.starsSelectItem}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#acacac" stroke="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                        </p>
                        <p className={styles.starsSelectItem}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#acacac" stroke="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                        </p>
                        <p className={styles.starsSelectItem}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#acacac" stroke="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                        </p>
                        <p className={styles.starsSelectItem}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#acacac" stroke="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                        </p>
                    </div>
                </div>
                <div className={styles.resortTreeFilter}>
                    <div className={styles.resortListWrapper}>
                        <div className={styles.checkboxTreeControl}>
                            {toCities.map((e) => (
                                <CheckboxTreeItem key={e.id} hide={true}>{e.name}</CheckboxTreeItem>
                            ))}
                        </div>
                    </div>
                </div>
                {/* <AddSelectFilter placeholder={"Бюджет (РУБ)"}/> */}
            </div>
            <div className={styles.searchFromColumnFlexBlockSecond}>
                <div className={styles.searchingFormFlexBlock}>
                    <AddSelectFilter
                        id={1}
                        placeholder={"Тип отеля"}
                        isActive={isActive(1)}
                        toggleDropdown={toggleDropdown}
                        style={{flex: "130 1 0%", minWidth: "0px"}}>
                        <TypeHotelMenu
                            data={filtersHotel.hotelTypes}
                            setData={val => handleFilterChange("hotelTypes", val)}
                            defaultTypeId={1}/>
                    </AddSelectFilter>
                    <AddSelectFilter 
                        style={{flex: "130 1 0%", minWidth: "90px"}} 
                        placeholder={"Питание"}
                        id={2}
                        isActive={isActive(2)}
                        toggleDropdown={toggleDropdown}>
                        <MealMenu
                            data={mealData}
                            selectedMeal={filtersHotel.selectedMeal}
                            setSelectedMeal={val => handleFilterChange("selectedMeal", val)}/>
                    </AddSelectFilter>
                    <AddSelectFilter 
                        style={{flex: "120 1 0%", minWidth: "90px"}} 
                        placeholder={"Рейтинг"}
                        id={3}
                        isActive={isActive(3)}
                        toggleDropdown={toggleDropdown}>
                        <RatingMenu
                            data={ratingData}
                            selectedRating={filtersHotel.ratingSelected}
                            setSelectedRating={val => handleFilterChange("ratingSelected", val)}/>
                    </AddSelectFilter>
                </div>
                <div className={styles.hotelListFilter}>
                    <div className={styles.hotelListWrapper}>
                        <div className={styles.hotelsControl}>
                            <div className={styles.hotelListWithTabs}>
                                <div className={styles.TabListWithSearch}>
                                    <div className={styles.TabListWithSearchInput}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-search"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                                        <input placeholder="Введите название отеля"/>
                                    </div>
                                </div>
                                <div className={styles.hotelList}>
                                    <div className={styles.checkboxListControl}>
                                        {nameHotelData.map(e => (
                                            <FieldSearch key={e.id}>{e.name}</FieldSearch>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.searchingFormFlexBlock}>
                    <FilterCheckbox 
                        style={{flex: 190, minWidth: "0px"}}
                        title="Только чартер"/>

                    <FilterCheckbox 
                        style={{flex: 190, minWidth: "0px"}}
                        title="Гарантия мест в отеле"/>

                    <div className={styles.searchButton}>Найти туры</div>
                </div>
            </div>
        </div>
    )
}