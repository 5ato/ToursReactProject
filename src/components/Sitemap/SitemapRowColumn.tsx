import styles from "./SitemapRowColumn.module.css"


export default function SitemapRowColumn({ title, children }: { title: string, children: React.ReactNode }) {
    return (
        <div className={styles.sitemap__row__column}>
            <h3>{title}</h3>
            <ul>
                {children}
            </ul>
        </div>
    )
}