import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Movie} from '../movieInterface';

export default function MovieCard({movie}: Movie) {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate('Detalhes', {movie: movie})}>
        <View style={styles.innerContainer}>
          <View>
            <Image
              source={{
                uri: `https://image.tmdb.org/t/p/original/${movie.poster_path}`,
              }}
              style={styles.image}
            />
          </View>
          <View style={styles.movieData}>
            <Text
              style={styles.title}
              adjustsFontSizeToFit={true}
              numberOfLines={1}>
              {movie.title}
            </Text>
            <Text style={styles.releaseDate}>
              {`Ano: ${movie.release_date.substring(0, 4)}`}
            </Text>
            <Text style={styles.releaseDate}>
              {`Classificação: ${movie.adult ? 'Adulto' : 'Livre'}`}
            </Text>
            <Text style={styles.releaseDate}>
              {`Nota: ${movie.vote_average}`}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginHorizontal: 10,
    backgroundColor: '#F5FCFF',
    paddingBottom: 10,
    justifyContent: 'space-between',
  },
  innerContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  image: {
    width: 150,
    height: 200,
  },
  imageContainer: {
    flex: 2,
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
