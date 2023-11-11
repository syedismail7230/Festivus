import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import LoginScreen from './src/routes/LoginScreen';
import SignupScreen from './src/routes/SignupScreen';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <LoginScreen/> */}
      <SignupScreen/>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
