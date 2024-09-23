import { View, Text } from 'react-native';
import { useLocalSearchParams, useNavigation } from 'expo-router';
import { useEffect } from 'react';

const MovieId = () => {
  const { id } = useLocalSearchParams();
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({ title: id });
  }, []);

  return (
    <View className='px-4 pt-2'>
      <Text>MovieId: {id}</Text>
    </View>
  );
};


export default MovieId;