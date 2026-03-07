import styles from "./FieldSearch.module.css"

export default function FieldSearch({ children }: { children: React.ReactNode }) {
    return (
        <div className={styles.TVcheckbox}>
            <input type="checkbox"/>
            {children}
        </div>
    )
}