import styles from "./MealMenu.module.css"

interface MealData {
    id: number, name: string
}

interface MealMenuProps {
    data: MealData[],
    selectedMeal: number,
    setSelectedMeal: (meal: number) => void
}

export default function MealMenu({ data, selectedMeal, setSelectedMeal }: MealMenuProps) {
    return (
        <div onClick={e => e.stopPropagation()} className={styles.MealMenuWrapper}>
            <div className={styles.RadionGroupSelectTooltipContent}>
                <div className={styles.RadioGroupSelectTooltipTitle}>Питание</div>
                <div className={styles.TooltipRadioGroup}>
                    {data.map(item => (
                        <div className={styles.InputRadioWrapper}>
                            <input 
                                onChange={() => setSelectedMeal(item.id)}
                                checked={selectedMeal === item.id}
                                name="meal"
                                type="radio"/>
                            <div className={styles.InputRadioContent}>{item.name}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}