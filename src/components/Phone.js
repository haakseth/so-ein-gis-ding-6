import React from 'react';
import './devices.css';
/* https://marvelapp.github.io/devices.css/ */
export default function Phone(props) {
  const { bgColor, padding } = props;
  const screenStyle = {
    padding: padding ? padding : 40,
    backgroundColor: bgColor ? bgColor : 'hsl(210, 36%, 96%)'
  };
  return (
    <div
      className="marvel-device iphone-x"
      style={{ maxHeight: 'calc(100vh - 230px)' }}
    >
      <div className="notch">
        <div className="camera"></div>
        <div className="speaker"></div>
      </div>
      <div className="top-bar"></div>
      <div className="sleep"></div>
      <div className="bottom-bar"></div>
      <div className="volume"></div>
      <div className="overflow">
        <div className="shadow shadow--tr"></div>
        <div className="shadow shadow--tl"></div>
        <div className="shadow shadow--br"></div>
        <div className="shadow shadow--bl"></div>
      </div>
      <div className="inner-shadow"></div>
      <div className="screen" style={screenStyle}>
        {props.children}
      </div>
    </div>
  );
}
