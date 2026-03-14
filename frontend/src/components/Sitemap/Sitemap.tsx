import styles from "./Sitemap.module.css"
import SitemapRowColumn from "./SitemapRowColumn"

export default function Sitemap() {
    return (
        <nav className={styles.sitemap}>
            <div className={styles.sitemap__row}>
                <SitemapRowColumn title="Самарская область">
                    <li><a>Акции! Скидки!</a></li>
                    <li><a>Турбазы</a></li>
                    <li><a>Санатории</a></li>
                    <li><a>Гостиницы</a></li>
                    <li><a>Экскурсии</a></li>
                    <li><a>Для школьников</a></li>
                    <li><a>Транспорт</a></li>
                    <li><a>ТК Шираево</a></li>
                    <li><a>Активный отдых</a></li>
                    <li><a>Речные круизы</a></li>
                    <li><a>Детские лагеря</a></li>
                    <li><a>Горнолыжные туры</a></li>
                    <li><a>Волжская «Ривьера»</a></li>
                </SitemapRowColumn>
                <SitemapRowColumn title="Россия">
                    <li><a>Турбазы</a></li>
                    <li><a>Гостиницы</a></li>
                    <li><a>Санатории</a></li>
                    <li><a>Золотое кольцо</a></li>
                    <li><a>Речные круизы</a></li>
                    <li><a>Санкт-Петербург</a></li>
                    <li><a>Горнолыжные туры</a></li>
                    <li><a>Событийные туры</a></li>
                    <li><a>Отдых на море</a></li>
                    <li><a>Детский отдых</a></li>
                    <li><a>Активный отдых</a></li>
                    <li><a>Туры выходного дня</a></li>
                    <li><a>Новогодние туры</a></li>
                    <li><a>Путешествие на турпоезде</a></li>
                    <li><a>Автобусные туры</a></li>
                </SitemapRowColumn>
                <SitemapRowColumn title="Международные туры">
                    <li><a>Абхазия</a></li>
                    <li><a>Вьетнам</a></li>
                    <li><a>Египет</a></li>
                    <li><a>Китай</a></li>
                    <li><a>Куба</a></li>
                    <li><a>Мальдивы</a></li>
                    <li><a>ОАЭ</a></li>
                    <li><a>Таиланд</a></li>
                    <li><a>Тунис</a></li>
                    <li><a>Турция</a></li>
                    <li><a>Шри-Ланка</a></li>
                </SitemapRowColumn>
                <SitemapRowColumn title="Виды отдыха">
                    <li><a>Новогодние туры 2026</a></li>
                    <li><a>Автобусные туры</a></li>
                    <li><a>Активный отдых</a></li>
                    <li><a>Гастрономические туры</a></li>
                    <li><a>Горнолыжные туры</a></li>
                    <li><a>Гостиницы</a></li>
                    <li><a>Детский отдых</a></li>
                    <li><a>Речные круизы</a></li>
                    <li><a>Лечение</a></li>
                    <li><a>Обучение за рубежом</a></li>
                    <li><a>Отдых на море</a></li>
                    <li><a>Морские круизы</a></li>
                    <li><a>Путешествие на турпоезде</a></li>
                    <li><a>Свадебные туры</a></li>
                    <li><a>Сити-туры</a></li>
                    <li><a>Событийные туры</a></li>
                    <li><a>Турбазы</a></li>
                    <li><a>Туры выходного дня</a></li>
                    <li><a>Туры для школьников</a></li>
                    <li><a>Экскурсии</a></li>
                    <li><a>Экскурсионные туры</a></li>
                    <li><a>Экспедиционные круизы</a></li>
                    <li><a>Клиники</a></li>
                    <li><a>Карточные туры</a></li>
                </SitemapRowColumn>
                <SitemapRowColumn title="Услуги">
                    <li><a>Бронирование отелей</a></li>
                    <li><a>Трансфер</a></li>
                    <li><a>Оформление виз</a></li>
                    <li><a>Страхование</a></li>
                    <li><a>Бизнес-залы в а/порту</a></li>
                    <li><a>Подарочный сертификат</a></li>
                </SitemapRowColumn>
                <SitemapRowColumn title="Событийные туры">
                    <li><a>Событийные туры в РФ</a></li>
                    <li><a>Туры на концерты, чемпионаты</a></li>
                </SitemapRowColumn>
            </div>
        </nav>
    )
}