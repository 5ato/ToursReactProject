import { useCallback } from "react";
import styles from "./CheckboxGroup.module.css"

interface CheckboxGroupProps<T extends { id: number}> {
    options: T[];
    selected: number[];
    onChange: (selected: number[]) => void;
}

export default function CheckboxGroup({ options, selected, onChange }: CheckboxGroupProps<any>) {
    const toggle = useCallback(
        (id: number) => {
            onChange(
                selected.includes(id)
                ? selected.filter(v => v !== id)
                : [...selected, id]
            )
        }, [selected, onChange]
    )

    return (
        <>
            {options.map((e) => (
                <div className={styles.checkboxTreeItem}>
                    <div className={styles.checkboxTreeItemRootWrapper}>
                        <div className={styles.checkboxTreeItemRoot}>
                            <input 
                                checked={selected.includes(e.id)} 
                                onChange={() => toggle(e.id)} 
                                type="checkbox"
                                value={e.id}/>
                            {e.name}
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}