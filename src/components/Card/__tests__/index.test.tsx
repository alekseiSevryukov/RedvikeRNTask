import React from 'react';
import {render} from '@testing-library/react-native';
import {NavigationContainer} from '@react-navigation/native';
import Card from '../index';

jest.mock('@react-navigation/native', () => ({
  ...jest.requireActual('@react-navigation/native'),
}));

describe('Card component', () => {
  it('renders correctly with initial props', () => {
    const {getByText} = render(
      <NavigationContainer>
        <Card name="Test Pokemon" url="https://pokeapi.co/api/v2/pokemon/1/" />,
      </NavigationContainer>,
    );

    expect(getByText('1. Test Pokemon')).toBeTruthy();
  });
});
