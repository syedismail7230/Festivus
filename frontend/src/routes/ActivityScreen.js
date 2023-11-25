import React from 'react'
import { View, Text, StyleSheet,Image, TextInput, TouchableOpacity,Animated } from 'react-native'
import NavBar from '../components/NavBar'
import Btn1 from '../components/Btn1'
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Upcoming from './Upcoming'; // Import your tab screens
import PastEvents from './PastEventsEmpty';

const Tab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator 
    tabBarOptions={{
      style: { backgroundColor: '#fff' }, // Set the background color of the tab bar
      activeTintColor: '#000', // Set the color of the selected tab
      inactiveTintColor: 'grey', // Set the color of unselected tabs
      indicatorStyle: { backgroundColor: '#000' }, // Set the color of the indicator line (underline)
      labelStyle: { fontWeight: 'bold' }, // Set the font weight of the tab labels,
      
      
    }}
  >
      <Tab.Screen name="UPCOMING" component={Upcoming} />
      <Tab.Screen name="PAST EVENTS" component={PastEvents} />
    </Tab.Navigator>
  );
};




function ActivityScreen() {
  return (
    <View style={styles.container}>
        {/* Nav bar */}
        <NavBar NavTitle="Events" />

        <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Tabs"
          component={TabNavigator}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>

    <Btn1 style={styles.btn} btn_txt="Explore Events" img_url={require("../../assets/images/right_arrow.png")}/>

    </View>
  )
}

export default ActivityScreen

const styles = StyleSheet.create({
    container: {
        width: "100%",
        borderWidth: 2,
        flex: 1,
        justifyContent: "center",
        paddingHorizontal: 20,
        paddingVertical:10
      },
      

})