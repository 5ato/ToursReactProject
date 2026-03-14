interface DropFilterData {
    id: number,
    idTitle: string,
    idValue: string,
    title: string,
    value: string,
    icon: string,
    style?: React.CSSProperties
}

const dropFilterData : DropFilterData[] = [
    {
        id: 1,
        idTitle: "fromCity",
        idValue: "fromCityValue",
        value: "Самара",
        title: "ГОРОДА ВЫЛЕТА",
        icon: "✈",
        style: {
            flex: 200,
            minWidth: "140px",
            position: "relative",
        }
    },
    {
        id: 2,
        idTitle: "toCity",
        idValue: "toCityValue",
        value: "Турция",
        title: "СТРАНЫ",
        icon: "📍",
        style: {
            flex: 180,
            minWidth: 0,
            position: "relative"
        }
    },
    {
        id: 3,
        idTitle: "dateFlight",
        idValue: "dateFlightValue",
        value: "16 фев - 25 фев",
        title: "ДАТА ВЫЛЕТА",
        icon: "📅",
        style: {
            flex: 170,
            minWidth: "155px",
            position: "relative"
        },
    },
    {
        id: 4,
        idTitle: "night",
        idValue: "nightsValue",
        value: "6-6",
        title: "НОЧЕЙ",
        icon: "🕐",
        style: {
            flex: 100,
            minWidth: "100px",
            position: "relative"
        }
    },
    {
        id: 5,
        idTitle: "tourists",
        idValue: "touristsValue",
        value: "2 взрослых",
        title: "ТУРИСТЫ",
        icon: "👤",
        style: {
            flex: 180,
            minWidth: 0,
            position: "relative"
        }
    }
]

export default dropFilterData;