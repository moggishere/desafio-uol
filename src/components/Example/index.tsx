import { useEffect } from 'react';

import * as S from './styles';

import { fetchFromEndpoint } from '../../utils/getFromEndpoint';

// const Another = styled.div`
//   color: ${theme.color("primary", 5)};
//   margin-top: ${theme.space(2)};
// `;

const Example = (props) => {
  useEffect(() => {
    fetchFromEndpoint('http://test-frontend-uolpp.web.app/customers.json').then(
      (res) => {
        console.log('***res', res);
      }
    );
  }, []);

  return (
    <>
      <S.ExampleDiv>this is Roboto</S.ExampleDiv>
    </>
  );
};

export default Example;
