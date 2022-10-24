// Import React
import React from "react";
import styled, { css } from "styled-components";
import { useMedia } from "./hooks/useMedia";
import { size } from "./style";

// Import Spectacle Core tags
import { Deck, Slide, Appear } from "spectacle";

// import

// Import theme
import createTheme from "spectacle/lib/themes/default";
import disney from "./img/thomas-kelley-5YtjgRNTli4-unsplash.jpg";
import dictionary from "./img/waldemar-brandt-U3Ptj3jafX8-unsplash.jpg";
import motivation from "./img/andrew-neel-1-29wyvvLJA-unsplash.jpg";
import motion from "./img/ahmad-odeh-ckm1yAe6jhU-unsplash.jpg";
import fleur from "./img/fleur-dQf7RZhMOJU-unsplash.jpg";
import shaka1 from "./img/shaka1.jpg";
import shaka2 from "./img/shaka2.jpg";
import StaticRoute from "./examples/AnimatedRoute/StaticRoute";
import AnimatedRoute1 from "./examples/AnimatedRoute/AnimatedRoute1";
import AnimatedRoute2 from "./examples/AnimatedRoute/AnimatedRoute2";
import AnimatedRoute3 from "./examples/AnimatedRoute/AnimatedRoute3";
import Onboarding from "./examples/Onboarding/Onboarding";
import SeptimaLogo from "./components/SeptimaLogo";
import { bgColor } from "./style";
import Vignette from "./components/Vignette";
import ThankYou from "./slides/ThankYou";
//import VignetteTopLeft from "./components/VignetteTopLeft";
import UrlTopLeft from "./components/UrlTopLeft";

// Require CSS
require("normalize.css");

const theme = createTheme(
  {
    primary: bgColor,
    secondary: "#1F2022",
    tertiary: "#03A9FC",
    quaternary: "#CECECE",
  },
  {
    primary: "Montserrat",
    secondary: "Helvetica",
  }
);

