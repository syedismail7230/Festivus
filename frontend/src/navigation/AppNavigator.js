import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from '../routes/LoginScreen';
import SignupScreen from '../routes/SignupScreen';
import HomeScreen from '../routes/HomeScreen';
import IntroScreen from '../routes/IntroScreen';
import SplashScreen from '../routes/SplashScreen';
import SelectDeptScreen from '../routes/SelectDeptScreen';
import BottomTabNavigator from '../routes/BottomTabNavigator';
import EventDetailScreen from '../routes/EventDetailScreen';
import Profile from '../routes/Profile';
import ActivityScreen from '../routes/ActivityScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Splash" component={SplashScreen} />
            <Stack.Screen name="Intro" component={IntroScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Signup" component={SignupScreen} />
            <Stack.Screen name="SelectDept" component={SelectDeptScreen} />
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="TabNavigator" component={BottomTabNavigator} />
            <Stack.Screen name="EventDetails" component={EventDetailScreen} />
            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="Activity" component={ActivityScreen} />

        </Stack.Navigator>
    );
};

export default AppNavigator;
