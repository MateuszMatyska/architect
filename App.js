/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import AppNav from './src/navigation/AppNavigation';
import {Provider} from 'react-redux';
import {createAppStore} from './src/flux/store/store';

export default function App() {
  return (
    <Provider store={createAppStore}>
      <NavigationContainer>
        <AppNav />
      </NavigationContainer>
    </Provider>
  );
}
