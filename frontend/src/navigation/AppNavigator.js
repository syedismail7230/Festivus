import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from '../routes/LoginScreen';
import SignupScreen from '../routes/SignupScreen';
import HomeScreen from '../routes/HomeScreen';
import IntroScreen from '../routes/IntroScreen';
import SplashScreen from '../routes/SplashScreen';
import SelectDeptScreen from '../routes/SelectDeptScreen';
import BottomTabNavigator from '../routes/BottomTabNavigator';

const Stack = createStackNavigator();

const AppNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Splash" component={SplashScreen} />
            <Stack.Screen name="Intro" component={IntroScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Signup" component={SignupScreen} />
            <Stack.Screen name="SelectDept" component={SelectDeptScreen} />
            {/* <Stack.Screen name="Home" component={HomeScreen} /> */}
            <Stack.Screen name="Home" component={BottomTabNavigator} />

        </Stack.Navigator>
    );
};

export default AppNavigator;
