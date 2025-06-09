"use client"

import { FC, useEffect, useState } from 'react';

import dynamic from 'next/dynamic';
import parse from 'html-react-parser';
import 'leaflet/dist/leaflet.css';

import { MapProps } from '@/types';
// import { getMarker } from '@/hooks/helpers';

// Dynamically import the map to avoid SSR issues
const MapContainer = dynamic(() => import("react-leaflet").then((mod) => mod.MapContainer), { ssr: true })
const TileLayer = dynamic(() => import("react-leaflet").then((mod) => mod.TileLayer), { ssr: true })
const Marker = dynamic(() => import("react-leaflet").then((mod) => mod.Marker), { ssr: true })
const Popup = dynamic(() => import("react-leaflet").then((mod) => mod.Popup), { ssr: true })

const Map: FC<MapProps> = ({ streets }: MapProps) => {
  const [isClient, setIsClient] = useState(false)
  const mapDimensions = { height: "100%", width: "100%" }
  const url = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
  const attribution = '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap</a>'

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

  if (!streets) {
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
        <MapContainer center={[52.5170124, 13.389094]} zoom={11} style={mapDimensions}>
          <TileLayer attribution={attribution} url={url} />
          {streets.map((street, i) => (
            <Marker 
              key={i}
              position={street.geocode}
              // icon={getMarker(street)}
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
