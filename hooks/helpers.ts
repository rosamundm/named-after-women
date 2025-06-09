import { Street } from '@/types';
import { greenMarker, redMarker } from "@/components/ui/map-markers";

export const getMarker = (street: Street) => {
    let marker = greenMarker;
    if (!street.imagePath) marker = redMarker
    return marker
  }

export const getImpressumAddress = (): string[] | undefined => {
    if (process.env.IMPRESSUM_ADDRESS) {
        return process.env.IMPRESSUM_ADDRESS.split(",")
    }
}

export const getImpressumEmail = (): string | undefined => process.env.IMPRESSUM_EMAIL