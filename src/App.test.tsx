import { render, screen } from '@testing-library/react';
import App from './App';
import React from 'react';

test('renders learnreact link',() =>{
  render(<App />);
  const linkElement = screen.getByText(/hello/i);
  expect(linkElement).toBeInTheDocument();
})