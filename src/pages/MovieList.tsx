import axios from 'axios';
import React, {useState} from 'react';
import {useEffect} from 'react';
import {View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import apiDefinition from '../../api';
import MovieCard from '../components/MovieCard';

interface MovieData {
  adult: boolean;
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  release_date: string;
}
export default function MovieList() {
  const [movies, setMovies] = useState([] as MovieData[]);
  //get movie data from API with axios
  useEffect(() => {
    const apiRequest = apiDefinition.API_URL + apiDefinition.API_SECRET;

    async function getPopularMovieData() {
      const response = await axios.get(apiRequest);
      const moviesResponse = response.data.results;
      setMovies(moviesResponse);
    }

    getPopularMovieData();
  }, [movies]);

  return (
    <View>
      <FlatList
        ItemSeparatorComponent={FlatListItemSeparator}
        data={movies}
        renderItem={({item}) => <MovieCard movie={item} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

export function FlatListItemSeparator() {
  return (
    <View
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        height: 1,
        width: '100%',
        backgroundColor: '#d3d3d3',
      }}
    />
  );
}
