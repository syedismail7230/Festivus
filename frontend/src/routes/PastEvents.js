// Screen2.js

import React from 'react';
import { View, Text,Image, StyleSheet } from 'react-native';

const Screen2 = () => {
  return (
    <View style={styles.container}>
     <Image source={require("../../assets/images/no_events.png")}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Screen2;
