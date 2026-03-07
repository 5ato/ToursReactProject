interface CheckboxTreeDataInterface {
    id: number,
    name: string,
    hasChildren: boolean,
    children: CheckboxTreeChildrenDataInterface[]
}

interface CheckboxTreeChildrenDataInterface {
    id: number,
    name: string
}


const checkboxTreeData: CheckboxTreeDataInterface[] = [
    {
        id: 1,
        name: "Все курорты",
        hasChildren: false,
        children: []
    },
    {
        id: 2,
        name: "Аланья",
        hasChildren: true,
        children: [
            { id: 1, name: "Авсаллар" },
            { id: 2, name: "Алания-центр" },
            { id: 3, name: "Инжекум" },
            { id: 4, name: "Кестель" },
            { id: 5, name: "Конаклы" },
        ]
    },
    {
        id: 3,
        name: "Анталья",
        hasChildren: true,
        children: [
            { id: 1, name: "Анталья-центр" },
            { id: 2, name: "Каш" },
            { id: 3, name: "Коньяалты" },
            { id: 4, name: "Кунду" },
            { id: 5, name: "Лара" },
        ]
    },
    {
        id: 4,
        name: "Белек",
        hasChildren: true,
        children: [
            { id: 1, name: "Белек-центр" },
            { id: 2, name: "Богазкент" },
            { id: 3, name: "Искеле" },
            { id: 4, name: "Кадрие" },
        ]
    },
    {
        id: 5,
        name: "Бодрум",
        hasChildren: true,
        children: [
            { id: 1, name: "Битез" },
            { id: 2, name: "Бодрум-центр" },
            { id: 3, name: "Гюмбет" },
            { id: 4, name: "Торба" },
        ]
    },
    {
        id: 6,
        name: "Болу",
        hasChildren: false,
        children: []
    },
    {
        id: 7,
        name: "Бурса",
        hasChildren: true,
        children: [
            { id: 1, name: "Бурса" },
            { id: 2, name: "Улудаг" },
        ]
    },
    {
        id: 8,
        name: "Даламан",
        hasChildren: true,
        children: [
            { id: 1, name: "Даланья" },
            { id: 2, name: "Сарыгерме" },
        ]
    },
    {
        id: 9,
        name: "Дидим",
        hasChildren: false,
        children: []
    },
    {
        id: 10,
        name: "Измир",
        hasChildren: false,
        children: []
    },
    {
        id: 11,
        name: "Кайсере",
        hasChildren: true,
        children: [
            { id: 1, name: "Кайсере" },
            { id: 2, name: "Эрджиес" },
        ]
    },
    {
        id: 12,
        name: "Каппадокия",
        hasChildren: true,
        children: [
            { id: 1, name: "Невшехир" },
            { id: 2, name: "Ургуп" },
        ]
    },
    {
        id: 13,
        name: "Кемер",
        hasChildren: true,
        children: [
            { id: 1, name: "Бельдиби" },
            { id: 2, name: "Гойнюк" },
        ]
    },
    {
        id: 14,
        name: "Кушадасы",
        hasChildren: false,
        children: []
    },
    {
        id: 15,
        name: "Мармарис",
        hasChildren: true,
        children: [
            { id: 1, name: "Ичмелер" },
            { id: 2, name: "Мармарис-центр" },
        ]
    },
    {
        id: 16,
        name: "Сарыкамыш",
        hasChildren: false,
        children: []
    },
    {
        id: 17,
        name: "Сиде",
        hasChildren: true,
        children: [
            { id: 1, name: "Кумкой" },
            { id: 2, name: "Кызылагач" },
        ]
    },
    {
        id: 18,
        name: "Стамбул",
        hasChildren: true,
        children: [
            { id: 1, name: "Аксарай" },
            { id: 2, name: "Бакыркёй" },
            { id: 3, name: "Бейазит" },
            { id: 4, name: "Бейоглу" },
            { id: 5, name: "Кадыкей" },
            { id: 6, name: "Лалели" },
            { id: 7, name: "Сиркеджи" },
        ]
    },
    {
        id: 19,
        name: "Фетхие",
        hasChildren: true,
        children: [
            { id: 1, name: "Олюдениз" },
        ]
    },
    {
        id: 20,
        name: "Чешме",
        hasChildren: false,
        children: []
    },
    {
        id: 21,
        name: "Эрзурум",
        hasChildren: false,
        children: []
    }
]

export default checkboxTreeData;