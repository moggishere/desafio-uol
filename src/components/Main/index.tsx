import * as S from './styles';

import * as D from '../../styles/pagesStyles';

import Intro from '../Intro';

const Main = ({
  title = 'React Avançado',
  description = 'TypeScript, ReactJS, NextJS e Styled Components'
}) => (
  <D.PageContainer>
    <D.GreetingContainer>
      <Intro />
    </D.GreetingContainer>
  </D.PageContainer>
);

export default Main;
