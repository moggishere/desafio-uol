import styled from 'styled-components';

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
} from '../../styles/getter';

export const ButtonBody = styled.div`
  padding: ${(props) => getSquish('lg', props)};
`;
