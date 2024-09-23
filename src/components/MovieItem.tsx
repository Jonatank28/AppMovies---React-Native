import { Text, Image, Pressable } from 'react-native';
import { MovieType } from './Movies';
import { router } from 'expo-router';

const MovieItem = ({ movie }: { movie: MovieType }) => {
  return (
    <Pressable
      className="flex-1 items-center justify-center"
      onPress={() => router.push(`/movie/${movie.id}`)}
    >
      <Image source={{ uri: movie.image }} className="w-36 h-48 rounded-lg" />
      <Text className="mt-2 text-sm font-bold text-center" numberOfLines={2}>{movie.title}</Text>
    </Pressable>
  );
};


export default MovieItem;