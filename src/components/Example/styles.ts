import { styled } from 'styled-components';

import theme from '../../styles/theme';
import { getColorAction, getColorNeutral } from '../../styles/getter';

export const ExampleDiv = styled.div`
  background: ${(props) => getColorNeutral(theme.color, 'medium-02', props)};
  width: 400px;
  height: 500px;
  font-family: 'Roboto thin';
  font-size: 56px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  line-height: 1.5;
`;
