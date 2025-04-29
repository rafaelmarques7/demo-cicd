import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders "Rafa is here!" text', () => {
  render(<App />);
  const textElement = screen.getByText(/Rafa is here!/i);
  expect(textElement).toBeInTheDocument();
});