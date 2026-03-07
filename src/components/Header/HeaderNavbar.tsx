import styles from './HeaderNavbar.module.css'

export default function HeaderNavbar() {
    return (
        <nav className={styles.header__navbar}>
            <div className={styles.nav}>
                <a className={styles.nav__item}>Международные туры</a>
                <a className={styles.nav__item}>Туры по России</a>
                <a className={styles.nav__item}>Самара</a>
                <a className={styles.nav__item}>Туры в рассрочку</a>
            </div>
            <div className={styles.nav__premium}>
                <span className={styles.star}>★</span>
                <a className={styles.whereBuy}>Где купить</a>
            </div>
        </nav>
    )

}