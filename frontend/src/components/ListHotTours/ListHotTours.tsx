import { useEffect, useState } from "react"
import CardHotTour from "../CardHotTour/CardHotTour"
import styles from "./ListHotTours.module.css"
import type Tour from "../../interfaces/TourInterface"
import type Hotel from "../../interfaces/HotelInterface";
import type FromCity from "../../interfaces/FromCityInterface";

export default function ListHotTours() {
    const [tours, setTours] = useState<Tour[]>([]);

    const [hotels, setHotels] = useState<Hotel[]>([]);

    const [fromCities, setFromCities] = useState<FromCity[]>([]);

    useEffect(() => {
        fetch("data/toursData.json")
            .then(data => data.json())
            .then((result: Tour[]) => 
                setTours(result.map(t => 
                    (
                        {
                            ...t, 
                            departureDate: new Date(t.departureDate), 
                            backDepartureDate: new Date(t.backDepartureDate)
                        }
                    )
                )
                .sort((t1, t2) => t1.departureDate.getDate() - t2.departureDate.getDate())
                .slice(0, 30)
            ));
        
        fetch("data/hotelsData.json")
            .then(data => data.json())
            .then((result: Hotel[]) => setHotels(result))

        fetch("data/fromCitiesData.json")
            .then(data => data.json())
            .then((result: FromCity[]) => setFromCities(result))
    }, [])

    return (
        <section className={styles.hotToursList}>
            {tours.map(t => (
                <CardHotTour
                    fromCities={fromCities}
                    hotels={hotels}
                    tour={t}/>
            ))}
        </section>
    )
}