import React from 'react';
import styled, { css } from 'styled-components';

export default function Button(props) {
  const {
    cta,
    type,
    children,
    onClick,
    width,
    style,
    disabled = false
  } = props;
  return (
    <StyledButton
      disabled={disabled}
      onClick={onClick}
      type={type ? type : 'button'}
      cta={cta}
      width={width}
      style={style}
    >
      {children}
    </StyledButton>
  );
}

const StyledButton = styled.button`
  border-radius: 27.5px;
  height: 50px;
  cursor: pointer;
  border: solid 1px #45241c;
  color: #45241c;
  font-family: 'Work Sans', sans-serif;
  background: none;
  font-size: 16px;
  outline: none;
  padding: 0;
  ${props =>
    props.cta &&
    css`
      background: #67453d;
      color: #f3edcd;
      border: none;
    `};
`;
