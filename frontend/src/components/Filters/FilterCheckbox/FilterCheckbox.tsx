import styles from "./FilterCheckbox.module.css"

interface FilterCheckboxProps {
    style?: React.CSSProperties
    title: string
}

export default function FilterCheckbox({ style = {}, title }: FilterCheckboxProps) {
    return (
        <div className={styles.wrapperCheckboxControl} style={style}>
            <div className={styles.checkboxControl}>
                <input type="checkbox"/>
                <div className={styles.checkboxContent}>{title}</div>
            </div>
        </div>
    )
}