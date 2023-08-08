import * as S from './styles';

import Example from '../Example';

const Main = ({
  title = 'React Avançado',
  description = 'TypeScript, ReactJS, NextJS e Styled Components'
}) => (
  <S.Wrapper>
    <Example />
  </S.Wrapper>
);

export default Main;
