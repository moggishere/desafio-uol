import styled, { css } from 'styled-components';

import {
  getColorAction,
  getColorNeutral,
  getColorAlert,
  getFontFamily,
  getWeight,
  getSize,
  getLineHeight,
  getSpacing,
  getSquish,
  getStroke,
  getRadius
} from '../../styles/getters';

export const Table = styled.table`
  border: 1px solid #ccc;
  border-collapse: collapse;
  margin: 0;
  padding: ${(props) => getSpacing('xs', props)}px;
  /* width: 100%; */
  max-width: 1024px;
  table-layout: fixed;
`;

export const Caption = styled.caption`
  font-size: 1.5em;
  margin: 0.5em 0 0.75em;
`;

export const TableRow = styled.tr`
  background-color: ${(props) => getColorNeutral('lightest', props)};
  border: 1px solid #ddd;
  padding: 0.35em;
`;

export const TableHeader = styled.th`
  padding: 0.625em;
  text-align: center;
  font-size: 0.85em;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  border-bottom: ${(props) => getStroke('100', props)};
`;

export const TableCell = styled.td`
  padding: 0.625em;
  text-align: center;
  font-size: 0.8em;
`;

export const TableWrapper = styled.div`
  @media screen and (max-width: 600px) {
    border: 0;

    ${Caption} {
      font-size: 1.3em;
    }

    thead {
      border: none;
      clip: rect(0 0 0 0);
      height: 1px;
      margin: -1px;
      overflow: hidden;
      padding: 0;
      position: absolute;
      width: 1px;
    }

    ${TableRow} {
      border-bottom: 3px solid #ddd;
      display: block;
      margin-bottom: 0.625em;
    }

    ${TableCell} {
      border-bottom: 1px solid #ddd;
      display: block;
      font-size: 0.8em;
      text-align: right;
    }

    ${TableCell}::before {
      content: attr(data-label);
      float: left;
      font-weight: bold;
      text-transform: uppercase;
    }

    ${TableCell}:last-child {
      border-bottom: 0;
    }
  }
`;
