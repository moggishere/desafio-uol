import React, { useState, useEffect, TableHTMLAttributes } from 'react';

import { filterObjectsBySubstring } from '../../utils/helpers';

import * as S from './styles';

import Cells from './Cells';

interface Customer {
  id: string;
  name: string;
  email: string;
  phone: string;
  status: string;
}

export interface TableProps extends TableHTMLAttributes<HTMLTableElement> {
  query?: string;
  queryType?: string;
  columns?: Array<string>;
  customers?: Customer[];
  caption?: string;
};

const Table: React.FC<TableProps> = React.memo(
  ({
    query = '',
    queryType = 'email',
    columns = ['No columns'],
    customers = [],
    caption = ''
  }) => {
    const [queryResult, setQueryResult] = useState([...customers]);
    useEffect(() => {
      let filteredArr = filterObjectsBySubstring(customers, queryType, query);
      setQueryResult(filteredArr);
      return;
    }, [query, queryType]);

    return (
      <S.TableWrapper $arrIsEmpty={!queryResult.length ? true : false}>
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
            {queryResult.map((individualCustomerData, index) => (
              <S.TableRow data-label={`row-${index}`} key={`row-${index}`}>
                <Cells
                  customerData={individualCustomerData}
                  columns={columns}
                  key={`row-${index}`}
                />
              </S.TableRow>
            ))}
          </tbody>
        </S.Table>
      </S.TableWrapper>
    );
  }
);

export default Table;
