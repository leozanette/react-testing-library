import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from './utils/renderWithRouter';

describe('Testa os links de navegação', () => {
  test('testa se o link de navegação HOME esta no documento e funciona', () => {
    const { history } = renderWithRouter(<App />);

    const home = screen.getByRole('link', { name: 'Home' });
    expect(home).toBeInTheDocument();

    userEvent.click(home);
    const { pathname } = history.location;
    expect(pathname).toBe('/');
  });

  test('testa se o link de navegação About esta no documento e funciona', () => {
    const { history } = renderWithRouter(<App />);

    const about = screen.getByRole('link', { name: 'About' });
    expect(about).toBeInTheDocument();

    userEvent.click(about);
    const { pathname } = history.location;
    expect(pathname).toBe('/about');
  });

  test('testa se o link de navegação About esta no documento e funciona', () => {
    const { history } = renderWithRouter(<App />);

    const favoritePokemons = screen.getByRole('link', { name: 'Favorite Pokémons' });
    expect(favoritePokemons).toBeInTheDocument();

    userEvent.click(favoritePokemons);
    const { pathname } = history.location;
    expect(pathname).toBe('/favorites');
  });
});

// const favoritePokemons = screen.getByRole('link', { name: 'Favorite Pokémons' });
// expect(favoritePokemons).toBeInTheDocument();
