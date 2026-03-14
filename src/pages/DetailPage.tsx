import { data, useParams } from "react-router-dom"
import styles from "./DetailPage.module.css"
import type Tour from "../interfaces/TourInterface"
import { useEffect, useState } from "react"
import type Hotel from "../interfaces/HotelInterface"
import type FromCity from "../interfaces/FromCityInterface"


export default function DetailPage() {
    const { id } = useParams()

    const [tour, setTour] = useState<Tour>();
    const [hotel, setHotel] = useState<Hotel>();
    const [fromCity, setFromCity] = useState<FromCity>();

    useEffect(() => {
        fetch("/data/toursData.json")
            .then(data => data.json())
            .then((result: Tour[]) => {
                let t = result.find(t => t.id === Number(id))
                t!.departureDate = new Date(t!.departureDate);
                t!.backDepartureDate = new Date(t!.backDepartureDate);
                console.log(t)
                setTour(t)
            })
    }, [])

    useEffect(() => {
        fetch("/data/hotelsData.json")
            .then(data => data.json())
            .then((result: Hotel[]) => setHotel(result.find(h => h.id === tour?.hotelId)))

        fetch("/data/fromCitiesData.json")
            .then(data => data.json())
            .then((result: FromCity[]) => setFromCity(result.find(f => f.id === tour?.fromCityId)))
    }, [tour])

    return (
        <div className={styles.mainContentTour}>
            <div className={styles.cardInfoBlock}>
                <div className={styles.cardInfoTitle}>
                    <div className="hotToursItem__rating">
                        {new Array(hotel?.stars).fill(0).map(_ => (
                            <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="#ffa300" stroke="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className={styles.feather + " " + styles.feather__star}><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                        ))}
                    </div>
                    <h2 className={styles.cardInfoTitle__Title}>{hotel?.name}</h2>
                    <div className={styles.cardInfoTitile__CityCountry}>{hotel?.countryName}, {hotel?.cityName}</div>
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
                                        <div className="Option__Right__To">{hotel?.countryName}</div>
                                        <div className="Option__Right__From">Откуда: {fromCity?.name}</div>
                                    </div>
                                </div>
                                <div className={styles.cardInfoOption__Right__DateNight + " " + styles.InfoOption}>
                                    <div className={styles.DateNight__Icon + " " + styles.Icon}>
                                        <img src="/images/calendar.png"/>
                                    </div>
                                    <div className={styles.DateNight__Info + " " + styles.Info}>
                                        <div className={styles.Option__Right__Date}>{tour?.departureDate.toLocaleDateString("ru-RU")}</div>
                                        <div className={styles.Option__Right__Night}>{tour?.nightCount} ночей</div>
                                    </div>
                                </div>
                                <div className={styles.cardInfoOption__Right__Nutrition + " " + styles.InfoOption}>
                                    <div className={styles.Nutrition__Icon + " " + styles.Icon}>
                                        <img src="/images/food.png"/>
                                    </div>
                                    <div className={styles.Nutrition__Info + " " + styles.Info}>
                                        <div className={styles.Option__Right__Title}>Питание</div>
                                        <div className={styles.Option__Right__Nutrition}>{hotel?.nutritions}</div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.cardInfoOption__Left}>
                                <div className={styles.cardInfoOption__Left__Tourists + " " + styles.InfoOption}>
                                    <div className={styles.Tourists__Icon + " " + styles.Icon}>
                                        <img src="/images/bed.png"/>
                                    </div>
                                    <div className={styles.Tourists__Info + " " + styles.Info}>
                                        <div className={styles.Option__Left__Tourists}>{tour?.adultCount} взр. {tour?.childrenCount} дет.</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.cardInfoRightBlock}>
                        <div className={styles.cardActionControl}>
                            <div className={styles.cardActionPrice}>
                                <div className={styles.actionPrice__Value}>
                                    {tour?.newPrice}
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
                    <p className={styles.cardBody__Description}>{hotel?.description}</p>
                    <div className={styles.cardBody__Gallery}>
                        <div className={styles.Gallery__LeftBLock}>
                            <img src={hotel?.imageUrls[0]}/>
                        </div>
                        <div className={styles.Gallery__RightBLock}>
                            {hotel?.imageUrls.map(img => (
                                <div className={styles.wrapperImages}>
                                    <img src={img} />
                                </div>
                            ))}
                        </div>
                    </div>
                    <hr />
                    <div className={styles.cardBody__DetailDescription}>
                        <div className={styles.DetailDesscription__GeneralInfo}>
                            <div className={styles.GeneralInfo + " " + styles.GeneralInfo__RoomDescription}>
                                {hotel?.descriptionRoom}
                            </div>
                            <div className={styles.GeneralInfo + " " + styles.GeneralInfo__FoundedYear}>
                                <span>Основан: </span>
                                {hotel?.founded}
                            </div>
                            <div className={styles.GeneralInfo + " " + styles.GeneralInfo__LocationDescription}>
                                <span>Расположен: </span>
                                {hotel?.descriptionPlace}
                            </div>
                            <div className={styles.GeneralInfo + " " + styles.GeneralInfo__AddressDescription}>
                                <span>Адрес: </span>
                                {hotel?.address}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}