import {TextInputProps} from 'react-native';

export type InputProps = TextInputProps & {
  value: string;
  onChangeCallback: (text: string) => void;
  placeholder: string;
};
