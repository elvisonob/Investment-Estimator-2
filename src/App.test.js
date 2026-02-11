import { render, screen, waitFor } from '@testing-library/react';
import user from '@testing-library/user-event';
import App from './App';

test('access landing page', () => {
  render(<App />);
  const startAmount = screen.getByText(/starting Amount/i);
  const returnRate = screen.getByText(/return rate/i);
  const duration = screen.getByText(/duration/i);
  expect(startAmount).toBeInTheDocument();
  expect(returnRate).toBeInTheDocument();
  expect(duration).toBeInTheDocument();
});
