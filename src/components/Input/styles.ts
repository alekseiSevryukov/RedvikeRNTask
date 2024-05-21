import {StyleSheet} from 'react-native';
import {DefaultTheme} from '@react-navigation/native';

const styles = StyleSheet.create({
  input: {
    height: 60,
    padding: 14,
    borderRadius: 10,
    backgroundColor: DefaultTheme.colors.card,
    fontSize: 14,
    lineHeight: 20,
    color: DefaultTheme.colors.text,
    borderWidth: 1,
    borderColor: DefaultTheme.colors.border,
    textAlignVertical: 'center',
  },
});

export default styles;
