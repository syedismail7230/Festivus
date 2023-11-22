// Screen1.js

import React from 'react';
import { View, Text,Image, StyleSheet,TouchableOpacity } from 'react-native';
import Eventbox from '../../assets/components/Eventbox';

const Screen1 = () => {
  return (
    <View style={styles.container}>
     <Image source={require("../../assets/images/no_events.png")}/>
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

export default Screen1;
