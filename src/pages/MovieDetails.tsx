import {useRoute} from '@react-navigation/native';
import React from 'react';
import {View, Text} from 'react-native';

export default function MovieDetails() {
  //get movie data passed by navigation
  const route = useRoute();
  const movie = route.params.movie;

  return (
    <View>
      <Text />
    </View>
  );
}
