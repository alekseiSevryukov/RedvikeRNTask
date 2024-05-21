import React, {ReactElement, useCallback, useMemo, useState} from 'react';
import {ActivityIndicator, FlatList, Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {DefaultTheme} from '@react-navigation/native';
import {useGetPokemonsQuery} from '../../api';
import Input from '../../components/Input';
import PokeCard from '../../components/Card';
import styles from './styles';
import {IPokemon} from '../../api/types';

/**
 * Home component for displaying a list of Pokémon.
 *
 * This component fetches a list of Pokémon and displays them in a FlatList.
 * It handles loading, error and success states, and allows the user to search for Pokémon by name.
 *
 * @returns {ReactElement} The rendered Home component.
 */
const Home = (): ReactElement => {
  // State for the search query entered by the user.
  const [searchQuery, setSearchQuery] = useState('');

  // Get the safe area insets for the device.
  const insets = useSafeAreaInsets();

  // Callback for rendering each item in the FlatList.
  const renderItem = useCallback(({item}: {item: IPokemon}) => {
    return <PokeCard {...item} />;
  }, []);

  // Fetch the list of Pokémon.
  const {data: pokemons, isLoading, isError, error} = useGetPokemonsQuery(151);

  // Callback for extracting the key from each item in the FlatList.
  const keyExtractor = useCallback((item: IPokemon) => item.url, []);

  // Component to display when the list is empty.
  const ListEmptyComponent = useMemo(() => {
    if (!isLoading && searchQuery) {
      return (
        <View style={styles.listEmptyComponent}>
          <Text style={styles.title}>No Pokemons Found...</Text>
        </View>
      );
    } else {
      return null;
    }
  }, [isLoading, searchQuery]);

  // Component to display at the top of the list.
  const ListHeaderComponent = (
    <View style={styles.inputWrapper}>
      <Input
        placeholder="Search..."
        value={searchQuery}
        onChangeCallback={setSearchQuery}
      />
    </View>
  );

  // Component to display between each item in the list.
  const ItemSeparatorComponent = useCallback(
    () => <View style={styles.gap} />,
    [],
  );

  // Filter the list of Pokémon based on the search query.
  const data = pokemons?.filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLocaleLowerCase()),
  );

  // If there's an error, display an error message.
  if (isError) {
    const errorMessage =
      'status' in error
        ? 'error' in error
          ? error.error
          : JSON.stringify(error.data)
        : error.message;

    return (
      <View style={styles.listEmptyComponent}>
        <Text style={styles.title}>An error has occurred:</Text>
        <Text style={styles.title}>{errorMessage}</Text>
      </View>
    );
  }

  // If the data is still loading, display a loading spinner.
  if (isLoading) {
    return (
      <View style={styles.listEmptyComponent}>
        <ActivityIndicator
          size="large"
          color={DefaultTheme.colors.text}
          testID={'loading'}
        />
      </View>
    );
  }

  // If the data has loaded successfully, display the list of Pokémon.
  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      showsVerticalScrollIndicator={false}
      style={styles.wrapper}
      contentContainerStyle={{
        paddingBottom: insets.bottom ? insets.bottom : 16,
      }}
      ItemSeparatorComponent={ItemSeparatorComponent}
      ListHeaderComponent={ListHeaderComponent}
      ListEmptyComponent={ListEmptyComponent}
      keyboardDismissMode={'on-drag'}
    />
  );
};

export default Home;
