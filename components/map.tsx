"use client"

import { useEffect, useState } from "react"
import dynamic from "next/dynamic"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, LibraryIcon as Museum, ShoppingBag, Trees } from "lucide-react"
import { Location, MapProps } from "@/types"

// Dynamically import the map to avoid SSR issues
const MapContainer = dynamic(() => import("react-leaflet").then((mod) => mod.MapContainer), { ssr: false })
const TileLayer = dynamic(() => import("react-leaflet").then((mod) => mod.TileLayer), { ssr: false })
const Marker = dynamic(() => import("react-leaflet").then((mod) => mod.Marker), { ssr: false })
const Popup = dynamic(() => import("react-leaflet").then((mod) => mod.Popup), { ssr: false })

export default function Map({ locations }: MapProps) {
  const [filteredLocations, setFilteredLocations] = useState<Location[]>(locations)
  const [activeFilter, setActiveFilter] = useState<string>("all")
  const [isClient, setIsClient] = useState(false)

  const mapCenter = [52.5170124, 13.389094]
  const mapDimensions = { height: "100%", width: "100%" }
  const url = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
  const attribution =
    '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap</a> | \
                        Markers: Prosymbols Premium (Flaticon)';

  useEffect(() => {
    setIsClient(true)
  }, [])

  const filterLocations = (type: string) => {
    setActiveFilter(type)
    if (type === "all") {
      setFilteredLocations(locations)
    } else {
      setFilteredLocations(locations.filter((location) => location.type === type))
    }
  }

  const getIcon = (type: string) => {
    switch (type) {
      case "museum":
        return <Museum className="w-4 h-4" />
      case "park":
        return <Trees className="w-4 h-4" />
      case "shop":
        return <ShoppingBag className="w-4 h-4" />
      default:
        return <MapPin className="w-4 h-4" />
    }
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case "museum":
        return "bg-blue-100 text-blue-800"
      case "park":
        return "bg-green-100 text-green-800"
      case "shop":
        return "bg-purple-100 text-purple-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  if (!isClient) {
    return (
      <div className="w-full h-[600px] bg-gray-100 rounded-lg flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 mx-auto mb-2"></div>
          <p className="text-gray-600">Loading map...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-2">
        <Button
          variant={activeFilter === "all" ? "default" : "outline"}
          onClick={() => filterLocations("all")}
          className="gap-2"
        >
          <MapPin className="w-4 h-4" />
          All ({locations.length})
        </Button>
        <Button
          variant={activeFilter === "museum" ? "default" : "outline"}
          onClick={() => filterLocations("museum")}
          className="gap-2"
        >
          <Museum className="w-4 h-4" />
          Museums ({locations.filter((l) => l.type === "museum").length})
        </Button>
        <Button
          variant={activeFilter === "park" ? "default" : "outline"}
          onClick={() => filterLocations("park")}
          className="gap-2"
        >
          <Trees className="w-4 h-4" />
          Parks ({locations.filter((l) => l.type === "park").length})
        </Button>
        <Button
          variant={activeFilter === "shop" ? "default" : "outline"}
          onClick={() => filterLocations("shop")}
          className="gap-2"
        >
          <ShoppingBag className="w-4 h-4" />
          Shops ({locations.filter((l) => l.type === "shop").length})
        </Button>
      </div>

      {/* Map */}
      <div className="w-full h-[600px] rounded-lg overflow-hidden border border-border">
        <MapContainer center={mapCenter} zoom={11} style={mapDimensions}>
          <TileLayer attribution={attribution} url={url} />
          {filteredLocations.map((location) => (
            <Marker key={location.id} position={[location.lat, location.lng]}>
              <Popup>
                <div className="p-2 min-w-[200px]">
                  <div className="flex items-start gap-2 mb-2">
                    {getIcon(location.type)}
                    <div className="flex-1">
                      <h3 className="font-semibold text-sm">{location.name}</h3>
                      <Badge className={`text-xs ${getTypeColor(location.type)}`}>{location.type}</Badge>
                    </div>
                  </div>
                  <p className="text-xs text-gray-600 mb-2">{location.description}</p>
                  <p className="text-xs text-gray-500">{location.address}</p>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>

      {/* Location List */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filteredLocations.map((location) => (
          <Card key={location.id} className="hover:shadow-md transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-2">
                  {getIcon(location.type)}
                  <CardTitle className="text-lg">{location.name}</CardTitle>
                </div>
                <Badge className={`text-xs ${getTypeColor(location.type)}`}>{location.type}</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="mb-2">{location.description}</CardDescription>
              <p className="text-xs text-muted-foreground">{location.address}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
