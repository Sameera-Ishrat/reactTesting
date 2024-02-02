import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learnreact link',() =>{
  render(<App />);
  const linkElement = screen.getByText(/hello/i);
  expect(linkElement).toBeInTheDocument();
})