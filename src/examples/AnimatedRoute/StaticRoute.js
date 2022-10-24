import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";
import { toTapHouse, emptyGeoJson } from "./geojsons";
import Vignette from "../../components/Vignette";
import { getMap } from "./maputil";
export default function StaticRoute() {
  const mapContainer = useRef();
  const [map, setMap] = useState(undefined);
  const [route, setRoute] = useState(undefined);
  const [geoJson, setGeoJson] = useState(emptyGeoJson);

  useEffect(() => {
    const initializeMap = ({ setMap, mapContainer }) => {
      const maplibreMap = getMap(mapContainer.current);

      maplibreMap.on("load", () => {
        setMap(maplibreMap);
        maplibreMap.addLayer({
          id: "line-animation",
          type: "line",
          source: {
            type: "geojson",
            data: geoJson,
          },
          layout: {
            "line-cap": "round",
            "line-join": "round",
          },
          paint: {
            "line-color": "#ed6498",
            "line-width": 10,
            "line-opacity": 0.8,
          },
        });
        maplibreMap.flyTo({ center: [12.566, 55.673], zoom: 14 });
      });
    };
    if (!map) initializeMap({ setMap, mapContainer });
  }, [map]);

  useEffect(() => {
    if (geoJson && map) {
      map.getSource("line-animation").setData(geoJson);
    }
  }, [geoJson, map]);

  useEffect(() => {
    if (route) {
      // vis rute
      setGeoJson(toTapHouse);
    } else {
      setGeoJson({
        // reset lag
        type: "FeatureCollection",
        features: [
          {
            type: "Feature",
            geometry: {
              type: "LineString",
              coordinates: [],
            },
          },
        ],
      });
    }
    /*eslint-disable-next-line */
  }, [route]);

  const getRoute = () => {
    if (!route) {
      setRoute(toTapHouse);
    } else {
      setRoute(undefined);
    }
  };
  return (
    <div
      style={{
        position: "absolute",
        zIndex: 1,
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        overflow: "none",
      }}
      ref={(el) => (mapContainer.current = el)}
    >
      <GetRoute onClick={getRoute}>Rute</GetRoute>
      <Vignette />
    </div>
  );
}
const GetRoute = styled.button`
  cursor: pointer;
  position: absolute;
  z-index: 4;
  top: 10px;
  left: 10px;
  height: 30px;
  width: 60px;
  background-color: #eeffff;
  outline: none;
  border: solid 1px #ccc;
  box-shadow: 0 4px 12px 0 rgba(16, 42, 67, 0.2);
`;
