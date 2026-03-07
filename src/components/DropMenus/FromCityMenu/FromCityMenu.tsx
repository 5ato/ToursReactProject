import { useState } from "react"
import styles from "./FromCityMenu.module.css"
import departureData from "../../../data/departureData"

export default function FromCityMenu({ onClickCity }: { onClickCity: (value: string) => void}) {
    const [activeNationalControl, setActiveNationalControl] = useState<number>(1)

    return (
        <div style={departureData.find(v => v.id === activeNationalControl)!.widthContainer} className={styles.fromCityMenu}>
            <div className={styles.departureTableHeader}>
                <div className={styles.departureTableNoFlight} onClick={() => 1}>
                    Без перелётов
                </div>
                {departureData.map(control => (
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
                <div className={styles.departureTableContent} style={departureData.find(v => v.id === activeNationalControl)!.heightTable}>
                    {departureData.find(v => v.id === activeNationalControl)!.cities.map(city => (
                        <div key={city.id} className={styles.departureTableItemWrapper}>
                            <div className={styles.departureTableItemChar}>
                                
                            </div>
                            <div onClick={() => onClickCity(city.name)} className={styles.departureTableItemControl}>
                                {city.name}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}