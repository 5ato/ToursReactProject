import type React from "react"
import styles from "./AddSelectFilter.module.css"

interface AddSelectFilterProps {
    id: number
    placeholder: string
    isActive: boolean
    toggleDropdown: (id: number) => void
    children: React.ReactNode
    style?: React.CSSProperties
}

export default function AddSelectFilter({ id, placeholder, isActive, toggleDropdown, children, style = {} }: AddSelectFilterProps) {
    return (
        <div className={styles.wrapperAddSelect} style={style} onClick={() => toggleDropdown(id)}>
            <div className={styles.addSelect}>
                <div className={styles.addSelectContentBlock}>
                    <div className={styles.addSelectPlaceholder}>{placeholder}</div>
                </div>
                <div className={styles.addSelectArrow}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg>
                </div>
            </div>
            {isActive && 
                <div className={styles.dropMenuWrapper}>{children}</div>
            }
        </div>
    )
}