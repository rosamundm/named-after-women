"use client"

import { FC, useEffect, useState } from "react"
import dynamic from "next/dynamic"
import parse from 'html-react-parser';
import "leaflet/dist/leaflet.css";
import { MapProps } from "@/types"
import { greenMarker, redMarker } from "./ui/map-markers";

// Dynamically import the map to avoid SSR issues
const MapContainer = dynamic(() => import("react-leaflet").then((mod) => mod.MapContainer), { ssr: false })
const TileLayer = dynamic(() => import("react-leaflet").then((mod) => mod.TileLayer), { ssr: false })
const Marker = dynamic(() => import("react-leaflet").then((mod) => mod.Marker), { ssr: false })
const Popup = dynamic(() => import("react-leaflet").then((mod) => mod.Popup), { ssr: false })

const Map: FC<MapProps> = ({ streets }: MapProps) => {

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
      <div className="w-full h-[600px] rounded-lg overflow-hidden border border-border">
        <MapContainer center={mapCenter} zoom={11} style={mapDimensions}>
          <TileLayer attribution={attribution} url={url} />

          {streets.map((street) => (
            <Marker 
              key={street.id}
              position={street.geocode}
              icon={street.imagePath ? greenMarker : redMarker}
            >
              <Popup>
                <div className="p-2 min-w-[200px]">
                  <div className="flex items-start gap-2 mb-2">
                    <div className="flex-1">
                      <h3 className="font-semibold text-sm">{street.name}</h3>
                    </div>
                  </div>
                  {!street.eponymDateOfDeath ?  (
                    <p className="text-xs text-bold text-gray-600">
                      Named after {street.eponymName}, born {street.eponymDateOfBirth} in ({street.eponymPlaceOfBirth})
                    </p>
                  ) : (
                    <p className="text-xs text-bold text-gray-600">
                      Named after {street.eponymName}, {street.eponymDateOfBirth} ({street.eponymPlaceOfBirth}) - {street.eponymDateOfDeath} ({street.eponymPlaceOfDeath})
                    </p>
                  )}
                  {street.eponymDescription && (
                    <p className="text-xs text-gray-600 mb-2">{parse(String(street.eponymDescription))}</p>
                  )}
                  {street.imagePath && <img src={street.imagePath}></img>}
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  )
};

export default Map;
