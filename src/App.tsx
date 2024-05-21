import React, {ReactElement} from 'react';
import {Provider} from 'react-redux';
import store from './store';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Navigation from './navigation';
import {StatusBar} from 'react-native';

/**
 * App component that sets up the application.
 *
 * This component sets up the status bar and provides the Redux store, safe area context, and navigation container to the rest of the application.
 * It renders the Navigation component, which is responsible for managing the application's navigation stack.
 *
 * @returns {ReactElement} The rendered App component.
 */
const App = (): ReactElement => {
  return (
    <>
      {/* The status bar is configured with a transparent background, dark content, and is set to be translucent. */}
      <StatusBar
        backgroundColor="transparent"
        translucent={true}
        barStyle={'dark-content'}
      />
      {/* The Redux store is provided to the rest of the application. */}
      <Provider store={store}>
        {/* The safe area context is provided to the rest of the application. */}
        <SafeAreaProvider>
          {/* The navigation container is provided to the rest of the application. */}
          <NavigationContainer>
            {/* The Navigation component is rendered. */}
            <Navigation />
          </NavigationContainer>
        </SafeAreaProvider>
      </Provider>
    </>
  );
};

export default App;
