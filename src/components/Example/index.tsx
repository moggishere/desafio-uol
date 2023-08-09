import * as S from './styles';

import Button from '../Button/Button';

const Example = () => {
  return (
    <>
      <S.ExampleDiv>
        {'Seja bem-vindo'}
        <a href="/client-list">
          <Button>Carregar lista de clientes</Button>
        </a>
      </S.ExampleDiv>
    </>
  );
};

export default Example;
