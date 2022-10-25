import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";
import { toTapHouse, toOslo } from "./geojsons";
import Vignette from "../../components/Vignette";
import { getMap } from "./maputil";
export default function Map() {
  const mapContainer = useRef();
  const [map, setMap] = useState(undefined);
  const [route, setRoute] = useState(undefined);

  const getRoute = (oslo) => {
    if (route) setRoute(undefined);
    else {
      if (oslo) {
        setRoute(toOslo);
      } else {
        setRoute(toTapHouse);
      }
    }
  };
  const [geoJson, setGeoJson] = useState({
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
      });
    };
    if (!map) initializeMap({ setMap, mapContainer });
    /*eslint-disable-next-line */
  }, [map]);

  useEffect(() => {
    if (route) {
      animateLine();
    } else {
      setGeoJson({
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
  useEffect(() => {
    if (geoJson && map) {
      map.getSource("line-animation").setData(geoJson);
    }
    /*eslint-disable-next-line */
  }, [geoJson]);
  // const [animation, setAnimation] = useState(undefined);
  let progress = 0;
  const animateLine = () => {
    const antalpunkter = route.features[0].geometry.coordinates.length;
    if (progress < antalpunkter) {
      // append next coordinate pair to the lineString
      geoJson.features[0].geometry.coordinates.push(
        route.features[0].geometry.coordinates[progress]
      );
      progress++;
      setGeoJson({ ...geoJson });

      // Request the next frame of the animation.
      requestAnimationFrame(animateLine);
    } else {
      setGeoJson(route.originalRoute);
      progress = 0;
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
      <Button onClick={() => map.flyTo({ center: [12.566, 55.673], zoom: 14 })}>
        Zoom nær
      </Button>
      <Button style={{ left: 100 }} onClick={() => getRoute(false)}>
        Kort rute
      </Button>
      <Button
        style={{ left: 190 }}
        onClick={() => map.flyTo({ center: [11.91, 57.8], zoom: 5.7 })}
      >
        Zoom lang
      </Button>
      <Button style={{ left: 280 }} onClick={() => getRoute(true)}>
        Lang rute
      </Button>
      <Vignette />
    </div>
  );
}
const Button = styled.button`
  cursor: pointer;
  position: absolute;
  z-index: 4;
  top: 10px;
  left: 10px;
  height: 30px;
  width: 80px;
  background-color: #eeffff;
  outline: none;
  border: solid 1px #ccc;
  box-shadow: 0 4px 12px 0 rgba(16, 42, 67, 0.2);
`;
