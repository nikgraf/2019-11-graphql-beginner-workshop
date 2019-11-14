import React, { useRef, useEffect } from "react";
import Leaflet from "leaflet";

const link = document.createElement("link");
link.rel = "stylesheet";
link.href = "https://unpkg.com/leaflet@latest/dist/leaflet.css";
document.body.appendChild(link);

function Map(props) {
  const mapWrapperElement = useRef(null);
  const [map, setMap] = React.useState(null);

  React.useLayoutEffect(() => {
    const map = Leaflet.map(mapWrapperElement.current);

    Leaflet.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    setMap(map);
  }, []);

  useEffect(() => {
    if (map) {
      map.setView([props.lat, props.long], 13);
    }
  }, [props.lat, props.long, map]);

  return <div ref={mapWrapperElement} className={props.className} />;
}

export default Map;
