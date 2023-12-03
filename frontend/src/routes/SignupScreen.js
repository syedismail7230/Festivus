import React from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const SignupScreen = ({ navigation }) => {

    const handleSignup = () => {
        // For simplicity, let's assume the signup is successful
        // and navigate to the Home screen
        navigation.replace('SelectDept');
        // navigation.replace('TabNavigator');
    };

    const switchToLogin = () => {
        navigation.navigate('Login');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Sign Up</Text>

            {/* Student USN Input */}
            <TextInput
                style={styles.input}
                placeholder="Student USN"
                autoCapitalize="characters" // If you want USN to be in uppercase
            />

            {/* Student USN Input */}
            <TextInput
                style={styles.input}
                placeholder="Some important text"
                autoCapitalize="characters" // If you want USN to be in uppercase
            />

            {/* Phone Number Input */}

            <TextInput
                style={styles.input}
                placeholder="Phone Number"
                placeholderTextColor="black"
                keyboardType="phone-pad"
            />

            {/* Signup Button */}
            <View style={styles.singupView}>
                <TouchableOpacity style={styles.signupContainer} onPress={handleSignup}>
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
                console.log("Google Login Initiated")
            }}>
                <Ionicons name="logo-google" size={24} color="black" />
                <Text style={styles.googleLoginText}>Login with Google</Text>
            </TouchableOpacity>

            {/* Login Text */}

            <TouchableOpacity onPress={switchToLogin}>
                <Text style={styles.loginText}>Already have an account? <Text style={styles.loginButton}>
                    Login
                </Text></Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: "100%",
        borderWidth: 2,
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
    title: {
        fontWeight: 'bold',
        paddingVertical: 12,
        fontSize: 28
    },
    input: {
        color: "black",
        paddingVertical: 22,
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingLeft: 10,
        borderRadius: 12,
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
});

export default SignupScreen;