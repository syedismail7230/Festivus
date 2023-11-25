// BottomTabNavigator.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';
import HomeScreen from '../routes/HomeScreen';
import RecentsScreen from '../routes/RecentsScreen'; // Create RecentsScreen component
import ProfileScreen from '../routes/ProfileScreen'; // Create ProfileScreen component
import Profile from './Profile';
import ActivityScreen from './ActivityScreen';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    return (
        <Tab.Navigator
            tabBarOptions={{
                activeTintColor: 'tomato', 
                // inactiveTintColor: 'gray', 
            }}
        >
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    headerShown: true,
                    tabBarIcon: ({ color, size }) => (
                        <Feather name="home" size={24} color="grey" />
                    ),
                }}
            />
            <Tab.Screen
                name="Activity"
                component={ActivityScreen}
                options={{
                    headerShown: true,
                    tabBarIcon: ({ color, size }) => (
                        <Feather name="bell" size={24} color="grey" />
                    ),
                }}
            />
            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    headerShown: true,
                    tabBarIcon: ({ color, size }) => (
                        <Feather name="users" size={24} color="grey" />
                    ),
                }}
            />
        </Tab.Navigator>
    );
};

export default BottomTabNavigator;
