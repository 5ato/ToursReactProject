import { Link } from "react-router-dom"
import styles from "./CardHotTour.module.css"

export default function CardHotTour() {
    return (
        <div className={styles.hotToursItem}>
            <div className={styles.hotToursItem__image}>
                <Link to={"/detail"}><img src="https://static.tourvisor.ru/hotel_pics/main400/381.jpg" /></Link>
            </div>
            <div className={styles.hotToursItem__rating}>
                <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="#ffa300" stroke="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className={styles.feather + " " + styles.feather__star}><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="#ffa300" stroke="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className={styles.feather + " " + styles.feather__star}><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="#ffa300" stroke="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className={styles.feather + " " + styles.feather__star}><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="#ffa300" stroke="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className={styles.feather + " " + styles.feather__star}><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="#ffa300" stroke="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className={styles.feather + " " + styles.feather__star}><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
            </div>
            <h4 className={styles.hotToursItem__Name}>
                <Link to={"/detail"}>Rehana Royal Beach Resort Aqua Park & Spa 5*</Link>
            </h4>
            <p className={styles.hotToursItem__cityCountry}>Шарм-Эль-Шейх, Египет</p>
            <p className={styles.hotToursItem__night}>26 фев, 6 ночей</p>
            <p className={styles.hotToursItem__russiaCity}>из Самары</p>
            <div className={styles.hotToursItem__price}>
                <div className={styles.hotTourInfoOldPrice}>
                    <div className={styles.hotTourInfoOldPriceValue}>90 187</div>
                    <div className={styles.hotTourInfoOldPriceCurrency}>РУБ</div>
                </div>
                <div className={styles.hotTourInfoPriceBlock}>
                    <div className={styles.hotTourInfoNewPrice}>
                        <div className={styles.hotTourInfoNewPriceValue}>63 217</div>
                        <div className={styles.hotTourInfoNewPriceCurrency}>РУБ</div>
                    </div>
                    <div className={styles.hotTourInfoPriceIcon}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className={styles.feather + " " + styles.feather__sun}><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
                    </div>
                </div>
            </div>
        </div>
    )
}