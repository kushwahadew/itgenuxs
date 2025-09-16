"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const position = [23.37005, 85.32519]; // Ranchi

const customIcon = new L.Icon({
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

export default function MapInner() {
  return (
    <MapContainer
      key="leaflet-map"  // 🔑 FIX: force single instance
      center={position}
      zoom={16}
      scrollWheelZoom={true}
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      />
      <Marker position={position} icon={customIcon}>
        <Popup>
          <strong>ITGENIXS PVT. LTD</strong> <br />
          Chutia Fitness Freak, Krishna Puri Road No. 1, <br />
          Chutia, Gosaintola, Ranchi, Jharkhand 834011
        </Popup>
      </Marker>
    </MapContainer>
  );
}
