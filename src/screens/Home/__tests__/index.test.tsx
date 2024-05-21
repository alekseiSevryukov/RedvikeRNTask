import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {useGetPokemonsQuery} from '../../../api';
import Home from '../index';

jest.mock('@react-navigation/native', () => ({
  ...jest.requireActual('@react-navigation/native'),
  useNavigation: () => ({
    navigate: jest.fn(),
  }),
}));

jest.mock('react-native-safe-area-context', () => ({
  ...jest.requireActual('react-native-safe-area-context'),
  useSafeAreaInsets: () => ({bottom: 0}),
}));

jest.mock('../../../api', () => ({
  useGetPokemonsQuery: jest.fn(),
}));

describe('Home screen', () => {
  it('displays loading state', () => {
    (useGetPokemonsQuery as jest.Mock).mockReturnValue({isLoading: true});
    const {getByTestId} = render(<Home />);

    expect(getByTestId('loading')).toBeTruthy();
  });

  it('displays error state', async () => {
    (useGetPokemonsQuery as jest.Mock).mockReturnValue({
      isError: true,
      error: {message: 'Error message'},
    });
    const {findByText} = render(<Home />);

    expect(await findByText('An error has occurred:')).toBeTruthy();
    expect(await findByText('Error message')).toBeTruthy();
  });

  it('displays pokemon list', async () => {
    (useGetPokemonsQuery as jest.Mock).mockReturnValue({
      data: [
        {name: 'Test Pokemon 1', url: 'https://pokeapi.co/api/v2/pokemon/1/'},
        {name: 'Test Pokemon 2', url: 'https://pokeapi.co/api/v2/pokemon/2/'},
      ],
    });
    const {findByText} = render(<Home />);

    expect(await findByText('1. Test Pokemon 1')).toBeTruthy();
    expect(await findByText('2. Test Pokemon 2')).toBeTruthy();
  });

  it('filters pokemon list based on search query', async () => {
    (useGetPokemonsQuery as jest.Mock).mockReturnValue({
      data: [
        {name: 'Test Pokemon 1', url: 'https://pokeapi.co/api/v2/pokemon/1/'},
        {name: 'Test Pokemon 2', url: 'https://pokeapi.co/api/v2/pokemon/2/'},
      ],
    });
    const {queryByText, findByText, getByPlaceholderText} = render(<Home />);

    fireEvent.changeText(getByPlaceholderText('Search...'), '1');

    expect(await findByText('1. Test Pokemon 1')).toBeTruthy();
    expect(queryByText('2. Test Pokemon 2')).toBeNull();
  });
});
