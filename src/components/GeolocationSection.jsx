import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
});

export const GeolocationSection = () => {
  const [position, setPosition] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          setPosition({
            lat: pos.coords.latitude,
            lng: pos.coords.longitude,
          });
        },
        (err) => {
          console.error(err);
        }
      );
    } else {
      console.error("Geolocation not supported");
    }
  }, []);

  if (!position) return <p>Loading...</p>;

  return (
    <div className="relative w-full h-screen">
      <MapContainer
        center={[position.lat, position.lng]}
        zoom={13}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='Map data © <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={[position.lat, position.lng]}>
          <Popup>
            Your location: <br />
            Latitude: {position.lat} <br />
            Longitude: {position.lng}
          </Popup>
        </Marker>
      </MapContainer>
      <div className="absolute bottom-0 left-0 w-full bg-white p-4 shadow-lg">
        <h2 className="text-xl font-semibold">Your Location</h2>
        <p>Latitude: {position.lat}</p>
        <p>Longitude: {position.lng}</p>
      </div>
    </div>
  );
};
