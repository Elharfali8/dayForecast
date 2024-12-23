'use client'

import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useEffect } from "react";

const GlobalTemperatureMap: React.FC = ({currentLayer} : {currentLayer:string}) => {
  const temperatureTileUrl = `https://tile.openweathermap.org/map/${currentLayer}/{z}/{x}/{y}.png?appid=${process.env.NEXT_PUBLIC_API_KEY}`;

  useEffect(() => {
    delete (L.Icon.Default.prototype as any)._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
      iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
      shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
    });
  }, []);

  return (
    <MapContainer center={[20, 0]} zoom={2} style={{ height: "500px", width: "100%", borderRadius: "10px" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <TileLayer
        url={temperatureTileUrl}
        opacity={0.5}
      />
    </MapContainer>
  );
};

export default GlobalTemperatureMap;

