import styles from "./Footer.module.css"

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <section className={styles.mainFooter}>
                <div className={styles.mainFooter__row}>
                    <div className={styles.mainFooter__row__column + " " + styles.aboutCompany}>
                        <h3>О компании</h3>
                        <p>Самараинтур является одним из лидеров на самарском туристическом рынке. Мы предлагаем нашим клиентам и партнерам качественный туристический продукт — путешествия по России и всему миру. Качество и надежность мы можем гарантировать, поскольку имеем за плечами более чем 30-летний опыт работы, прямые долгосрочные и отработанные контакты с ведущими международными и российскими туроператорами и перевозчиками, а также непосредственно с отелями. Ну, и, конечно, высокопрофессиональный коллектив.</p>
                    </div>
                    <div className={styles.mainFooter__row__column + " " + styles.reviewsClients}>
                        <h3>Отзывы клиентов</h3>
                        <article className={styles.boxTestimonial}>
                            <blockquote>
                                <a>
                                    Уже около 9 лет подряд бронируем отдых в данном турагентстве и себе и родителям. Нареканий никаких ни разу не было,
                                    Замечательная девушка - Кристина всегда нам помогает. с Кристиной все четко, оперативно, так, как и просили. Настоящий профессионал своего дела. Очень рекомендую!
                                </a>
                            </blockquote>
                            <p className={styles.clientIcon}>Ирина Д.</p>
                            <div className={styles.allReviews}>
                                <a href="/recall">Все отзывы</a> &nbsp; | &nbsp; <a href="/recall-form">Добавить отзыв</a>
                            </div>
                        </article>
                    </div>
                    <div className={styles.mainFooter__row__column + " " + styles.news}>
                        <h3>Новости</h3>
                        <ul>
                            <li><a href="/21430">Большой Египетский музей открыт - 13 лет ожидания позади</a></li>
                            <li><a href="/21429">Китай вводит онлайн-карты прибытия для туристов</a></li>
                            <li><a href="/21428">Россияне смогут заселяться в отели по правам или загранпаспорту</a></li>
                            <li><a href="/21427">Рифы под защитой в Таиланде</a></li>
                        </ul>
                        <p>
                            <a href="/news">Все новости</a>
                        </p>
                    </div>
                    <div className={styles.mainFooter__row__column + " " + styles.contacts}>
                        <h3>Контакты</h3>
                        <a href="tel:+78463004500" className={styles.phone}>+7 (846) 300-45-00</a>
                        <a href="tel:88006004061" className={styles.phone}>+7 (800) 600-40-61</a>
                        <address>
                            <p>
                                443020, РФ, Самарская обл., г. Самара,<br/>
                                ул. Самарская, д.51 - центральный офис<br/>
                                <a href="mailto:order@samaraintour.ru">✉ order@samaraintour.ru</a>
                            </p>
                            <div><a href="/wherebuy">Наши офисы</a></div>
                        </address>
                        <ul className={styles.socialNetworks}>
                            <li>
                                <a href="http://vk.com/club32955592" className={styles.tips} title="Группа Самараинтур ВКонтакте">
                                    <img src="images/vk.png"/>
                                </a>
                            </li>
                            <li>
                                <a href="http://t.me/samaraintour" className={styles.tips} title="Самараинтур в Telegram">
                                    <img src="images/telegram.png" />
                                </a>
                            </li>
                            <li>
                                <a href="https://invite.viber.com/?g2=AQBs8R27yK6Pr0mIHC2p12tzikcTfb0hqmaDg6hY%2FCvil30jnLGKvnntWPuVH96y" className={styles.tips} title="Самараинтур в Viber">
                                    <img src="images/viber.png" />
                                </a>
                            </li>
                        </ul>
                        <div>
                            <a href="https://samaraintour.ru/chatbot" title="Удобный чат-бот для подбора туров"><img src="images/chatbot2.png" alt="Удобный чат-бот для подбора туров"/></a>
                        </div>
                    </div>
                </div>
            </section>
            <section className={styles.footerRights}></section>
        </footer>
    )
}