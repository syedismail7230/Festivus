// EventDetailScreen.js
import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const EventDetailScreen = ({ route }) => {
    const eventData = {
        id: '1',
        title: 'Sample Event',
        bannerImage: require('../../assets/images/sample-event-banner.jpg'),
        time: 'November 20, 2023 14:30',
        place: 'Event Venue, City',
        status: 'Registered',
        aboutEvent: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...',
        rules: '1. Follow the event guidelines.\n2. Be respectful to others.',
    };

    return (
        <ScrollView style={styles.container}>
            {/* Banner Image */}
            <Image source={eventData.bannerImage} style={styles.bannerImage} />

            {/* Event Title */}
            <Text style={styles.eventTitle}>{eventData.title}</Text>

            {/* Event Details: Time, Place, Status */}
            <View style={styles.detailContainer}>
                <DetailItem icon="ios-time" text={eventData.time} />
                <DetailItem icon="ios-pin" text={eventData.place} />
                <DetailItem icon="information" text={`Status: ${eventData.status}`} />
            </View>

            {/* About Event */}
            <Text style={styles.sectionHeading}>About Event</Text>
            <Text style={styles.aboutEvent}>{eventData.aboutEvent}</Text>

            {/* Rules Section */}
            <Text style={styles.sectionHeading}>Event Rules</Text>
            <Text style={styles.eventRules}>{eventData.rules}</Text>

            {/* Participate and Audience Buttons */}
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={() => console.log('Participate pressed')}>
                    <Text style={styles.buttonText}>Participate</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => console.log('Audience pressed')}>
                    <Text style={styles.buttonText}>Audience</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

// Helper component for detail items
const DetailItem = ({ icon, text }) => (
    <View style={styles.detailItem}>
        <View style={styles.icons}>
            <Ionicons name={icon} size={24} color="#111111" />
        </View>

        <Text style={styles.detailText}>{text}</Text>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    bannerImage: {
        width: '100%',
        height: 200,
        resizeMode: 'cover',
    },
    eventTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginVertical: 10,
        marginHorizontal: 12,
    },
    detailContainer: {
        flexDirection: 'column',
        justifyContent: 'space-around',
        // marginVertical: 10,
    },
    detailItem: {

        padding: 14,
        flexDirection: 'row',
        alignItems: 'center',
    },

    icons: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#5669FF",
        borderRadius: 12,
        // padding: 12,
        height: 40,
        width: 40,
    },
    detailText: {
        marginLeft: 12,
        fontWeight: "bold",
    },

    aboutEvent: {
        marginHorizontal: 12,
    },
    sectionHeading: {
        marginHorizontal: 12,
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: 10,
    },
    eventRules: {
        marginHorizontal: 12,
    },
    buttonContainer: {
        marginTop: 30,
        flexDirection: 'column',
        justifyContent: "space-between",
        alignItems: "center"
    },
    button: {
        backgroundColor: '#808080',
        marginVertical: 8,
        padding: 15,
        borderRadius: 10,
        width: '45%',
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
    },
});

export default EventDetailScreen;
