import { useEffect, useState } from "react"
import styles from "./FromCityMenu.module.css"

interface DepartureData {
    id: number,
    name: string
}

interface City {
    id: number,
    name: string,
    fromCountryId: number
}

export default function FromCityMenu({ onClickCity }: { onClickCity: (value: string, id: number) => void}) {
    const [activeNationalControl, setActiveNationalControl] = useState<number>(1)

    let [fromCountriesData, setCountriesData] = useState<DepartureData[]>([]);
    let [fromCitiesData, setCitiesData] = useState<City[]>([]);

    useEffect(() => {
        fetch("data/fromCountriesData.json")
            .then(data => data.json())
            .then(result => setCountriesData(result));
        
        fetch("data/fromCitiesData.json")
            .then(data => data.json())
            .then(result => setCitiesData(result));
    }, []);


    return (
        <div className={styles.fromCityMenu}>
            <div className={styles.departureTableHeader}>
                <div className={styles.departureTableNoFlight} onClick={() => 1}>
                    Без перелётов
                </div>
                {fromCountriesData?.map(control => (
                    <div 
                        key={control.id} 
                        className={`${activeNationalControl === control.id ? styles.active : ''} ${styles.departureTableNationControl}`}
                        onClick={(e) => { e.stopPropagation(); setActiveNationalControl(control.id); }}
                    >
                        {control.name}
                    </div>
                ))}
            </div>
            <div className={styles.departureTableBody}>
                <div className={styles.departureTableContent}>
                    {fromCitiesData.filter(v => v.fromCountryId === activeNationalControl)?.map(city => (
                        <div key={city.id} className={styles.departureTableItemWrapper}>
                            <div className={styles.departureTableItemChar}>
                                
                            </div>
                            <div onClick={() => onClickCity(city.name, city.id)} className={styles.departureTableItemControl}>
                                {city.name}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}