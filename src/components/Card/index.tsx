import React, {memo, ReactElement} from 'react';
import {Image, Platform, Pressable, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import ImageSources from '../../assets/png/index';
import styles from './styles';
import {MainStackParamList} from '../../navigation/types';
import {IPokemon} from '../../api/types';

/**
 * Card component for displaying Pokémon information.
 *
 * @param {IPokemon} props - The properties passed to the component.
 * @param {string} props.name - The name of the Pokémon.
 * @param {string} props.url - The URL of the Pokémon's details.
 *
 * @returns {ReactElement} The rendered Input component.
 */
const Card = ({name, url}: IPokemon): ReactElement => {
  /**
   * Use the navigation hook from react-navigation to navigate between screens.
   * @type {NativeStackNavigationProp<MainStackParamList>}
   */
  const navigation: NativeStackNavigationProp<MainStackParamList> =
    useNavigation<NativeStackNavigationProp<MainStackParamList>>();

  /**
   * Split the URL into an array and extract the Pokémon ID from the second last element.
   * @type {number}
   */
  const id: number = Number(url.split('/')[url.split('/').length - 2]);

  /**
   * Handle the press event on the card.
   * Navigate to the Details screen with the Pokémon ID as a parameter.
   * @returns {void}
   */
  const onCardPress = (): void => {
    navigation.navigate('Details', {id});
  };

  /**
   * Render the card with the Pokémon image and name.
   * The card is pressable and navigates to the Details screen on press.
   */
  return (
    <Pressable
      style={({pressed}) => [
        styles.buttonContainer,
        Platform.OS === 'ios' && pressed && styles.pressedButtonContainer,
      ]}
      android_ripple={{
        color: 'rgba(0,0,0,0.1)',
        borderless: false,
      }}
      onPress={onCardPress}>
      <View style={styles.container}>
        <Image
          style={styles.img}
          source={ImageSources[id]}
          resizeMode={'cover'}
        />
        <Text style={styles.title}>
          {id}. {name}
        </Text>
      </View>
    </Pressable>
  );
};

export default memo(Card);
