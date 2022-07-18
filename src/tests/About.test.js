import React from 'react';
import { screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from './utils/renderWithRouter';

describe('Testa o component About', () => {
  test('testa se o link de navegação HOME esta no documento e funciona', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/about');

    const about = screen.getByRole('heading', { name: /About Pokédex/i });
    expect(about).toBeInTheDocument();

    const img = screen.getByAltText('Pokédex');
    expect(img).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png');
  });
});
