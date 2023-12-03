import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './src/navigation/AppNavigator';
import ActivityScreen from './src/routes/ActivityScreen';
const App = () => {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>


  );
};

export default App;
