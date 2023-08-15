import { useEffect } from "react";
import FullL from "leaflet";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import "leaflet-routing-machine";
import "lrm-mapzen";

import { useMap } from "react-leaflet";
const L = FullL as any;

L.Marker.prototype.options.icon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
});

export default function Routing() {
  const map = useMap();

  useEffect(() => {
    if (!map) return;

    const routingControl = L.Routing.control({
      router: L.Routing.mapzen("", {
        costing: "auto",
        // Endereço da aplicação backend (API)
        serviceUrl: "http://localhost:8002/route?",
        // Idioma que será retornado as instruções
        language: "pt-BR",
      }),
      formatter: new L.Routing.mapzenFormatter(),
      waypoints: [L.latLng(-23.054, -47.209), L.latLng(-22.812, -47.062)],
      routeWhileDragging: true,
    }).addTo(map);

    return () => {
      map.removeControl(routingControl);
    };
  }, [map]);

  return null;
}
