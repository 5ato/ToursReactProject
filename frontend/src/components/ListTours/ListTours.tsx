import styles from "./ListTours.module.css"
import { Link } from "react-router-dom";
import type ResultSearch from "../../interfaces/ResultSearchInterface";

export default function ListTours({ resultSearch }: {resultSearch: ResultSearch[]}) {
    return (
        <div className={styles.resultContentWrapper}>
            <div className={styles.resultListView}>
                <div className={styles.resultListViewBody}>
                    <div className={styles.resultListViewList}>
                        {resultSearch.map(t => (
                            <div className={styles.resultListViewItem}>
                                <div className={styles.hotelResultItem}>
                                    <div className={styles.hotelResultInfo}>
                                        <div className={styles.hotelInfo}>
                                            <div className={styles.resultItem}>
                                                <div className={styles.resultItemImageWrapper}>
                                                    <div className={styles.resultItemImage}>
                                                        <div className={styles.resultItemGallery}>
                                                            <div className={styles.GallContainer}>
                                                                <div className={styles.GallList}>
                                                                    <div style={{backgroundImage: `url(${t.imageUrls[0]})`}} className={styles.photoGalleryImage}></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className={styles.resultItemBodyWrapper}>
                                                    <div className={styles.resultItemHeader}>
                                                        <div className={styles.resultItemPreTitle}>
                                                            {new Array(t.stars).fill(0).map(_ => (
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="#ffa300" stroke="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className={styles.feather + " " + styles.feather__star}><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                                                            ))}
                                                        </div>
                                                        <div className={styles.resultItemTitle}>
                                                            <Link className={styles.HotelInfoTitleLink} to={`/tour/${t.tourId}`}>{t.hotelName}</Link>
                                                        </div>
                                                        <div className={styles.resultItemSubTitle}>
                                                            {t.descriptionPlace}
                                                        </div>
                                                    </div>
                                                    <div className={styles.resultItemBeforeDescriptionWrapper}>
                                                        <div className={styles.resultItemDescription}>
                                                            {t.description}
                                                        </div>
                                                    </div>
                                                    <div className={styles.resultItemFooter}>
                                                        <div className={styles.resultItemNavButtons}>
                                                            <div className={styles.resultNavButtons}>
                                                                <div className={styles.resultNavButton}>
                                                                    Об отеле
                                                                </div>
                                                                <div className={styles.resultNavButton}>
                                                                    Отзывы
                                                                </div>
                                                                <div className={styles.resultNavButton}>
                                                                   Карта
                                                                </div>
                                                                <div className={styles.resultNavButton}>
                                                                    Номера
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className={styles.resultItemPrice}>
                                                            <div className={styles.resultItemPriceValueWrapper}>
                                                                <div className={styles.resultItemNewPrice}>
                                                                    <div className={styles.resultItemPriceValue}>
                                                                        {t.newPrice}
                                                                    </div>
                                                                    <div className={styles.resultItemPriceSuffix}>
                                                                        <div className={styles.resultItemPriceCurrency}>
                                                                            РУБ
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className={styles.resultItemPriceValueArrow}>

                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}