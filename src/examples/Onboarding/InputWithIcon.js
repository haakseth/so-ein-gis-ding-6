import React, { useState } from 'react';
import styled from 'styled-components';
import User from './User';
import Email from './Email';

export default function InputWithIcon(props) {
  const {
    value,
    setValue,
    type,
    icontype,
    autofocus,
    placeholder,
    maxLength,
    onmaxLength
  } = props;
  const [inFocus, setInFocus] = useState(false);
  const iconStyle = {
    position: 'absolute',
    top: 0,
    bottom: 0,
    marginTop: 'auto',
    marginBottom: 'auto',
    left: 14,
    opacity: inFocus ? 1 : 0.5
  };
  const renderIcon = () => {
    if (icontype === 'user') {
      return <User style={iconStyle} />;
    }
    return <Email style={iconStyle} />;
  };
  return (
    <Label>
      {renderIcon()}
      <input
        autoFocus={autofocus}
        onFocus={() => setInFocus(true)}
        onBlur={() => setInFocus(false)}
        type={type}
        value={value}
        onChange={e => setValue(e.target.value)}
        placeholder={placeholder}
        maxLength={maxLength ? maxLength : undefined}
        onKeyDown={
          maxLength && onmaxLength
            ? value.length === maxLength
              ? () => onmaxLength()
              : () => {}
            : () => {}
        }
      />
    </Label>
  );
}

const Label = styled.label`
  margin-top: 15px;
  position: relative;
  width: 100%;
  input {
    height: 50px;
    border: none;
    border-radius: 4px;
    width: 100%;
    font-family: 'Work Sans', sans-serif;
    font-size: 18px;
    line-height: 50px;
    padding-left: 60px;
    outline: none;
    color: #45241c;
    :focus {
      border: solid 1px #45241c;
    }
  }
`;
