import React from 'react';
import { View, StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';

const PastEventScreen = () => {
  return (
    <View style={styles.container}>
      <LottieView
        source={{ uri: 'https://lottie.host/e0f3a845-b7d2-47aa-938e-2f2f12040dc8/3t5a6tfJp4.json' }}
        autoPlay
        loop
      />
    </View>
  );
};
export default PastEventScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});