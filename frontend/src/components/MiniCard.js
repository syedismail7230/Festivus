import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const MiniCard = ({ imageSource, title, iconText, buttonText, onPress }) => {
    return (
        <View style={styles.cardContainer}>
            {/* Left Column: Square Image */}
            <Image source={imageSource} style={styles.image} />

            {/* Right Column */}
            <View style={styles.rightColumn}>
                {/* Title */}
                <Text style={styles.title}>{title}</Text>

                {/* Icon with Text */}
                <View style={styles.iconContainer}>
                    <Ionicons name="location-outline" size={24} color="black" />
                    <Text style={styles.iconText}>{iconText}</Text>
                </View>

                {/* Register Button */}
                {/* <TouchableOpacity style={styles.button} onPress={onPress}>
                    <Text style={styles.buttonText}>{buttonText}</Text>
                </TouchableOpacity> */}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    cardContainer: {
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 8,
        overflow: 'hidden',
        margin: 10,
    },
    image: {
        width: 100, // Adjust the width as needed
        height: 100, // Adjust the height as needed
    },
    rightColumn: {
        flex: 1,
        padding: 10,
    },
    title: {

        fontWeight: '900',
        fontSize: 16,
        marginBottom: 8,
    },
    iconContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
    },
    iconText: {
        marginLeft: 8,
        fontSize: 16,
    },
    button: {
        backgroundColor: '#3498db',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    },
});

export default MiniCard;
