import { useState } from "react"
import styles from "./ListTours.module.css"
import type Hotel from "../../interfaces/HotelInterface"

// interface ListToursInterface {
//     data: 
// }


export default function ListTours() {
    const [hotels, setHotels] = useState<Hotel[]>([]);
    return (
        <div className={styles.resultContentWrapper}>
            <div className={styles.resultListView}>
                <div className={styles.resultListViewBody}>
                    <div className={styles.resultListViewList}>
                        {hotels.map(h => (
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
                                                                    <div className={styles.photoGalleryImage}></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className={styles.resultItemBodyWrapper}>

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