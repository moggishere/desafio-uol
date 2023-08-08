import { styled } from 'styled-components';

import theme from '../../styles/theme';
import {
  getColorAction,
  getColorNeutral,
  getFontFamily,
  getWeight
} from '../../styles/getter';

export const ExampleDiv = styled.div`
  background: ${(props) => getColorAction(4, props)};
  width: 400px;
  height: 500px;
  font-family: ${(props) => getFontFamily('default', props)};
  font-weight: ${(props) => getWeight(1, props)};
  font-size: 56px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  line-height: 1.5;
`;
