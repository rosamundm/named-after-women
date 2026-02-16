import { Street } from "@/types"

const getTypeCount = (type: string, streets: Street[]) => streets.filter((street: Street) => street.type === type).length

export const getEponymTypeInfo = (streets: Street[]) => (
    [
        {
            name: "politics",
            count: getTypeCount("politics", streets),
            description: "Women who held political office in Berlin"
        },
        {
            name: "resistance members",
            count: getTypeCount("resistance", streets),
            description: "Women who risked their lives for truth and justice during WW2"
        },
        {
            name: "writers & artists",
            count: getTypeCount("literature & arts", streets),
            description: "Women who have contributed to Berlin's rich cultural fabric"
        },
    ]
)
