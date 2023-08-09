import styled from 'styled-components';

import {
  getColorAction,
  getColorNeutral,
  getWeight,
  getSize,
  getLineHeight,
  getSquish,
  getStroke,
  getRadius
} from '../../styles/getters';

export const InputContainer = styled.div`
  position: relative;
`;

export const InputElement = styled.input`
  height: 48px;
  width: 280px;
  border: 1px solid #c0c0c0;
  border-radius: 4px;
  box-sizing: border-box;
  padding: 16px;
  font-family: 'Segoe UI';
  font-size: 16px;

  &:focus {
    outline: none;
    border: 2px solid blue;
  }

  &:focus + .label .text,
  &:not([value='']) + .label .text {
    font-size: 12px;
    transform: translate(0, -150%);
    background-color: red;
    padding-left: 4px;
    padding-right: 4px;
  }

  &:focus + .label .text {
    color: blue;
  }
`;

export const Label = styled.label`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 16px;
  display: flex;
  align-items: center;
  pointer-events: none;
`;

export const Text = styled.div`
  transition: all 0.15s ease-out;
  color: grey;
`;
