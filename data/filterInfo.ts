import { Street, Tag } from "@/types"

const getTagCount = (tag: Tag, streets: Street[]) => streets.filter(street => street.tags?.includes(tag)).length

export const getTagInfo = (streets: Street[]) => (
    [
        {
            name: "politicians & activists",
            count: getTagCount("politics", streets),
            description: "Women who held office or were active in political movements"
        },
        {
            name: "resistance members",
            count: getTagCount("resistance", streets),
            description: "Women who risked their lives for truth and justice during WW2"
        },
        {
            name: "writers & artists",
            count: getTagCount("literature & arts", streets),
            description: "Women who have contributed to Berlin's rich cultural fabric"
        },
    ]
)
