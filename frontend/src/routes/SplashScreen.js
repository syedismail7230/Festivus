import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SplashScreen = ({ navigation }) => {
    useEffect(() => {
        // Simulate an asynchronous task (e.g., fetching user data)
        const fetchData = async () => {
            // For example, wait for 2 seconds
            await new Promise(resolve => setTimeout(resolve, 2000));
            // Navigate to the Intro screen
            navigation.replace('Intro');
        };

        fetchData();
    }, [navigation]);

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Splash Screen</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
    },
});

export default SplashScreen;
