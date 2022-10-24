import React from 'react';
import styled from 'styled-components';

export default function Vignette() {
  return <Wrapper />;
}
const Wrapper = styled.div`
  pointer-events: none;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  z-index: 2;
  box-shadow: inset 0px 0px 150px 60px rgba(0, 0, 0, 0.8);
`;
