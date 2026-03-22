import { Street, Tag } from "@/types"


// todo: funcs no longer needed really — just create list of tag names and add verbose names to Tag type

const getTagCount = (tag: Tag, streets: Street[]) => streets.filter(street => street.tags?.includes(tag)).length

export const getTagInfo = (streets: Street[]) => (
    [
        {
            name: "politics & activism",
            verboseName: "politics & activism",
            count: getTagCount("politics & activism", streets),
        },
        {
            name: "resistance",
            verboseName: "resistance during ww2",
            count: getTagCount("resistance", streets),
        },
        {
            name: "literature",
            verboseName: "literature",
            count: getTagCount("literature", streets),
        },
        {
            name: "art",
            descriptiveName: "art",
            count: getTagCount("art", streets),
        },
        {
            name: "music, film, theatre",
            descriptiveName: "music, film, theatre",
            count: getTagCount("music, film, theatre", streets),
        },
        {
            name: "science",
            descriptiveName: "science",
            count: getTagCount("science", streets),
        },
        {
            name: "international",
            descriptiveName: "international",
            count: getTagCount("international", streets),
        },
        {
            name: "other",
            descriptiveName: "other",
            count: getTagCount("other", streets),
        }
    ]
)

export const districtNames = [
    "Charlottenburg-Wilmersdorf",
    "Friedrichshain-Kreuzberg",
    "Lichtenberg",
    "Marzahn-Hellersdorf",
    "Mitte",
    "Neukölln",
    "Pankow",
    "Reinickendorf",
    "Spandau",
    "Steglitz-Zehlendorf",
    "Tempelhof-Schöneberg",
    "Treptow-Köpenick"
]