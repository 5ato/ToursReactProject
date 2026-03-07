import FilterContainer from "../../containers/FilterContainer"
import styles from "./Filter.module.css"

export default function Filter() {
    return (
        <article id="page-content" className={styles.page__content}>
            <h1 className={styles.page__content__title}>Поиск туров</h1>
            <FilterContainer/>
        </article>
    )
}