export default function Presentation() {
  const isSmallScreen = useMedia(
    [`(max-width: ${size.small}px)`],
    [true],
    false
  );
  return (
    <Deck
      // transition={['fade']}
      progress={"pacman"}
      transitionDuration={500}
      theme={theme}
    >
      <Slide
        style={{
          backgroundImage: `radial-gradient(rgba(0, 0, 0, 0),rgba(0, 0, 0, 0.2),
                rgba(0, 0, 0, .8)),
                url(${disney})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        align={"center flex-start"}
      >
        <H1 isSmallScreen={isSmallScreen} style={{ color: "#fff" }}>
          Animationer i webkort
        </H1>
        <UrlTopLeft
          isSmallScreen={isSmallScreen}
          url={"https://haakseth.github.io/so-ein-gis-ding-6/"}
        >
          haakseth.github.io/so-ein-gis-ding-6
        </UrlTopLeft>

        <SeptimaLogo color={bgColor} />
      </Slide>
      <Slide
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1),
                rgba(0, 0, 0, 0.7)),
                url(${shaka1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <UrlTopLeft
          isSmallScreen={isSmallScreen}
          url={"https://haakseth.github.io/so-ein-gis-ding-6"}
        >
          haakseth.github.io/so-ein-gis-ding-6
        </UrlTopLeft>
        <Fill column style={{ color: bgColor, justifyContent: "flex-end" }}>
          <span>John Wika Haakseth</span>
          {/* eslint-disable-next-line */}
          <span>🇳🇴🇩🇰</span>
          {/* eslint-disable-next-line */}
          <span>🏐💻☕️🎸🐶</span>
          <span>@haakseth</span>
          <SeptimaLogo color={bgColor} />
        </Fill>
      </Slide>

      <Slide
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5),
                rgba(0, 0, 0, 0.5)),
                url(${dictionary})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Fill
          column
          style={{
            justifyContent: "space-evenly",
          }}
        >
          <div>
            <H2 isSmallScreen={isSmallScreen}>Animationer</H2>
            <SlideText isSmallScreen={isSmallScreen}>
              Billeder der simulerer bevægelse
            </SlideText>
          </div>
          <div>
            <Appear>
              <div>
                <H2 isSmallScreen={isSmallScreen}>Mikroanimationer</H2>
                <SlideText isSmallScreen={isSmallScreen}>
                  Animationer der har et enkelt fokus
                </SlideText>
              </div>
            </Appear>
          </div>
        </Fill>
        <SeptimaLogo color={bgColor} />
      </Slide>
      <Slide
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5),
              rgba(0, 0, 0, 0.5)),
              url(${motivation})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <H1 isSmallScreen={isSmallScreen}>
          {/* Hvorfor bruge animationer og interaktioner i kortapper? */}
          Motivation
        </H1>
        <SlideText isSmallScreen={isSmallScreen}>
          Animationer fanger brugerens opmærksomhed
        </SlideText>
        <List isSmallScreen={isSmallScreen}>
          {/* Framhev hva der er vigtig lige nu, call to action */}
          <Appear>
            <li>Guide brugeren</li>
          </Appear>
          <Appear>
            {/* Det kan tage tid for et input at give resultat, animation kan give feedback på at noget sker */}
            <li>Giv feedback på input</li>
          </Appear>
          <Appear>
            <li>Bring liv til applikationen</li>
          </Appear>
        </List>
        <SeptimaLogo color={bgColor} />
      </Slide>
      <Slide
        align={"center flex-start"}
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5),
            rgba(0, 0, 0, 0.5)),
            url(${motion})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <H2 isSmallScreen={isSmallScreen}>Webanimationer</H2>
        <SlideText isSmallScreen={isSmallScreen}>
          CSS, keyframes, rammeverker
          {/* </div> */}
        </SlideText>
      </Slide>
      <Slide
        align={"center center"}
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1),
              rgba(0, 0, 0, 0.7))`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Fill column>
          <Onboarding />
        </Fill>
        <Vignette />
        <SeptimaLogo />
      </Slide>
      <Slide
        align={"center flex-start"}
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5),
            rgba(0, 0, 0, 0.5)),
            url(${fleur})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <H2 isSmallScreen={isSmallScreen}>Kortanimationer</H2>
        <SlideText isSmallScreen={isSmallScreen}>WebGL/Canvas</SlideText>
      </Slide>

      <Slide align={"center flex-start"}>
        <MapHeader isSmallScreen={isSmallScreen}>
          Custom kortanimation
        </MapHeader>
        <div
          style={{
            color: bgColor,
            position: "absolute",
            zIndex: 4,
            bottom: 50,
            left: 20,
            listStyle: "none",
            // pointerEvents: "none"
          }}
        >
          Lad os animere en rute
        </div>
        <StaticRoute />
        <SeptimaLogo color={bgColor} />
      </Slide>
      <Slide align={"center flex-start"}>
        <MapHeader isSmallScreen={isSmallScreen}>
          requestAnimationFrame()
        </MapHeader>
        <SlideText
          isSmallScreen={isSmallScreen}
          style={{
            position: "absolute",
            zIndex: 4,
            bottom: 40,
            left: 20,
            listStyle: "none",
            // pointerEvents: "none"
          }}
        >
          Udfordring: Ruter kan være korte og lange
        </SlideText>
        <AnimatedRoute1 />
        <SeptimaLogo color={bgColor} />
      </Slide>
      <Slide align={"center flex-start"}>
        <MapHeader isSmallScreen={isSmallScreen}>normaliser</MapHeader>
        {/* <List
          isSmallScreen={isSmallScreen}
          style={{
            position: "absolute",
            zIndex: 6,
            bottom: isSmallScreen ? 30 : 20,
            left: isSmallScreen ? -30 : 0,
            listStyle: "none"
            // pointerEvents: "none"
          }}
        >
          <li>Deler linjen ind i koordinater med lig afstand mellem sig</li>
          <li>Antal koordinater per frame, avh af linjens længde</li>
        </List> */}

        <SlideText
          isSmallScreen={isSmallScreen}
          style={{
            position: "absolute",
            zIndex: 4,
            bottom: 10,
            left: 20,
            listStyle: "none",
            // pointerEvents: "none"
          }}
        >
          <a
            style={{ color: "#fff" }}
            href="https://haakseth.github.io/animate-route/"
            target="_blank"
            rel="noopener noreferrer"
          >
            haakseth.github.io/animate-route/
          </a>
        </SlideText>
        <AnimatedRoute2 />
        <SeptimaLogo color={bgColor} />
      </Slide>
      <Slide align={"center flex-start"}>
        <MapHeader isSmallScreen={isSmallScreen}>add easing</MapHeader>

        <SlideText
          isSmallScreen={isSmallScreen}
          style={{
            position: "absolute",
            zIndex: 4,
            bottom: 10,
            left: 20,
            listStyle: "none",
            // pointerEvents: "none"
          }}
        >
          <a
            style={{ color: "#fff" }}
            href="https://haakseth.github.io/animate-route/"
            target="_blank"
            rel="noopener noreferrer"
          >
            haakseth.github.io/animate-route/
          </a>
        </SlideText>
        <AnimatedRoute3 />
        <SeptimaLogo color={bgColor} />
      </Slide>

      <Slide
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1),
                rgba(0, 0, 0, 0.7)),
                url(${shaka2})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <ThankYou />
      </Slide>
    </Deck>
  );
}

const List = styled.ul`
  text-align: left;
  color: ${bgColor};
  font-size: 2.3rem;
  ${(props) =>
    props.isSmallScreen &&
    css`
      font-size: 1rem;
    `};
`;
const SlideText = styled.p`
  color: ${bgColor};
  font-size: 2.66rem;

  ${(props) =>
    props.isSmallScreen &&
    css`
      font-size: 1.33rem;
    `};
`;
export const H1 = styled.h1`
  word-wrap: anywhere;
  color: ${bgColor};
  font-size: 4rem;
  ${(props) =>
    props.isSmallScreen &&
    css`
      font-size: 2rem;
    `};
`;
export const H2 = styled.h2`
  word-wrap: anywhere;
  color: ${bgColor};
  font-size: 3.66rem;
  ${(props) =>
    props.isSmallScreen &&
    css`
      font-size: 2rem;
    `};
`;

export const UL = styled.ul`
  list-style: none;
  padding-inline-start: 0;
  li {
    margin-top: 4px;
  }
`;

export const ListWrapper = styled.div`
  font-size: 12px;
  text-align: start;
`;
export const Fill = styled.div`
  position: absolute;
  z-index: 1;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  padding: 2em;
  display: flex;
  align-items: center;
  ${(props) =>
    props.column &&
    css`
      flex-direction: column;
    `};
`;

const MapHeader = styled.h1`
  word-wrap: anywhere;
  word-break: break-all;
  position: absolute;
  z-index: 4;
  left: 20px;
  color: ${bgColor};
  font-size: 3.66rem;

  ${(props) =>
    props.isSmallScreen &&
    css`
      font-size: 2rem;
    `};
`;
