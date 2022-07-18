import React from 'react';
import { screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from './utils/renderWithRouter';

describe('Testa o component NotFound', () => {
  test('testa se o link de navegação HOME esta no documento e funciona', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/xablau');

    const notFound = screen.getByRole('heading', { name: /page requested not found/i });
    expect(notFound).toBeInTheDocument();

    const img = screen
      .getByAltText('Pikachu crying because the page requested was not found');
    expect(img).toHaveAttribute('src', 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif');
  });
});
