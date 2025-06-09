import { promises as fs } from 'fs';
import path from 'path';
import { Street } from "@/types"

export const getStreets = async (): Promise<Street[]> => {
  const filePath = path.join(process.cwd(), 'data', 'streets.json')
  const fileContents = await fs.readFile(filePath, 'utf8')
  return JSON.parse(fileContents)
}

export const getImpressumAddress = (): string[] | undefined => {
    if (process.env.IMPRESSUM_ADDRESS) {
        return process.env.IMPRESSUM_ADDRESS.split(",")
    }
}

export const getImpressumEmail = (): string | undefined => process.env.IMPRESSUM_EMAIL