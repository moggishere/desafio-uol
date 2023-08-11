import styled from 'styled-components';
import { getSpacing } from './getters';

export const PageContainer = styled.main`
  width: 100%;
  height: 100%;
`;

export const ClientListContainer = styled.div`
  width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: ${(props) => getSpacing('md', props)};
  padding: ${(props) => getSpacing('lg', props)};
`;

export const InputFieldsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${(props) => getSpacing('md', props)};
`;
