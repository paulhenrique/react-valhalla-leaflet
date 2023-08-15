import { MapContainer, TileLayer } from "react-leaflet";
import "./assets/css/normalize.css";
import Routing from "./components/Routing";

const position: [number, number] = [51.505, -0.09];

const App = () => {
  return (
    <div id="map" style={{ height: "100vh" }}>
      <MapContainer
        center={position}
        style={{
          height: "100%",
        }}
        zoom={13}
        scrollWheelZoom={true}
      >
        <Routing />
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
    </div>
  );
};

export default App;
