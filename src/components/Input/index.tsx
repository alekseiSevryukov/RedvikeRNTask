import React, {ReactElement} from 'react';
import {Platform, TextInput} from 'react-native';
import {DefaultTheme} from '@react-navigation/native';
import styles from './styles';
import {InputProps} from './types';

/**
 * Input component for handling user input.
 *
 * This component is a wrapper around the native TextInput component, with some additional props and styles.
 * It disables autoCorrect, spellCheck, autoComplete, and autoCapitalize for the input.
 * It also sets the cursor color and placeholder text color to the text color from the default theme.
 * The keyboardType is set to 'visible-password' on Android and 'default' on other platforms.
 *
 * @param {object} props - The props for the component.
 * @param {string} props.placeholder - The placeholder text for the input.
 * @param {string} props.value - The current value of the input.
 * @param {function} props.onChangeCallback - The function to call when the input value changes.
 *
 * @returns {ReactElement} The rendered Input component.
 */
const Input = ({
  placeholder,
  value,
  onChangeCallback,
}: InputProps): ReactElement => {
  return (
    <TextInput
      style={styles.input}
      autoCorrect={false}
      spellCheck={false}
      autoComplete={'off'}
      autoCapitalize={'none'}
      cursorColor={DefaultTheme.colors.text}
      keyboardType={Platform.OS === 'android' ? 'visible-password' : 'default'}
      placeholder={placeholder}
      placeholderTextColor={DefaultTheme.colors.text}
      value={value}
      onChangeText={onChangeCallback}
    />
  );
};

export default Input;
