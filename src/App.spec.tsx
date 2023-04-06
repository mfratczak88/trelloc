import App from './App';
import { render, screen } from '@testing-library/react';

describe('App', () => {
  it('Shows hello world', () => {
    render(<App />);
    const message = screen.queryByText(/Hello world/i);
    expect(message).toBeVisible();
  });
});
