import React, { useState } from 'react';

import * as S from '../styles/pagesStyles';

import Input from '../components/Input';
import Table from '../components/Table/Table';
import Select from '../components/Select';
interface Customer {
  id: string;
  name: string;
  email: string;
  phone: string;
  status: string;
}

const ClientList = ({ jsonData }: { jsonData: any }) => {
  const tableColumns = ['id', 'name', 'email', 'phone', 'status'];
  const [userSearchQuery, setUserSearchQuery] = useState('');
  const [queryType, setQueryType] = useState(tableColumns[2]);

  return (
    <S.PageContainer>
      <S.ClientListContainer>
        <S.InputFieldsContainer>
          <Input
            label={'filtrar clientes'}
            setUserSearchQuery={setUserSearchQuery}
          />
          <Select
            queryType={queryType}
            label={'campo de filtro'}
            setQueryType={setQueryType}
            options={tableColumns}
          />
        </S.InputFieldsContainer>

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
