import {ActivityIndicator, Image, ScrollView, Text, View} from 'react-native';
import styles from './styles';
import ImageSources from '../../assets/png';
import {useGetPokemonByIdQuery} from '../../api';
import React, {ReactElement} from 'react';
import {DefaultTheme, RouteProp, useRoute} from '@react-navigation/native';
import {MainStackParamList} from '../../navigation/types';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

/**
 * Details component for displaying detailed information about a specific Pokémon.
 *
 * This component fetches data about a Pokémon using its ID from the route parameters.
 * It handles loading, error and success states.
 *
 * @returns {ReactElement} The rendered Details component.
 */
const Details = (): ReactElement => {
  // Get the safe area insets for the device.
  const insets = useSafeAreaInsets();
  // Get the route parameters.
  const {params} = useRoute<RouteProp<MainStackParamList, 'Details'>>();

  // Fetch the Pokémon data using its ID from the route parameters.
  const {
    data: pokemon,
    isLoading,
    isError,
    error,
  } = useGetPokemonByIdQuery(params.id);

  // If there's an error, display an error message.
  if (isError) {
    const errorMessage =
      'status' in error
        ? 'error' in error
          ? error.error
          : JSON.stringify(error.data)
        : error.message;

    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.title}>An error has occurred:</Text>
        <Text style={styles.title}>{errorMessage}</Text>
      </View>
    );
  }

  // If the data is still loading, display a loading spinner.
  if (isLoading) {
    return (
      <View style={styles.emptyContainer}>
        <ActivityIndicator
          size="large"
          color={DefaultTheme.colors.text}
          testID={'loading'}
        />
      </View>
    );
  }

  // If the data has loaded successfully, display the Pokémon details.
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={[
        styles.contentContainer,
        {paddingBottom: insets.bottom ? insets.bottom : 16},
      ]}>
      <View style={styles.pokemonContainer}>
        <Image style={styles.img} source={ImageSources[params.id]} />
        <View style={styles.descriptionContainer}>
          <Text style={styles.title}>{pokemon?.name}</Text>
          <Text style={styles.text}>Id: {pokemon?.id}</Text>
          <Text style={styles.text}>
            Types: {pokemon?.types.map(item => item.type.name).join(', ')}
          </Text>
        </View>
      </View>

      <View style={styles.paramsContainer}>
        <Text style={styles.title}>Parameters</Text>
        <Text style={styles.text}>Height: {pokemon?.height}</Text>
        <Text style={styles.text}>Weight: {pokemon?.weight}</Text>
        <Text style={styles.text}>Base exp: {pokemon?.base_experience}</Text>
      </View>

      <Text style={styles.stats}>Stats:</Text>
      {pokemon?.stats.map((item, index) => (
        <Text key={index}>
          <Text style={styles.text}>
            {item.stat.name.toLocaleUpperCase()}: {item.base_stat}
          </Text>
        </Text>
      ))}
    </ScrollView>
  );
};

export default Details;
