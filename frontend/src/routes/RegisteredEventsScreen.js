// RegisteredEventsScreen.js

import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Eventbox from '../components/Eventbox';


const RegisteredEventsScreen = () => {
  return (
    <View style={styles.container}>

      <Eventbox
        title="Dance party at the top of the town - 2022"
        location="AIML Seminar Hall"
      />

      <Eventbox
        title="Dance party at the top of the town - 2022"
        location="AIML Seminar Hall"
      />

      <Eventbox
        title="Dance party at the top of the town - 2022"
        location="AIML Seminar Hall"
      />


    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 12,
    // justifyContent: 'center',
    alignItems: 'center',
  },


});

export default RegisteredEventsScreen;
