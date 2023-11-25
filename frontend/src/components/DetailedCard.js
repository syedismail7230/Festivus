import React from 'react';
import { View, Text, ImageBackground, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons'; // Assuming you are using Expo, otherwise use a different icon library

const DetailedCard = ({ imageSource, department, title, dateTime, avatarSource, price, onPress }) => {
    return (
        <TouchableOpacity style={styles.cardContainer} onPress={onPress}>
            {/* Full Width Image with Overlay */}
            <ImageBackground source="../../assets/images/sample-event-banner.jpg" style={styles.imageBackground} resizeMode="cover">
                <View style={styles.overlay}>
                    {/* Heart Icon */}
                    <MaterialCommunityIcons name="heart" size={24} color="white" style={styles.heartIcon} />
                </View>
            </ImageBackground>

            {/* Department Text */}
            <Text style={styles.department}>{department}</Text>

            {/* Title and Date Time */}
            <View style={styles.textContainer}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.dateTime}>{dateTime}</Text>
            </View>

            {/* Small Overlapping Circular Avatar */}
            <Image source={avatarSource} style={styles.avatar} />

            {/* Grey Button with Price */}
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>{price}</Text>
            </TouchableOpacity>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    cardContainer: {
        borderRadius: 12,
        overflow: 'hidden',
        margin: 10,
        backgroundColor: 'white',
    },
    imageBackground: {
        width: '100%',
        height: 200, // Adjust the height as needed
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        padding: 10,
    },
    heartIcon: {
        marginRight: 5,
    },
    department: {
        position: 'absolute',
        bottom: 5,
        left: 5,
        color: 'white',
        fontWeight: 'bold',
        fontSize: 14,
    },
    textContainer: {
        padding: 10,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
        color: 'white', // Adjust text color for better visibility on the image
        marginBottom: 5,
    },
    dateTime: {
        fontSize: 14,
        color: 'gray',
        marginBottom: 5,
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 20,
        position: 'absolute',
        bottom: 70,
        left: 10,
    },
    button: {
        backgroundColor: '#ddd',
        padding: 10,
        borderRadius: 8,
        position: 'absolute',
        bottom: 10,
        right: 10,
    },
    buttonText: {
        fontWeight: 'bold',
        fontSize: 16,
    },
});

export default DetailedCard;
