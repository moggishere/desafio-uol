import { styled } from 'styled-components';

import theme from '../../styles/theme';
import { getColorAction } from '../../styles/getter';

export const ExampleDiv = styled.div`
  background: ${(props) => getColorAction(theme.color, 'darkest', props)};
  /* background: ${() => theme.colors.primary[9]}; */
  width: 400px;
  height: 500px;
  font-family: 'Roboto';
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
