import { useState } from "react"
import DropFilter from "./DropFilter/DropFilter"
import FilterMode from "./FilterMode/FilterMode"
import styles from "./SearchWithFlight.module.css"
import useDropdownManager from "../../hooks/useDropdownManager"
import FromCityMenu from "../DropMenus/FromCityMenu/FromCityMenu"
import ToCityMenu from "../DropMenus/ToCityMenu/ToCityMenu"
import DateFlightMenu from "../DropMenus/DateFlightMenu/DateFlightMenu"
import NightsMenu from "../DropMenus/NightMenu/NightMenu"
import TouristsMenu from "../DropMenus/TouristsMenu/TouristsMenu"
import type { SearchWithFlightFilterInterface } from "../../interfaces/FiltersInterface"

interface SearchWithFlightProps {
    filters: SearchWithFlightFilterInterface;
    onFilterChange: React.Dispatch<React.SetStateAction<SearchWithFlightFilterInterface>>;
}

export default function SearchWithFlight({ filters, onFilterChange }: SearchWithFlightProps)  {
    const [selectedOption, setSelectedOption] = useState<string>("Горящие")

    function handleFilterChange(field: keyof SearchWithFlightFilterInterface, value: any) {
        onFilterChange(prev => ({
            ...prev,
            [field]: value
        }))
    }

    const { toggleDropdown, isActive } = useDropdownManager({ initialActiveId: null })

    function formatTourist(adults: number, children: number) {
        let stringAdult = ""
        let stringChildren = ""
        if (children === 0) {
            if (adults === 1)
                stringAdult = `${adults} взрослый`
            else
                stringAdult = `${adults} взрослых`
        } else {
            stringAdult = `${adults} взр`
            stringChildren = `${children} реб`
        }
        return `${stringAdult} ${stringChildren}`
    }

    const today = new Date();

    function handleSelectedOption(e: React.ChangeEvent<HTMLInputElement>) {
        setSelectedOption(e.target.value)
    }
    return (
        <div className={styles.serachWithFlight}>
            <div className={styles.search__mode}>
                <FilterMode 
                    handleChange={handleSelectedOption} 
                    currentValue={selectedOption}
                    value={"Туры с перелётом"}
                    name={"choice"} 
                    title={"Туры с перелётом"}/>
                <FilterMode 
                    handleChange={handleSelectedOption} 
                    currentValue={selectedOption}
                    value={"Отели"}
                    name={"choice"} 
                    title={"Отели"}/>
                <FilterMode 
                    handleChange={handleSelectedOption}
                    currentValue={selectedOption}
                    value={"Горящие"} 
                    name={"choice"} 
                    title={"Горящие"}/>
            </div>
            <div className={styles.serachWithFlight__listFilter}>
                <DropFilter
                    key={1}
                    id={1}
                    idTitle={"fromCity"}
                    idValue={"fromCityValue"}
                    value={filters.fromCityValue}
                    title={"ГОРОДА ВЫЛЕТА"}
                    icon={"✈"}
                    isActive={isActive(1)}
                    style={{
                        flex: 200,
                        minWidth: "140px",
                        position: "relative",
                    }}
                    toggleDropdown={toggleDropdown}
                >
                    <FromCityMenu
                        onClickCity={(val, id) => {handleFilterChange("fromCityValue", val); handleFilterChange("fromCityId", id)}}/>
                </DropFilter>
                <DropFilter
                    key={2}
                    id={2}
                    idTitle={"toCity"}
                    idValue={"toCityValue"}
                    value={filters.toCityValue}
                    title={"СТРАНЫ"}
                    icon={"📍"}
                    isActive={isActive(2)}
                    style={{
                        flex: 180,
                        minWidth: 0,
                        position: "relative"
                    }}
                    toggleDropdown={toggleDropdown}
                >
                    <ToCityMenu
                        onSelectCountry={(val, id) => {handleFilterChange("toCityValue", val); handleFilterChange("toCityId", id)}}
                        fromCityId={filters.fromCityId}/>
                </DropFilter>
                <DropFilter
                    key={3}
                    id={3}
                    idTitle={"dateFlight"}
                    idValue={"dateFlight"}
                    value={`${filters.startDateFlight} - ${filters.endDateFlight}`}
                    title={"ДАТА ВЫЛЕТА"}
                    icon={"📅"}
                    isActive={isActive(3)}
                    style={{
                        flex: 170,
                        minWidth: "155px",
                        position: "relative"
                    }}
                    toggleDropdown={toggleDropdown}
                >
                    <DateFlightMenu
                        today={today}
                        onChangeStartDate={val => handleFilterChange('startDateFlight', val)}
                        onChangeEndDate={val => handleFilterChange("endDateFlight", val)}/>

                </DropFilter>
                <DropFilter
                    key={4}
                    id={4}
                    idTitle={"night"}
                    idValue={"nightsValue"}
                    value={`${filters.startNight} - ${filters.endNight}`}
                    title={"НОЧЕЙ"}
                    icon={"🕐"}
                    isActive={isActive(4)}
                    style={{
                        flex: 100,
                        minWidth: "100px",
                        position: "relative"
                    }}
                    toggleDropdown={toggleDropdown}
                >
                    <NightsMenu
                        defaultStartNight={filters.startNight}
                        defaultEndNight={filters.endNight}
                        onChangeStartNight={val => handleFilterChange("startNight", val)}
                        onChangeEndNight={val => handleFilterChange("endNight", val)}/>
                </DropFilter>
                <DropFilter
                    key={5}
                    id={5}
                    idTitle={"tourists"}
                    idValue={"touristsValue"}
                    value={formatTourist(filters.adults, filters.children.length)}
                    title={"ТУРИСТЫ"}
                    icon={"👤"}
                    isActive={isActive(5)}
                    style={{
                        flex: 180,
                        minWidth: 0,
                        position: "relative"
                    }}
                    toggleDropdown={toggleDropdown}
                >
                    <TouristsMenu
                        countAdults={filters.adults}
                        children={filters.children}
                        onChangeAdults={val => handleFilterChange("adults", val)}
                        setChildren={val => handleFilterChange("children", val)}/>
                </DropFilter>
            </div>
        </div>
    )
}