// PastEventScreen.js

import React from 'react';
import { View, Text,Image, StyleSheet,TouchableOpacity } from 'react-native';
import Eventbox from '../../assets/components/Eventbox';

const PastEventScreen = () => {
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
    paddingVertical:20,
    // justifyContent: 'center',
    alignItems: 'center',
  },
  

});

export default PastEventScreen;
