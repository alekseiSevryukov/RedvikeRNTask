import {StyleSheet} from 'react-native';
import {DefaultTheme} from '@react-navigation/native';

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: DefaultTheme.colors.background,
    paddingHorizontal: 16,
  },
  header: {
    alignSelf: 'center',
    padding: 16,
  },
  title: {
    fontSize: 30,
    lineHeight: 36,
    fontWeight: 'bold',
    color: DefaultTheme.colors.text,
  },
  inputWrapper: {
    paddingBottom: 15,
  },
  listEmptyComponent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: DefaultTheme.colors.background,
  },
  gap: {
    height: 8,
  },
});

export default styles;
