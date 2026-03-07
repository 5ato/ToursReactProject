import styles from './UpperHeader.module.css'


export default function UpperHeader() {
    return (
        <div className={styles.header__otherLinks}>
            <div className={styles.otherLinks__other}>
                <a>Агентствам</a>
                <a>Корпоративным клиентам</a>
                <a>Туристам</a>
                <a>Вопрос-ответ</a>
                <a>Блог</a>
                <a>Новости</a>
            </div>
            <div className={styles.otherLinks__about}>
                <a>О КОМПАНИИ</a>
            </div>
        </div>
    )
}