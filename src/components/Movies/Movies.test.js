import React from 'react';
import { render } from '@testing-library/react';
import Movies from './Movies';

test('renders initial prompt', () => {
  const { getByText } = render(<Movies />);
  const linkElement = getByText(/Movies/i);
  expect(linkElement).toBeInTheDocument();
});
