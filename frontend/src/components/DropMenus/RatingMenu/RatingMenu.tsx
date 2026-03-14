import styles from "./RatingMenu.module.css"

interface RatingData {
    id: number, name: string
}

interface RatingMenuProps {
    data: RatingData[],
    selectedRating: number,
    setSelectedRating: (meal: number) => void
}

export default function RatingMenu({ data, selectedRating, setSelectedRating }: RatingMenuProps) {
    return (
        <div onClick={e => e.stopPropagation()} className={styles.RatingMenuWrapper}>
            <div className={styles.RadionGroupSelectTooltipContent}>
                <div className={styles.RadioGroupSelectTooltipTitle}>Рейтинг</div>
                <div className={styles.TooltipRadioGroup}>
                    {data.map(item => (
                        <div className={styles.InputRadioWrapper}>
                            <input 
                                onChange={() => setSelectedRating(item.id)}
                                checked={selectedRating === item.id}
                                name="rating"
                                type="radio"/>
                            <div className={styles.InputRadioContent}>{item.name}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}