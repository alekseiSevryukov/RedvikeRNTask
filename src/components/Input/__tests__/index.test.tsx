import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import Input from '../index';

describe('Input component', () => {
  it('renders correctly with initial props', () => {
    const onChangeMock = jest.fn();
    const {getByPlaceholderText} = render(
      <Input
        placeholder="Test Placeholder"
        value=""
        onChangeCallback={onChangeMock}
      />,
    );

    expect(getByPlaceholderText('Test Placeholder')).toBeTruthy();
  });

  it('calls onChangeCallback when text is changed', () => {
    const onChangeMock = jest.fn();
    const {getByPlaceholderText} = render(
      <Input
        placeholder="Test Placeholder"
        value=""
        onChangeCallback={onChangeMock}
      />,
    );

    fireEvent.changeText(getByPlaceholderText('Test Placeholder'), 'test');

    expect(onChangeMock).toHaveBeenCalledWith('test');
  });

  it('displays the correct initial value', () => {
    const onChangeMock = jest.fn();
    const {getByDisplayValue} = render(
      <Input
        placeholder="Test Placeholder"
        value="Initial Value"
        onChangeCallback={onChangeMock}
      />,
    );

    expect(getByDisplayValue('Initial Value')).toBeTruthy();
  });
});
