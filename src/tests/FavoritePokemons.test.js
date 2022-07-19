import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from './utils/renderWithRouter';

describe('Testa o component Favorite Pokemons', () => {
  test('testa se o componente mostra a frase no favorite pokemon found', () => {
    renderWithRouter(<App />);

    const favoritePokemons = screen.getByRole('link', { name: 'Favorite Pokémons' });
    expect(favoritePokemons).toBeInTheDocument();

    userEvent.click(favoritePokemons);
    const none = screen.getByText(/no favorite pokemon found/i);
    expect(none).toBeInTheDocument();
  });
});
