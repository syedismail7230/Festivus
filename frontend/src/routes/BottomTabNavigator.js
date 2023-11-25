// import React from 'react';
// import { Entypo } from '@expo/vector-icons';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


// import HomeScreen from '../routes/HomeScreen';
// import RecentsScreen from '../routes/RecentsScreen';
// import ProfileScreen from '../routes/ProfileScreen';
// import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

// // const Tab = createBottomTabNavigator();
// const Tab = createMaterialBottomTabNavigator();


// const BottomTabNavigator = () => {
//     return (
//         <Tab.Navigator

//             initialRouteName="Home"
//             activeColor="#ffffff"
//             inactiveColor="#111111"
//             barStyle={{ backgroundColor: '#808080' }}

//         >
//             <Tab.Screen
//                 name="Feed"
//                 component={HomeScreen}
//                 options={{
//                     tabBarLabel: 'Home',
//                     tabBarIcon: ({ color }) => (
//                         <Entypo name="compass" size={24} />
//                     ),
//                 }}
//             />
//             <Tab.Screen
//                 name="Activity"
//                 component={RecentsScreen}
//                 options={{
//                     tabBarLabel: 'Recents',
//                     tabBarIcon: ({ color }) => (
//                         <Entypo name="calendar" size={24} color="black" />
//                     ),
//                 }}
//             />
//             <Tab.Screen
//                 name="Profile"
//                 component={ProfileScreen}
//                 options={{
//                     tabBarLabel: 'Profile',
//                     tabBarIcon: ({ color }) => (
//                         <Entypo name="calendar" size={24} color="black" />
//                     ),
//                 }}
//             />
//         </Tab.Navigator>

//         // <Tab.Navigator>
//         //     <Tab.Screen
//         //         name="Explore"
//         //         component={HomeScreen}
//         //         options={{
//         //             tabBarIcon: ({ color, size }) => (
//         //                 <MaterialIcons name="explore" size={24} color="black" />
//         //             ),
//         //         }}
//         //     />
//         //     <Tab.Screen
//         //         name="Recents"
//         //         component={RecentsScreen}
//         //         options={{
//         //             tabBarIcon: ({ color, size }) => (
//         //                 // <Ionicons name="compass-outline
//         //                 // " size={24} color="pink" />
//         //                 <MaterialIcons name="calendar-today" size={24} color="black" />

//         //             ),
//         //         }}
//         //     />
//         //     <Tab.Screen
//         //         name="Profile"
//         //         component={ProfileScreen}
//         //         options={{
//         //             tabBarIcon: ({ color, size }) => (
//         //                 <MaterialIcons name="person" size={24} color="black" />
//         //             ),
//         //         }}
//         //     />
//         // </Tab.Navigator>
//     );
// };

// export default BottomTabNavigator;


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
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Feather name="home" size={24} color="black" />
                    ),
                }}
            />
            <Tab.Screen
                name="Activity"
                component={ActivityScreen}
                options={{
                    headerShown: true,
                    tabBarIcon: ({ color, size }) => (
                        <Feather name="bell" size={24} color="black" />
                    ),
                }}
            />
            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    headerShown: true,
                    tabBarIcon: ({ color, size }) => (
                        <Feather name="users" size={24} color="black" />
                    ),
                }}
            />
        </Tab.Navigator>
    );
};

export default BottomTabNavigator;
