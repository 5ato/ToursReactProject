import type { CSSProperties } from "react"
import styles from "./FilterMode.module.css"

interface FilterModeProps {
    title: string,
    name: string,
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
    currentValue: string,
    value: string,
    style?: CSSProperties
}

export default function FilterMode({ title, name, handleChange, currentValue, value, style = {} }: FilterModeProps) {
    return (
        <div className={styles.mode} style={style}>
            <input 
                value={value} 
                onChange={handleChange} 
                name={name} 
                checked={currentValue === value}
                type="radio"/>
            <p>{title}</p>
        </div>
    )
}