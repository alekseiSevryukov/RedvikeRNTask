import React from 'react';
import {render, waitFor} from '@testing-library/react-native';
import Details from '../index';
import {useGetPokemonByIdQuery} from '../../../api';

jest.mock('@react-navigation/native', () => ({
  ...jest.requireActual('@react-navigation/native'),
  useRoute: () => ({
    params: {
      id: 1,
    },
  }),
}));

jest.mock('../../../api', () => ({
  useGetPokemonByIdQuery: jest.fn(),
}));

jest.mock('react-native-safe-area-context', () => ({
  ...jest.requireActual('react-native-safe-area-context'),
  useSafeAreaInsets: () => ({bottom: 0}),
}));

describe('Details screen', () => {
  it('displays loading state', () => {
    (useGetPokemonByIdQuery as jest.Mock).mockReturnValue({isLoading: true});
    const {getByTestId} = render(<Details />);

    expect(getByTestId('loading')).toBeTruthy();
  });

  it('displays error state', async () => {
    (useGetPokemonByIdQuery as jest.Mock).mockReturnValue({
      isError: true,
      error: {message: 'Error message'},
    });
    const {findByText} = render(<Details />);

    expect(await findByText('An error has occurred:')).toBeTruthy();
    expect(await findByText('Error message')).toBeTruthy();
  });

  it('displays pokemon details', async () => {
    (useGetPokemonByIdQuery as jest.Mock).mockReturnValue({
      data: {
        name: 'Test Pokemon',
        id: 1,
        types: [{type: {name: 'fire'}}],
        height: 10,
        weight: 100,
        base_experience: 200,
        stats: [{stat: {name: 'hp'}, base_stat: 50}],
      },
    });
    const {findByText} = render(<Details />);

    await waitFor(() => {
      expect(findByText('Test Pokemon')).toBeTruthy();
      expect(findByText('Id: 1')).toBeTruthy();
      expect(findByText('Types: fire')).toBeTruthy();
      expect(findByText('Height: 10')).toBeTruthy();
      expect(findByText('Weight: 100')).toBeTruthy();
      expect(findByText('Base exp: 200')).toBeTruthy();
      expect(findByText('HP: 50')).toBeTruthy();
    });
  });
});
