import {StyleSheet} from 'react-native';
import {DefaultTheme} from '@react-navigation/native';

const styles = StyleSheet.create({
  headerTitleStyle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: DefaultTheme.colors.primary,
  },
  headerStyle: {
    backgroundColor: DefaultTheme.colors.background,
  },
});

export default styles;
