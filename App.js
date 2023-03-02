import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainNavigation from './src/Navigation/index';

const App = () => {
  return (
    <NavigationContainer>
      <MainNavigation />
    </NavigationContainer>
  );
};

export default App;
