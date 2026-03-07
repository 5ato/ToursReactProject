import styles from "./DetailPage.module.css"


export default function DetailPage() {
    return (
        <div className={styles.mainContentTour}>
            <div className={styles.cardInfoBlock}>
                <div className={styles.cardInfoTitle}>
                    <div className="hotToursItem__rating">
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="#fff" stroke="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className={styles.feather + " " + styles.feather__star}><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="#fff" stroke="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className={styles.feather + " " + styles.feather__star}><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="#fff" stroke="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className={styles.feather + " " + styles.feather__star}><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="#fff" stroke="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className={styles.feather + " " + styles.feather__star}><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="#fff" stroke="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className={styles.feather + " " + styles.feather__star}><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                    </div>
                    <h2 className={styles.cardInfoTitle__Title}>Rehana Royal Beach Resort Aqua Park & Spa 5*</h2>
                    <div className={styles.cardInfoTitile__CityCountry}>Египет, Шарм-Эль-Шейх</div>
                </div>
                <div className={styles.cardInfoContent}>
                    <div className={styles.cardInfoLeftBlock}>
                        <div className={styles.cardInfoOptions}>
                            <div className={styles.cardInfoOption__Right}>
                                <div className={styles.cardInfoOption__Right__FromTo + " " + styles.InfoOption}>
                                    <div className={styles.FromTo__Icon + " " + styles.Icon}>
                                        <img src="/images/gps.png"/>
                                    </div>
                                    <div className="FromTo__Info Info">
                                        <div className="Option__Right__To">Египет</div>
                                        <div className="Option__Right__From">Откуда: Самара</div>
                                    </div>
                                </div>
                                <div className={styles.cardInfoOption__Right__DateNight + " " + styles.InfoOption}>
                                    <div className={styles.DateNight__Icon + " " + styles.Icon}>
                                        <img src="/images/calendar.png"/>
                                    </div>
                                    <div className={styles.DateNight__Info + " " + styles.Info}>
                                        <div className={styles.Option__Right__Date}>22 февраля</div>
                                        <div className={styles.Option__Right__Night}>6 ночей</div>
                                    </div>
                                </div>
                                <div className={styles.cardInfoOption__Right__Nutrition + " " + styles.InfoOption}>
                                    <div className={styles.Nutrition__Icon + " " + styles.Icon}>
                                        <img src="/images/food.png"/>
                                    </div>
                                    <div className={styles.Nutrition__Info + " " + styles.Info}>
                                        <div className={styles.Option__Right__Title}>Питание</div>
                                        <div className={styles.Option__Right__Nutrition}>AI - Все Включено</div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.cardInfoOption__Left}>
                                <div className={styles.cardInfoOption__Left__Tourists + " " + styles.InfoOption}>
                                    <div className={styles.Tourists__Icon + " " + styles.Icon}>
                                        <img src="/images/bed.png"/>
                                    </div>
                                    <div className={styles.Tourists__Info + " " + styles.Info}>
                                        <div className={styles.Option__Left__Tourists}>2 взр. 0 дет.</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.cardInfoRightBlock}>
                        <div className={styles.cardActionControl}>
                            <div className={styles.cardActionPrice}>
                                <div className={styles.actionPrice__Value}>
                                    38 035
                                </div>
                                <div className={styles.actionPrice__PerRoom}>
                                    РУБ
                                    <br/>
                                    ЗА НОМЕР
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.cardDetailBlock}>
                <div className={styles.cardBody}>
                    <p className={styles.cardBody__Description}>Семейный отель в красивом уголке побережья, оформленный в традиционном арабском стиле. Просторные номера, выбор детского и спортивного досуга, различные водные горки для всех возрастов.</p>
                    <div className={styles.cardBody__Gallery}>
                        <div className={styles.Gallery__LeftBLock}>
                            <img src="/images/HotelPic/1.png"/>
                        </div>
                        <div className={styles.Gallery__RightBLock}>
                            <div className={styles.wrapperImages}>
                                <img src="/images/HotelPic/1.png" />
                            </div>
                            <div className={styles.wrapperImages}>
                                <img src="/images/HotelPic/2.png" />
                            </div>
                            <div className={styles.wrapperImages}>
                                <img src="/images/HotelPic/3.png" />
                            </div>
                            <div className={styles.wrapperImages}>
                                <img src="/images/HotelPic/4.png" />
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className={styles.cardBody__DetailDescription}>
                        <div className={styles.DetailDesscription__GeneralInfo}>
                            <div className={styles.GeneralInfo + " " + styles.GeneralInfo__RoomDescription}>
                                Количество корпусов — 6. Количество номеров — 682.
                            </div>
                            <div className={styles.GeneralInfo + " " + styles.GeneralInfo__FoundedYear}>
                                <span>Основан: </span>
                                2008
                            </div>
                            <div className={styles.GeneralInfo + " " + styles.GeneralInfo__LocationDescription}>
                                <span>Расположен: </span>
                                в 7 км от аэропорта Шарм-эль-Шейха, в 18 км от Naama Bay и в 25 км от Старого города, в районе Nabq Bay, на берегу моря
                            </div>
                            <div className={styles.GeneralInfo + " " + styles.GeneralInfo__AddressDescription}>
                                <span>Адрес: </span>
                                7th Km North Sharm Airport, Набк-Бэй, Шарм-эль-Шейх 46617 Египет
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}