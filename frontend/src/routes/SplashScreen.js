// SplashScreen.js
import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';

const SplashScreen = ({ navigation }) => {
    const fadeAnim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.timing(
            fadeAnim,
            {
                toValue: 1,
                duration: 2000, // Adjust the duration as needed
                useNativeDriver: true,
            }
        ).start(() => {
            // Navigate to the next screen after the animation
            navigation.replace('Intro'); // Replace with your next screen
        });
    }, [fadeAnim, navigation]);

    return (
        <View style={styles.container}>
            <Animated.Text style={[styles.text, { opacity: fadeAnim }]}>
                Festivus
            </Animated.Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff', // Set the background color if needed
    },
    text: {
        letterSpacing: 12,
        fontSize: 28,
        textTransform: "uppercase",
        fontWeight: 'bold',
    },
});

export default SplashScreen;
