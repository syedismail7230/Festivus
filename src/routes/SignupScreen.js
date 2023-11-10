import React from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const SignupScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Sign Up</Text>
            {/* Phone Number Input */}

            <TextInput
                style={styles.input}
                placeholder="Phone Number"
                keyboardType="phone-pad"
            />

            {/* Student USN Input */}
            <TextInput
                style={styles.input}
                placeholder="Student USN"
                autoCapitalize="characters" // If you want USN to be in uppercase
            />

            {/* Signup Button */}

            <TouchableOpacity style={styles.signupContainer} onPress={() => {
                // Handle Google login logic
            }}>
                <Text style={styles.googleLoginText}>Sign Up</Text>
            </TouchableOpacity>

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

                <Text style={styles.loginText}>Already have an account? Login</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: "100%",
        borderWidth: 2,
        borderColor: 'red',
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
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'blue',
        padding: 10,
        borderRadius: 15,
        marginTop: 10,
        backgroundColor: "#808080",
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
    loginText: {
        marginTop: 10,
        textAlign: 'center',
        color: '#808080',
    },
});

export default SignupScreen;
