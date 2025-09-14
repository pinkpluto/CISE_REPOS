import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders count text', () => {
  render(<App />);
  const countElement = screen.getByText(/Count: 0/i);
  expect(countElement).toBeInTheDocument();
});

test('renders increment button', () => {
  render(<App />);
  const buttonElement = screen.getByText(/Increment count/i);
  expect(buttonElement).toBeInTheDocument();
});

describe('Addition', () => {
  it('knows that 2 and 2 make 4', () => {
    expect(2 + 2).toBe(4);
  });
});