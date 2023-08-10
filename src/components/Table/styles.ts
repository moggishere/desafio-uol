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
  border: 1px solid transparent;
  border-collapse: collapse;
  border-spacing: ${(props) => getSpacing('micro', props)};
  margin: 0;
  padding: ${(props) => getSpacing('xs', props)};
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
  /* border: 1px solid #ddd; */
  /* padding: 0.35em; */
`;

export const TableHeader = styled.th`
  padding-bottom: ${(props) => getSpacing('micro', props)};
  /* padding: 0.625em; */
  text-align: left;
  font-size: 0.85em;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${(props) => getColorNeutral('medium-02', props)};
  border-bottom: ${(props) =>
    getStroke('100', props) + ' ' + getColorNeutral('medium-01', props)};

  padding-right: ${(props) => getSpacing('micro', props)};

  &:first-child {
    padding-left: ${(props) => getSpacing('micro', props)};
  }
`;

export const TableCell = styled.td`
  padding: 0;
  /* padding: 0.625em; */
  text-align: left;
  min-width: 8.4rem;

  font-size: ${(props) => getSize('base', props)};
  color: ${(props) => getColorNeutral('medium-01', props)};
  border-bottom: ${(props) =>
    getStroke('100', props) + ' ' + getColorNeutral('medium-04', props)};
  padding-right: ${(props) => getSpacing('micro', props)};
  padding-top: ${(props) => getSpacing('xxs', props)};
  padding-bottom: ${(props) => getSpacing('xxxs', props)};

  &:first-child {
    padding-left: ${(props) => getSpacing('micro', props)};
  }
`;

export const TableWrapper = styled.div`
  border: ${(props) =>
    getStroke('100', props) + getColorNeutral('medium-02', props)};
  padding: ${(props) =>
    getSpacing('xs', props) +
    ' ' +
    getSpacing('xs', props) +
    ' ' +
    getSpacing('xxs', props) +
    ' ' +
    getSpacing('xs', props)};
  border-radius: ${(props) => getRadius('300', props)};
  font-family: ${(props) => getFontFamily('default', props)};
  width: fit-content;

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
      text-align: left;
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
