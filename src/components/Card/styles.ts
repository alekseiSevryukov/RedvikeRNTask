import {StyleSheet} from 'react-native';
import {DefaultTheme} from '@react-navigation/native';

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: DefaultTheme.colors.card,
    borderRadius: 10,
    padding: 16,
    borderWidth: 1,
    borderColor: DefaultTheme.colors.border,
  },
  pressedButtonContainer: {
    opacity: 0.8,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  img: {
    width: 100,
    height: 100,
  },
  title: {
    marginLeft: 16,
    fontSize: 22,
    lineHeight: 28,
    fontWeight: '600',
    color: DefaultTheme.colors.text,
  },
});

export default styles;
