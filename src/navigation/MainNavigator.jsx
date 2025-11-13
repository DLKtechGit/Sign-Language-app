import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/Home/HomeScreen';
import LearnScreen from '../screens/Learn/LearnScreen';
import LetterDetailScreen from '../screens/Learn/LetterDetailScreen';
import TextPredictScreen from '../screens/Predict/TextPredictScreen';
import ImagePredictScreen from '../screens/Predict/ImagePredictScreen';
import CameraPredictScreen from '../screens/Predict/CameraPredictScreen';
import { routes } from '../config/routes';

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
      }}
    >
      <Stack.Screen name={routes.HOME} component={HomeScreen} />
      <Stack.Screen name={routes.LEARN} component={LearnScreen} />
      <Stack.Screen name={routes.LETTER_DETAIL} component={LetterDetailScreen} />
      <Stack.Screen name={routes.TEXT_PREDICT} component={TextPredictScreen} />
      <Stack.Screen name={routes.IMAGE_PREDICT} component={ImagePredictScreen} />
      <Stack.Screen 
        name={routes.CAMERA_PREDICT} 
        component={CameraPredictScreen}
        options={{
          animation: 'fade',
        }}
      />
    </Stack.Navigator>
  );
};

export default MainNavigator;
