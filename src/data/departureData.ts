import type { CSSProperties } from "react";

interface City {
    id: number,
    name: string,
}

interface DepartureData {
    id: number,
    name: string,
    widthContainer: CSSProperties,
    heightTable: CSSProperties,
    cities: City[]
}


const departureData : DepartureData[] = [
    {
        id: 1,
        name: "Россия",
        widthContainer: {
            width: "780px"
        },
        heightTable: {
            height: "432px"
        },
        cities: [
            { id: 1, name: 'Абакан' },
            { id: 2, name: 'Анапа' },
            { id: 3, name: 'Архангельск' },
            { id: 4, name: 'Астрахань' },
            { id: 5, name: 'Барнаул' },
            { id: 6, name: 'Благовещенск' },
            { id: 7, name: 'Братск' },
            { id: 8, name: 'Владивосток' },
            { id: 9, name: 'Владикавказ' },
            { id: 10, name: 'Волгоград' },
            { id: 11, name: 'Геленджик' },
            { id: 12, name: 'Горно-Алтайск' },
            { id: 13, name: 'Грозный' },
            { id: 14, name: 'Екатеринбург' },
            { id: 15, name: 'Иваново' },
            { id: 16, name: 'Ижевск' },
            { id: 17, name: 'Иркутск' },
            { id: 18, name: 'Казань' },
            { id: 19, name: 'Калининград' },
            { id: 20, name: 'Калуга' },
            { id: 21, name: 'Кемерово' },
            { id: 22, name: 'Киров' },
            { id: 23, name: 'Краснодар' },
            { id: 24, name: 'Магнитогорск' },
            { id: 25, name: 'Махачкала' },
            { id: 26, name: 'Мин.Воды' },
            { id: 27, name: 'Н.Новгород' },
            { id: 28, name: 'Наб.Челны' },
            { id: 29, name: 'Нальчик' },
            { id: 30, name: 'Нижневартовск' },
            { id: 31, name: 'Нижнекамск' },
            { id: 32, name: 'Новокузнецк' },
            { id: 33, name: 'Новосибирск' },
            { id: 34, name: 'Новый Уренгой' },
            { id: 35, name: 'Ноябрьск' },
            { id: 36, name: 'Омск' },
            { id: 37, name: 'Оренбург' },
            { id: 38, name: 'Орск' },
            { id: 39, name: 'П.Камчатский' },
            { id: 40, name: 'Пенза' },
            { id: 41, name: 'Пермь' },
            { id: 42, name: 'Петрозаводск' },
            { id: 43, name: 'Псков' },
            { id: 44, name: 'С.Петербург' },
            { id: 45, name: 'Самара' },
            { id: 46, name: 'Саранск' },
            { id: 47, name: 'Саратов' },
            { id: 48, name: 'Сочи' },
            { id: 49, name: 'Ставрополь' },
            { id: 50, name: 'Сургут' },
            { id: 51, name: 'Томск' },
            { id: 52, name: 'Тюмень' },
            { id: 53, name: 'Улан-Удэ' },
            { id: 54, name: 'Ульяновск' },
            { id: 55, name: 'Уфа' },
            { id: 56, name: 'Хабаровск' },
            { id: 57, name: 'Ханты-Мансийск' },
            { id: 58, name: 'Чебоксары' },
            { id: 59, name: 'Челябинск' },
            { id: 60, name: 'Череповец' },
            { id: 61, name: 'Чита' },
            { id: 62, name: 'Ю.Сахалинск' },
            { id: 63, name: 'Якутск' },
            { id: 64, name: 'Ярославль' }
        ]
    },
    {
        id: 2,
        name: "Казахстан",
        widthContainer: {
            width: "580px"
        },
        heightTable: {
            height: "120px"
        },
        cities: [
            { id: 1, name: "Актау" },
            { id: 2, name: "Актобе" },
            { id: 3, name: "Алматы" },
            { id: 4, name: "Астана" },
            { id: 5, name: "Атырау" },
            { id: 6, name: "Караганды" },
            { id: 7, name: "Костанай" },
            { id: 8, name: "Кызылорда" },
            { id: 9, name: "Петропавловск" },
            { id: 10, name: "Семей" },
            { id: 11, name: "Туркестан" },
            { id: 12, name: "Уральск" },
            { id: 13, name: "Усть-Каменогорск" },
            { id: 14, name: "Шымкент" },
        ]
    }
]

export default departureData;
