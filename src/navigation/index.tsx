import React, {ReactElement} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {DefaultTheme} from '@react-navigation/native';
import Home from '../screens/Home';
import Details from '../screens/Details';
import styles from './styles';
import {MainStackParamList} from './types';

const MainStack = createNativeStackNavigator<MainStackParamList>();

/**
 * Navigation component for the application.
 *
 * This component sets up the main navigation for the application, including the Home and Details screens.
 * It also sets up the default options for the navigation header, such as the title, styles, and visibility of certain elements.
 *
 * @returns {ReactElement} The rendered navigation component.
 */
const Navigation = (): ReactElement => {
  return (
    <MainStack.Navigator
      screenOptions={{
        title: 'Pokédex', // The title displayed in the navigation header.
        headerTitleStyle: styles.headerTitleStyle, // The style for the title in the navigation header.
        headerStyle: styles.headerStyle, // The style for the navigation header.
        headerShadowVisible: false, // Whether the shadow under the header should be visible.
        headerTitleAlign: 'center', // The alignment of the title in the navigation header.
        headerBackTitleVisible: false, // Whether the back button title should be visible in the navigation header.
        headerTintColor: DefaultTheme.colors.primary, // The tint color for the navigation header.
      }}>
      <MainStack.Screen name="Home" component={Home} />
      <MainStack.Screen name="Details" component={Details} />
    </MainStack.Navigator>
  );
};

export default Navigation;
