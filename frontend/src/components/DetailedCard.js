import React from 'react';
import { View, Text, ImageBackground, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Feather } from '@expo/vector-icons';

const DetailedCard = ({ imageSource, department, title, dateTime, avatarSource, price, onPress }) => {
    return (
        <TouchableOpacity style={styles.cardContainer} onPress={onPress}>
            {/* Full Width Image with Overlay */}
            <ImageBackground source={imageSource} style={styles.imageBackground} resizeMode="cover">
                <View style={styles.overlay}>
                    {/* Heart Icon */}
                    {/* <MaterialCommunityIcons name="heart" size={24} color="white" style={styles.heartIcon} /> */}
                    <Feather style={styles.heartIcon} name="heart" size={24} color="white" />
                </View>
            </ImageBackground>

            {/* Department Text */}
            <Text style={styles.department}>Organized by : {department}</Text>

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
        minWidth: "60%",
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
        // color: "red",
        position: 'absolute',
        top: 10,
        left: 10,
        color: 'grey',
        fontWeight: 'bold',
        fontSize: 14,
        padding: 4,
        borderRadius: 4,
        // borderWidth: 2, borderColor: "red",
        backgroundColor: "white"
    },
    textContainer: {
        padding: 10,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
        color: 'black',
        marginBottom: 5,
    },
    dateTime: {
        fontSize: 14,
        color: 'gray',
        marginBottom: 5,
    },
    avatar: {
        borderColor: "red", borderWidth: 2,
        width: 40,
        height: 40,
        borderRadius: 20,
        position: 'absolute',
        bottom: 80,
        left: 10,
    },
    button: {
        backgroundColor: '#ddd',
        padding: 10,
        borderRadius: 8,
        position: 'absolute',
        bottom: 15,
        right: 10,
    },
    buttonText: {
        fontWeight: 'bold',
        fontSize: 16,
    },
});

export default DetailedCard;
