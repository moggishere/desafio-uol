import React from 'react';
import { render } from '@testing-library/react';

import Main from '.';

test('renders Main component', () => {
  const { getByText } = render(<Main />);

  // Check for your default title and description
  const titleElement = getByText(/React Avançado/i);
  const descriptionElement = getByText(/TypeScript, ReactJS, NextJS e Styled Components/i);

  expect(titleElement).toBeInTheDocument();
  expect(descriptionElement).toBeInTheDocument();

  // Check if Intro component is rendered
  const introElement = getByText(/Seja bem-vindo/i);
  expect(introElement).toBeInTheDocument();
});
