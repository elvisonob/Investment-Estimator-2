import { render, screen, waitFor } from '@testing-library/react';
import user from '@testing-library/user-event';
import App from './App';

test('access landing page', () => {
  render(<App />);
  const title = screen.getByText('Hi there!');
  expect(title).toBeInTheDocument();
});
