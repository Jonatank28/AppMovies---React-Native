import { Text, ScrollView } from 'react-native';
import Movies from '../components/Movies';

const PageIndex = () => {
  return (
    <ScrollView className='px-4 mt-8 pb-8' showsVerticalScrollIndicator={false}>
      <Text className='text-3xl font-bold pt-4'>Top 50 filmes</Text>
      <Movies />
    </ScrollView>
  );
};


export default PageIndex;