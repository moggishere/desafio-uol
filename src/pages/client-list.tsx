import React, { useState } from 'react';

import Input from '../components/Input';
interface Customer {
  id: string;
  name: string;
  email: string;
  phone: string;
  status: string;
}

interface CustomerListProps {
  customers: Customer[];
}

const CustomerList: React.FC<CustomerListProps> = ({ customers }) => {
  return (
    <div>
      <h1>Customer List</h1>
      <ul>
        {customers.map((customer, index) => (
          <li key={index}>{customer.name}</li>
        ))}
      </ul>
    </div>
  );
};

const ClientList = ({ jsonData }: { jsonData: any }) => {
  const [userSearchQuery, setUserSearchQuery] = useState('');

  return (
    <div>
      <Input label={'label'} setUserSearchQuery={setUserSearchQuery} />
      <h1>{userSearchQuery}</h1>
      <h1>Customers Page</h1>
      {jsonData ? (
        <>
          <CustomerList customers={jsonData.customers} />
        </>
      ) : (
        <></>
      )}
    </div>
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
