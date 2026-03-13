import styles from "./FieldSearch.module.css"

interface FieldSearchProps {
    title: string;
    checked: boolean;
    onChange: () => void
}

export default function FieldSearch({ title, checked, onChange }: FieldSearchProps) {
    return (
        <div className={styles.TVcheckbox}>
            <input 
                checked={checked}
                onChange={onChange}
                type="checkbox"/>
            {title}
        </div>
    )
}