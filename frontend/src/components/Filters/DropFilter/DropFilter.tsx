import styles from "./DropFilter.module.css"

interface DropFilterProps {
    id: number,
    idTitle: string,
    idValue: string,
    title: string,
    value: string,
    icon: string,
    children: React.ReactNode,
    isActive: boolean,
    toggleDropdown: (id: number) => void,
    style?: React.CSSProperties
}

export default function DropFilter({ id, idTitle, idValue, value, title, icon, children, isActive, toggleDropdown, style = {}}: DropFilterProps) {
    return (
        <div id={idTitle} className={`${styles.filter} ${isActive ? styles.active : ''}`} style={style} onClick={() => toggleDropdown(id)}>
            <p className={styles.filter__type}>
                <span>{icon}</span>
                {title}
            </p>
            <p id={idValue} className={styles.filter__value}>{value}</p>
            {isActive && 
                <div className={styles.dropMenuWrapper}>{children}</div>
            }
        </div>
    )
}