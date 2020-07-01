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

export default function App() {
  return (
    <NavigationContainer>
      <AppNav />
    </NavigationContainer>
  );
}
