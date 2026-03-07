import styles from './HeaderTopPhone.module.css'

export default function HeaderTopPhone()  {
    return (
        <div className={styles.header__topPhone}>
            <div className={styles.topPhone__logo}>
                <img src="images/logo32.png" />
            </div>
            <div className={styles.topPhone__saleonline}>
                <img src="images/saleonline.png" />
            </div>
            <div className={styles.topPhone__contact}>
                <span className={styles.contact__icon}>
                    <img src="images/phone-orange.png" />
                </span>
                <a>+7 (846) 300-45-00</a>
                <a>+7 (800) 600-40-61</a>
            </div>
            <a className={styles.serachToursButton}>ПОИСК ТУРА</a>
        </div>
    )
}