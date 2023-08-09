import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useSelector } from "react-redux";
import Leaflet from "leaflet";
import icon from "../assets/plane.png";
import { useState } from "react";
import SideDetails from "./SideDetails";

const MapView = () => {
  const state = useSelector((store) => store.reducer);

  const [showDetails, setShowDetails] = useState(false);
  const [detailID, setDetailID] = useState(null);

  const planeIcon = Leaflet.icon({
    iconUrl: icon,
    iconSize: [45, 45],
  });

  const handleClick = (id) => {
    setDetailID(id);

    setShowDetails(true);
  };

  return (
    <div>
      <h3>Map</h3>
      <MapContainer
        center={[40.380188, 47.428838]}
        zoom={7}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {state.flights.map((flight) => (
          <Marker
            key={flight.id}
            position={[flight.lat, flight.lng]}
            icon={planeIcon}
          >
            <Popup>
              <div className="popup">
                <span>Code:{flight.code}</span>
                <button onClick={() => handleClick(flight.id)}>Detail</button>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>

      {showDetails && (
        <SideDetails detailID={detailID} setShowDetails={setShowDetails} />
      )}
    </div>
  );
};

export default MapView;
