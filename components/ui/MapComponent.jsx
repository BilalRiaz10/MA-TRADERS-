import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const MapComponent = () => {
  // Fixed coordinate
  const position = [31.515722772834973, 74.29475018734657];

  // Custom default icon (Leaflet issue fix)
  const DefaultIcon = L.icon({
    iconUrl:
      "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
    shadowUrl:
      "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
  });
  L.Marker.prototype.options.icon = DefaultIcon;

  return (
    <MapContainer
      center={position}
      zoom={15}
      style={{
        height: "350px",
        width: "100%",
        borderRadius: "12px",
        overflow: "hidden",
        zIndex: 0,
      }}
      scrollWheelZoom={false}
    >
      {/* OpenStreetMap tiles */}
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution=""
      />

      {/* Marker with popup */}
      <Marker position={position}>
        <Popup>
          <strong>M.A Traders</strong>
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;
