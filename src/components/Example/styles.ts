import { styled } from 'styled-components';

import {
  getColorAction,
  getColorNeutral,
  getColorAlert,
  getFontFamily,
  getWeight,
  getSize,
  getLineHeight,
  getSpacing,
  getSquish,
  getStroke,
  getRadius
} from '../../styles/getters';

export const ExampleDiv = styled.div`
  background: ${(props) => getColorAction(4, props)};
  width: 400px;
  height: 500px;
  font-family: ${(props) => getFontFamily('default', props)};
  font-weight: ${(props) => getWeight(`default`, props)};
  font-size: ${(props) => getSize('huge', props)};
  line-height: ${(props) => getLineHeight(1, props)};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${(props) => getSpacing('xs', props)};
`;

export const ExampleButton = styled.button`
  padding: ${(props) => getSquish(10, props)};
  border: ${(props) => getStroke(3, props)};
  border-radius: ${(props) => getRadius('pill', props)};
`;
