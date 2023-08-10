import React, { useState } from 'react';

import * as S from '../styles/pagesStyles';

import Input from '../components/Input';
import Table from '../components/Table/Table';
interface Customer {
  id: string;
  name: string;
  email: string;
  phone: string;
  status: string;
}

const ClientList = ({ jsonData }: { jsonData: any }) => {
  const [userSearchQuery, setUserSearchQuery] = useState('');
  const [queryType, setQueryType] = useState('email');

  const tableColumns = ['id', 'name', 'email', 'phone', 'status'];

  return (
    <S.PageContainer>
      <S.ClientListContainer>
        <Input
          label={'filtrar clientes'}
          setUserSearchQuery={setUserSearchQuery}
        />

        {jsonData ? (
          <>
            <Table
              query={userSearchQuery}
              queryType={queryType}
              columns={tableColumns}
              customers={jsonData.customers}
            />
          </>
        ) : (
          <></>
        )}
      </S.ClientListContainer>
    </S.PageContainer>
  );
};

export async function getServerSideProps() {
  try {
    const endpointUrl = 'http://test-frontend-uolpp.web.app/customers.json';
    const response = await fetch(endpointUrl);

    if (!response.ok) {
      throw new Error(`Request failed with status: ${response.status}`);
    }

    const jsonData = await response.json();

    return {
      props: {
        jsonData
      }
    };
  } catch (error) {
    console.error('Error in getServerSideProps:', error);
    return {
      props: {
        customers: []
      }
    };
  }
}

export default ClientList;
