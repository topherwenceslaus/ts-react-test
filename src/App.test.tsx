import React from 'react';
import '@testing-library/jest-dom/extend-expect'
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

it('renders heading', () => {
  render(<App />);

  const heading = screen.getByRole('heading');

  expect(heading).toHaveTextContent('Create React App example with TypeScript');
});

it('renders current year', () => {
  render(<App />);

  const copyright = screen.getByText('Copyright © ', { exact: false });
  const currentYear = new Date().getFullYear();

  expect(copyright).toHaveTextContent(`${currentYear}`);
});

it('increments current year by one when button is clicked', () => {
  render(<App />);

  const button = screen.getByRole('button');

  fireEvent.click(button);

  const copyright = screen.getByText('Copyright © ', { exact: false });
  const currentYear = new Date().getFullYear();
  const nextYear = currentYear + 1;

  expect(copyright).toHaveTextContent(`${nextYear}`);
});

it('changes heading color to `secondary` and disables button when button is clicked', () => {
  render(<App />);

  const heading = screen.getByRole('heading');
  const button = screen.getByRole('button');

  fireEvent.click(button);

  expect(button).toBeDisabled();
  expect(heading).toHaveStyle('color: rgb(245, 0, 87)');
});
