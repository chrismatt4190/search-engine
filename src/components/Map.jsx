import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

function Map({ results }) {
  return (
    <div className="map">
      <MapContainer
        center={[40.7128, -74.006]}
        zoom={12}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          url="https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=LK8ZxnWkzmRn4IQLymXU"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {results.map((result, idx) => {
          const { coordinates, business_name } = result;
          return (
            coordinates?.lat &&
            coordinates?.lon && (
              <Marker
                key={idx}
                position={[coordinates.lat, coordinates.lon]}
              >
                <Popup>{business_name}</Popup>
              </Marker>
            )
          );
        })}
      </MapContainer>
    </div>
  );
}

export default Map;
