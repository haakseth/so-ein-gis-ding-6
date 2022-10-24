import React from "react";
import { bgColor } from "../style";

export default function UrlTopLeft(props) {
  const { children, url, isSmallScreen } = props;
  return (
    <a
      style={{
        position: "absolute",
        fontSize: isSmallScreen ? 12 : 32,
        top: 10,
        left: 10,
        color: bgColor
      }}
      href={url}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
}
