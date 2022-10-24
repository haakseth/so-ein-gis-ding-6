import React from "react";
import styled from "styled-components";
import { useMedia } from "../hooks/useMedia";
import { size, bgColor } from "../style";
import { ListWrapper, UL, H1 } from "../presentation";
export default function ThankYou() {
  const isSmallScreen = useMedia(
    [`(max-width: ${size.small}px)`],
    [true],
    false
  );
  return (
    <div style={{ color: bgColor }}>
      <H1 isSmallScreen={isSmallScreen}>Tak!</H1>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
          padding: 20,
        }}
      >
        <ListWrapper>
          <h2>Fotokredits</h2>
          <UL>
            <li>
              <A href="https://unsplash.com/photos/5YtjgRNTli4">
                Thomas Kelley - Unsplash
              </A>
            </li>
            <li>
              <A href="https://unsplash.com/photos/U3Ptj3jafX8">
                Waldemar Brandt - Unsplash
              </A>
            </li>
            <li>
              <A href="https://unsplash.com/photos/1-29wyvvLJA">
                Andrew Neel - Unsplash
              </A>
            </li>
            <li>
              <A href="https://unsplash.com/photos/ckm1yAe6jhU">
                Ahmad Odeh - Unsplash
              </A>
            </li>
            <li>
              <A href="https://unsplash.com/photos/qH36EgNjPJY">
                Alex Siale - Unsplash
              </A>
            </li>
            <li>
              <A href="https://unsplash.com/photos/dQf7RZhMOJU">
                Fleur - Unsplash
              </A>
            </li>
          </UL>
        </ListWrapper>
        <ListWrapper>
          <h2>Links</h2>
          <UL>
            <li>
              <A href="https://haakseth.github.io/so-ein-gis-ding-6/">
                Denne presentationen
              </A>
            </li>
            <li>
              <A href="https://github.com/haakseth/so-ein-gis-ding-6/">
                Denne presentationens kode
              </A>
            </li>
            <li>
              <A href="https://openlayers.org/en/latest/examples/?q=animation">
                OpanLayers Animations
              </A>
            </li>
            <li>
              <A href="https://maplibre.org/maplibre-gl-js-docs/example/animate-a-line/">
                Maplibre docs - Animate a line
              </A>
            </li>
          </UL>
        </ListWrapper>
        <ListWrapper>
          <h2>Eksempler</h2>
          <UL>
            <li>
              <A href="https://haakseth.github.io/animate-route/">
                Animére rute
              </A>{" "}
              | <A href="https://github.com/haakseth/animate-route">kode</A>
            </li>
            <li>
              <A href="https://haakseth.github.io/streets">Interaktion/Gader</A>
              | <A href="https://github.com/haakseth/streets">kode</A>
            </li>
          </UL>
        </ListWrapper>
        <ListWrapper>
          <h2>John Wika Haakseth</h2>
          <UL>
            <li>
              <A href="https://twitter.com/haakseth">Twitter</A>
            </li>
            <li>
              <A href="https://github.com/haakseth">Github</A>
            </li>
            <li>
              <A href="https://haakseth.com/">Hjemmeside</A>
            </li>
            <li>
              <A href="https://www.instagram.com/shakpup/">
                Shakas instagram - @shakpup
              </A>
            </li>
          </UL>
        </ListWrapper>
      </div>
    </div>
  );
}
const A = styled.a`
  color: ${bgColor};
`;
