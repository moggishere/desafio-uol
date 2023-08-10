import React from 'react';

import * as S from './styles';

import Cells from './Cells';

interface Customer {
  id: string;
  name: string;
  email: string;
  phone: string;
  status: string;
}

export type TableProps = {
  query?: string;
  columns?: Array<string>;
  customers?: Customer[];
  caption?: string;
};

const Table: React.FC<TableProps> = ({
  query = '',
  columns = ['No columns'],
  customers = [],
  caption = ''
}) => {
  return (
    <S.TableWrapper>
      <S.Table>
        {caption ? <S.Caption>{caption ? caption : ''}</S.Caption> : <></>}
        <thead>
          <S.TableRow>
            {columns.map((header, index) => (
              <S.TableHeader key={`header-${header}-${index}`}>
                {header ? header : 'Header'}
              </S.TableHeader>
            ))}
          </S.TableRow>
        </thead>
        <tbody>
          {customers.map((individualCustomerData, index) => (
            <S.TableRow data-label={`row-${index}`}>
              <Cells customerData={individualCustomerData} columns={columns} />
            </S.TableRow>
          ))}
        </tbody>
      </S.Table>
    </S.TableWrapper>
  );
};

export default Table;
