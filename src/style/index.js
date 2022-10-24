import { css } from 'styled-components';
export const bgColor = 'hsl(210, 36%, 96%)';

export const size = {
  small: 640
};
export const above = Object.keys(size).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${size[label] / 16}em) {
      ${css(...args)}
    }
  `;
  return acc;
}, {});
export const below = Object.keys(size).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${size[label] / 16}em) {
      ${css(...args)}
    }
  `;
  return acc;
}, {});
