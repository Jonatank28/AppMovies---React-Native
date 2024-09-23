import { Stack } from 'expo-router';

const LayoutRoot = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="movie/[id]"
        options={{
          statusBarAnimation: 'fade',
          headerStyle: {
            backgroundColor: 'transparent',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
    </Stack>
  );
};

export default LayoutRoot;
