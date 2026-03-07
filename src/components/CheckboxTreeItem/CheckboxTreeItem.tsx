import styles from "./CheckboxTreeItem.module.css"

export default function CheckboxTreeItem({ children, hide = false }: { children: React.ReactNode, hide?: Boolean }) {
    return (
        <div className={styles.checkboxTreeItem}>
            <div className={styles.checkboxTreeItemRootWrapper}>
                <div className={styles.checkboxTreeItemRoot}>
                    <input type="checkbox"/>
                    {children}
                </div>
                <div className={styles.checkboxTreeItemArow + " " + (hide ? styles.hide : "")}></div>
            </div>
        </div>
    )
}