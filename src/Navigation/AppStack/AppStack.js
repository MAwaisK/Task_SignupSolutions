import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import UI_TestUI from '../../Screens/UI_Test/UI/UI_TestUI';

const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="UI_TestUI"
      headerMode="none"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="UI_TestUI" component={UI_TestUI} />
    </Stack.Navigator>
  );
};

export default AppStack;
