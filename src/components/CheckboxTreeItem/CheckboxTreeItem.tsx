import styles from "./CheckboxTreeItem.module.css"

interface CheckboxTreeItemProps {
    title: string;
    currentId: number;
    checked: boolean;
    handleOnChange: (id: number) => void
}


export default function CheckboxTreeItem({ title, currentId, checked, handleOnChange }: CheckboxTreeItemProps) {
    
    return (
        <div className={styles.checkboxTreeItem}>
            <div className={styles.checkboxTreeItemRootWrapper}>
                <div className={styles.checkboxTreeItemRoot}>
                    <input checked={checked} onChange={() => handleOnChange(currentId)} type="checkbox"/>
                    {title}
                </div>
            </div>
        </div>
    )
}