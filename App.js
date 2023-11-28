/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {
  StatusBar
} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import MainStack from './src/navigations/MainStack';
import { store } from './src/utils/store';
import { Provider } from 'react-redux';

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <StatusBar barStyle={'dark-content'} />
        <NavigationContainer>
          <MainStack />
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>


  )
}

export default App;
