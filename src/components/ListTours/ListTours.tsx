import CardHotTour from "../CardHotTour/CardHotTour"
import styles from "./ListTours.module.css"

export default function ListTours() {
    return (
        <section className={styles.hotToursList}>
            <CardHotTour/>
        </section>
    )
}