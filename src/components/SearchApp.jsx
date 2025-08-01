import { useState } from "react";
import "../App.css";
import "../Map.css";
import { SearchBar } from "./SearchBar";
import { SearchResultsList } from "./SearchResultsList";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

// Fix for marker icons in React-Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

function SearchApp() {
  const [results, setResults] = useState([]);

  return (
    <div className="App">
      <div className="search-bar-container">
        <SearchBar setResults={setResults} />
      </div>

      <div className="main-container">
        <div className="left-column">
          <div className="search-results-container">
            <SearchResultsList results={results} />
          </div>
        </div>

        <div className="right-column">
          <div className="map">
            <MapContainer
              center={[40.7128, -74.006]}
              zoom={12}
              style={{ height: "100vh", width: "100%" }}
            >
              <TileLayer
                url="https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=LK8ZxnWkzmRn4IQLymXU"
                attribution="&copy; OpenStreetMap contributors"
              />
              {results.map((result, idx) => {
                const { coordinates, business_name } = result;
                return (
                  coordinates?.lat &&
                  coordinates?.lon && (
                    <Marker key={idx} position={[coordinates.lat, coordinates.lon]}>
                      <Popup>
                        <strong>{business_name}</strong>
                      </Popup>
                    </Marker>
                  )
                );
              })}
            </MapContainer>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchApp;
