import Filter from "../components/Filters/Filter";
import styles from "./HomePage.module.css"
import ListTours from "../components/ListTours/ListTours";


export default function HomePage() {
    return (
        <section className={styles.page}>
            <Filter/>
            <p className={styles.space}></p>
            <p className={styles.informationAlert}>*Обратите внимание! По некоторым странам, не входящим в список направлений массового туризма, стоимость тура указана с учетом перелета регулярным рейсом по минимальному тарифу экономического класса и требует обязательной актуализации цены именно под ваши даты. В связи с этим стоимость туров с перелетом регулярными рейсами не является окончательной.</p>
            <hr />
            <h2 className={styles.lastMinutTours}>Горящие туры</h2>
            <ListTours/>
        </section>
    )
}