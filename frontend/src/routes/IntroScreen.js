import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const IntroScreen = ({ navigation }) => {
    const handleNext = () => {
        // Navigate to the Signup screen
        navigation.replace('Signup');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Introduction Screen</Text>
            <Button title="Next" onPress={handleNext} />
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

export default IntroScreen;
