import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from './utils/renderWithRouter';

describe('Testa o component Pokemon', () => {
  test('testa o botao proximo pokemon', () => {
    renderWithRouter(<App />);

    const name = screen.getByTestId('pokemon-name');
    expect(name).toBeInTheDocument();

    const type = screen.getByTestId('pokemon-type');
    expect(type).toBeInTheDocument();

    const weight = screen.getByTestId('pokemon-weight');
    expect(weight).toBeInTheDocument();

    const fire = screen.getByRole('button', { name: 'Fire' });
    userEvent.click(fire);

    expect(name).toHaveTextContent(/charmander/i);
    expect(type).toHaveTextContent(/fire/i);
    expect(weight).toHaveTextContent(/8.5/i);

    const moreDetails = screen.getByRole('link', { name: 'More details' });
    expect(moreDetails).toBeInTheDocument();
    expect(moreDetails).toHaveProperty('href', 'http://localhost/pokemons/4');

    const img = screen.getByAltText('Charmander sprite');
    expect(img).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/0/0a/Spr_5b_004.png');

    userEvent.click(moreDetails);
    const checkbox = screen.getByRole('checkbox');
    userEvent.click(checkbox);

    const home = screen.getByRole('link', { name: 'Home' });
    userEvent.click(home);

    const fire2 = screen.getByRole('button', { name: 'Fire' });
    userEvent.click(fire2);

    const star = screen.getByAltText('Charmander is marked as favorite');
    expect(star).toHaveAttribute('src', '/star-icon.svg');
  });
});
