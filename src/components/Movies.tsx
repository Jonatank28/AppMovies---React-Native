import { useEffect, useState } from 'react';
import { View, FlatList } from 'react-native';
import { api } from '../config/api';
import MovieItem from './MovieItem';

export interface MovieType {
  id: number;
  title: string;
  year: number;
  director: string;
  gross: string;
  image: string;
}

const Movies = () => {
  const [movies, setMovies] = useState<MovieType[]>([]);

  const fetchMovies = async () => {
    const res = await api.get("findAll");
    setMovies(res.data);
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <View className="flex-1 px-4 pt-4">
      <FlatList
        data={movies}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }: { item: MovieType }) => <MovieItem movie={item} />}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: 'space-between', marginBottom: 20 }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default Movies;
