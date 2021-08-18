/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import MovieList from './src/pages/MovieList';
import MovieDetails from './src/pages/MovieDetails';

const App = () => {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen component={MovieList} name="Listagem" />
        <Stack.Screen component={MovieDetails} name="Detalhes" />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
