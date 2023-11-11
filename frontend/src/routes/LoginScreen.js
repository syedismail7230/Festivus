import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome Back!</Text>
      <Text style={styles.subTitle}>Use credentials to access your account</Text>
      {/* Phone Number Input */}

      <TextInput
        style={styles.input}
        placeholder="Enter USN"
        keyboardType="phone-pad"
      />

      {/* Student USN Input */}
      <TextInput
        style={styles.input}
        placeholder="Enter Phone Number"
        autoCapitalize="characters" // If you want USN to be in uppercase
      />


      {/* Forgot Password */}
      <TouchableOpacity>

        <Text style={styles.forgotText}>
          Forgot Password ?
        </Text>
      </TouchableOpacity>

      {/* Signup Button */}

      <View style={styles.singupView}>
        <TouchableOpacity style={styles.signupContainer} onPress={() => {
          // Handle Google login logic
        }}>
          <Text style={styles.signupLoginText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
      {/* Divider */}
      <View style={styles.dividerContainer}>
        <View style={styles.dividerLine} />
        <Text style={styles.dividerText}>OR</Text>
        <View style={styles.dividerLine} />
      </View>

      {/* Google Login */}
      <TouchableOpacity style={styles.googleLoginContainer} onPress={() => {
        // Handle Google login logic
      }}>
        <Ionicons name="logo-google" size={24} color="black" />
        <Text style={styles.googleLoginText}>Login with Google</Text>
      </TouchableOpacity>

      {/* Login Text */}

      <TouchableOpacity>

        <Text style={styles.loginText}>Don't have an account <Text style={styles.loginButton}>
          Signup
        </Text></Text>
      </TouchableOpacity>
    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  container: {
    width: "100%",
    borderWidth: 2,
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  title: {
    fontWeight: 'bold',
    paddingVertical: 12,
    fontSize: 28
  },
  subTitle: {
    fontWeight: "normal",
    color: "#808080",
    paddingBottom: 12,
  },
  input: {
    paddingVertical: 22,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
    borderRadius: 12,
  },
  forgotText: {
    fontWeight: "300",
    color: 'black'
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: 'gray',
  },
  dividerText: {
    marginHorizontal: 10,
    color: 'gray',
  },
  signupContainer: {
    // marginRight: 60,
    // marginLeft: 60,
    paddingVertical: 18,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 15,
    marginTop: 10,
    backgroundColor: "#808080",
  },
  singupViewL: {
    justifyContent: 'center',
    width: "100%",
    alignItems: 'center',
  },
  googleLoginContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0.5,
    borderColor: '#808080',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  googleLoginText: {
    color: "black",
    marginLeft: 10,
  },
  signupLoginText: {
    color: "white",
  },
  loginText: {
    marginTop: 10,
    textAlign: 'center',
    color: '#808080',
  },
  loginButton: {
    fontWeight: 'bold',
    textDecorationLine: "underline"
  }
})