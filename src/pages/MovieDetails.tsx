import {useRoute} from '@react-navigation/native';
import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {Movie} from '../movieInterface';
import {format} from 'date-fns';
export default function MovieDetails() {
  //get movie data passed by navigation
  const route = useRoute();
  const {movie}: Movie = route.params;

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: `https://image.tmdb.org/t/p/original/${movie.poster_path}`,
        }}
        style={styles.image}
      />

      <Text style={styles.title}> {movie.title} </Text>
      <Text style={styles.releaseDate}>
        {' '}
        {`Data de estreia: ${format(
          new Date(movie.release_date),
          'dd/MM/yyyy',
        )}`}{' '}
      </Text>
      <Text style={styles.classification}>
        {`Classificação: ${movie.adult ? 'Adulto' : 'Livre'} `}{' '}
      </Text>
      <Text style={styles.classification}>
        {' '}
        {`Nota: ${movie.vote_average}`}{' '}
      </Text>
      <Text style={styles.overview}>{movie.overview}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 20,
    backgroundColor: '#F5FCFF',
  },
  image: {
    width: 300,
    height: 300,
  },
  overview: {
    fontSize: 16,
    textAlign: 'justify',
    fontStyle: 'normal',
    marginTop: 10,
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333333',
  },
  movieData: {
    flex: 3,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingLeft: 15,
  },
  releaseDate: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 5,
    color: '#333333',
  },
  classification: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 5,
    color: '#333333',
  },
  year: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 5,
    color: '#333333',
  },
});
