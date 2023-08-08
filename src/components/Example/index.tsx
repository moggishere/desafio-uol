import * as S from './styles';

const Example = () => {
  return (
    <>
      <S.ExampleDiv>
        {'Seja bem-vindo'}
        <S.ExampleButton>Teste button</S.ExampleButton>
      </S.ExampleDiv>
    </>
  );
};

export default Example;

// export const getServerSideProps: GetServerSideProps = async () => {
//   try {
//     const endpointUrl = 'http://test-frontend-uolpp.web.app/customers.json'; // Replace with your endpoint URL
//     const jsonData = await fetch(endpointUrl);

//     console.log('***happens');

//     return {
//       props: {
//         jsonData
//       }
//     };
//   } catch (error) {
//     console.error('Error in getServerSideProps:', error);
//     return {
//       props: {}
//     };
//   }
// };
