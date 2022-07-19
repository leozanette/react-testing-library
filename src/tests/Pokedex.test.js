import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from './utils/renderWithRouter';

describe('Testa o component Pokedex', () => {
  test('testa o botao proximo pokemon', () => {
    renderWithRouter(<App />);

    const nextPokemon = screen.getByTestId('next-pokemon');
    expect(nextPokemon).toBeInTheDocument();

    userEvent.click(nextPokemon);
    const char = screen.getByText(/charmander/i);
    expect(char).toBeInTheDocument();

    const typeButtons = screen.getAllByTestId('pokemon-type-button');
    const seven = 7;
    expect(typeButtons).toHaveLength(seven);

    const allPokemon = screen.getByTestId('');
    expect(allPokemon).toBeInTheDocument();
    expect(allPokemon).toHaveTextContent(/all/i);

    userEvent.click(allPokemon);

    const pika = screen.getByText(/pikachu/i);
    expect(pika).toBeInTheDocument();

    const eletric = screen.getByRole('button', { name: 'Electric' });
    expect(eletric).toBeInTheDocument();

    const fire = screen.getByRole('button', { name: 'Fire' });
    expect(fire).toBeInTheDocument();

    const bug = screen.getByRole('button', { name: 'Bug' });
    expect(bug).toBeInTheDocument();

    const poison = screen.getByRole('button', { name: 'Poison' });
    expect(poison).toBeInTheDocument();

    const psychic = screen.getByRole('button', { name: 'Psychic' });
    expect(psychic).toBeInTheDocument();

    const dragon = screen.getByRole('button', { name: 'Dragon' });
    expect(dragon).toBeInTheDocument();
  });
});
