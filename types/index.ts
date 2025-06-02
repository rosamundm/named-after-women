export interface Location {
  id: number
  name: string
  type: "museum" | "park" | "shop"
  lat: number
  lng: number
  description: string
  address: string
}

export interface MapProps {
  locations: Location[]
}