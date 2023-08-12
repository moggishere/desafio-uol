import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Input from '.';

describe('Input Component', () => {
  test('renders with default values', () => {
    const { container } = render(<Input />);
    const inputElement = container.querySelector('#finput') as HTMLInputElement;

    // Check if the input element is rendered
    expect(inputElement).toBeInTheDocument();
  });

  test('updates inputValue on input change', () => {
    const { getByRole } = render(<Input />);
    const inputElement = getByRole('textbox') as HTMLInputElement;

    // Simulate typing into the input
    fireEvent.change(inputElement, { target: { value: 'Bom dia!' } });

    // Check if inputValue state has been updated
    expect(inputElement.value).toBe('Bom dia!');
  });

  test('handles onBlur and onFocus events', () => {
    const { getByTestId } = render(<Input />);
    const inputElement = getByTestId('input-element') as HTMLInputElement;

    // Trigger onFocus event
    fireEvent.focus(inputElement);

    // Trigger onBlur event
    fireEvent.blur(inputElement);

    expect(document.activeElement).not.toBe(inputElement);
  });
});
