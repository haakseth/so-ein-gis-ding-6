import React, { useRef, useEffect, useState } from "react";

import styled from "styled-components";
import along from "@turf/along";
import length from "@turf/length";
import { toTapHouse, toOslo } from "./geojsons";
import Vignette from "../../components/Vignette";
import { easeInOutCirc, getMap } from "./maputil";

const lineResulution = 2000;
const numberOfAnimationFrames = 120;
export default function Map() {
  const mapContainer = useRef();
  const [map, setMap] = useState(undefined);

  const [route, setRoute] = useState(undefined);

  const getRoute = (oslo) => {
    if (route) setRoute(undefined);
    else {
      const routeFromApi = oslo ? toOslo : toTapHouse;
      const alongDist = length(routeFromApi) / lineResulution;
      const routeEven = {
        ...routeFromApi,
        features: [
          {
            ...routeFromApi.features[0],
            geometry: { ...routeFromApi.features[0].geometry, coordinates: [] },
          },
        ],
        originalRoute: routeFromApi,
      };
      for (var i = 0; i < lineResulution; i++) {
        const newCoord = along(
          routeFromApi.features[0].geometry,
          alongDist * (i * easeInOutCirc(i / lineResulution))
        );
        routeEven.features[0].geometry.coordinates.push(
          newCoord.geometry.coordinates
        );
      }
      setRoute(routeEven);
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
      const maplibreMap = getMap(mapContainer.current, {
        center: [11.91, 57.8],
        zoom: 5.7,
      });

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
  let progress = 0;
  const animateLine = () => {
    const antalpunkter = route.features[0].geometry.coordinates.length;
    const antalpunkterPerFrame =
      antalpunkter > numberOfAnimationFrames
        ? Math.round(antalpunkter / numberOfAnimationFrames)
        : 1;

    if (progress < antalpunkter - antalpunkterPerFrame) {
      // append new coordinates to the lineString
      geoJson.features[0].geometry.coordinates = [
        ...geoJson.features[0].geometry.coordinates,
        ...route.features[0].geometry.coordinates.slice(
          progress,
          progress + antalpunkterPerFrame
        ),
      ];

      progress += antalpunkterPerFrame;
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
      <Button onClick={() => getRoute(true)}>Push the button</Button>
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
