import {StyleSheet} from 'react-native';
import {DefaultTheme} from '@react-navigation/native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: DefaultTheme.colors.background,
    flex: 1,
  },
  contentContainer: {
    paddingHorizontal: 16,
  },
  emptyContainer: {
    flex: 1,
    paddingHorizontal: 16,
    justifyContent: 'center',
  },
  pokemonContainer: {
    flexDirection: 'row',
    marginBottom: 32,
  },
  img: {
    width: 150,
    height: 150,
    resizeMode: 'cover',
  },
  descriptionContainer: {
    flex: 1,
    marginLeft: 16,
    justifyContent: 'center',
  },
  title: {
    flexWrap: 'wrap',
    fontSize: 30,
    lineHeight: 36,
    fontWeight: 'bold',
    color: DefaultTheme.colors.text,
  },
  text: {
    flexWrap: 'wrap',
    fontSize: 20,
    lineHeight: 26,
    color: DefaultTheme.colors.text,
  },
  paramsContainer: {
    marginBottom: 24,
  },
  stats: {
    fontSize: 30,
    lineHeight: 36,
    fontWeight: 'bold',
    color: DefaultTheme.colors.text,
  },
  spinnerWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
