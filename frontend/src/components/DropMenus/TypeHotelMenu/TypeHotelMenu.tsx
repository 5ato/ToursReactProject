import { useState } from "react"
import styles from "./TypeHotelMenu.module.css"

interface TypeHotel {
    id: number,
    name: string,
    checked: boolean
}

interface TypeHotelMenyProps {
    data: TypeHotel[],
    setData: (type: TypeHotel[]) => void
    defaultTypeId: number
}

export default function TypeHotelMenu({ data, setData, defaultTypeId }: TypeHotelMenyProps) {

    function handleChange(id: number) {
        if (id === defaultTypeId && !data.find(item => item.id === defaultTypeId)?.checked)
            setData(data.map(item => 
                item.id === defaultTypeId ? {...item, checked: !item.checked} : {...item, checked: false}
            ))
        else
        {
            data.find(item => item.id === defaultTypeId)!.checked = false;
            setData(data.map(item => 
                item.id === id ? {...item, checked: !item.checked } : item
            ))
        }
    }

    return (
        <div onClick={(e) => e.stopPropagation()} className={styles.typeHotelMenuWrapper}>
            <div className={styles.CheckboxListSelectTooltipContent}>
                <div className={styles.CheckboxListSelectTooltipTitle}>Тип отеля / тура</div>
                <div className={styles.CheckboxListControl}>
                    {data.map(e => (
                        <div key={e.id} className={styles.Checkbox}>
                            <input 
                                checked={e.checked}
                                onChange={() => handleChange(e.id)} 
                                type="checkbox"/>
                            {e.name}
                        </div>
                    ))}
                </div>
            </div>
            <div className={styles.CheckboxListSelectTooltipSubmit}>
                <button className={styles.ButtonControl}>Выбрать</button>
            </div>
        </div>
    )
}