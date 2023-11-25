import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, FlatList, Touchable, TouchableOpacity, SafeAreaView, Modal } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import FormModal from '../components/FormModal';
import MiniCard from '../components/MiniCard';
import DetailedCard from '../components/DetailedCard';

const HomeScreen = ({ navigation }) => {
    // Dummy data for two rows of cards
    const data = [
        { id: '1', title: 'Debate Competetion', location: 'CSE Seminar Hall' },
        { id: '2', title: 'Touch Typing', location: 'ISE Seminar Hall' },
        { id: '3', title: 'Drawing Competetion', location: 'CSE Seminar Hall' },
        { id: '4', title: 'Tech Quizz', location: 'CSE Seminar Hall' },
        { id: '5', title: 'Hackathon', location: 'CSE Seminar Hall' },
    ];

    const handleCardPress = (item) => {
        // Navigate to the EventDetailScreen 
        navigation.navigate("EventDetails")
    };

    const [isModalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        console.log("why dowe falll???")
        setModalVisible(!isModalVisible);
    };


    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                {/* Search Bar  and Add Icon */}
                <View style={styles.headerContainer}>
                    <View style={styles.searchBarContainer}>
                        <Icon name="ios-search" size={20} color="gray" />
                        <TextInput
                            style={styles.searchBarInput}
                            placeholder="Search for events"
                            placeholderTextColor="gray"
                        />
                    </View>

                    {/* Add Event Icon */}
                    <TouchableOpacity onPress={toggleModal} style={styles.addContainer}>
                        <Icon name="ios-add" size={20} color="gray" />
                    </TouchableOpacity>
                </View>

                {/* ONGOING EVENTS */}
                <View style={styles.ongoingEvents}>
                    <Text style={styles.header}>Ongoing Events</Text>
                    {/* Two Rows of Cards */}
                    <FlatList
                        data={data}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => (
                            <TouchableOpacity style={{ paddingRight: 12, }} onPress={() => handleCardPress(item)}>
                                {/* <View style={styles.card}>
                                <Text>{item.title}</Text>
                            </View> */}
                                <MiniCard
                                    imageSource={require('../../assets/images/sample-event-banner.jpg')}
                                    title={item.title}
                                    iconText={item.location}
                                    buttonText="Register"
                                    onPress={() => console.log('Register button pressed')}
                                />
                            </TouchableOpacity>
                        )}
                        horizontal={true} // Set horizontal scroll direction
                        showsHorizontalScrollIndicator={false} // Hide horizontal scrollbar
                        contentContainerStyle={{ height: 'auto' }} // Adjust height based on content
                    />
                </View>

                {/* Headers */}
                <Text style={styles.header}>Upcoming Events</Text>

                {/* Two Rows of Cards */}
                <FlatList
                    data={data}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => {
                            console.log(item.title)
                        }}>
                            <DetailedCard
                                // imageSource="../../assets/images/sample-event-banner.jpg"
                                department="AI & ML"
                                title="Hackathon Hackathon Hackathon"
                                dateTime="19th August, 09:00"
                                avatarSource="../../assets/images/right_arrow.png"
                                price="₨ 800"
                                onPress={() => handleCardPress(item)}
                            />
                        </TouchableOpacity>

                    )}
                    horizontal={true} // Set horizontal scroll direction
                    showsHorizontalScrollIndicator={false} // Hide horizontal scrollbar
                    contentContainerStyle={{ height: 'auto' }} // Adjust height based on content
                />
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={isModalVisible}
                    onRequestClose={() => {
                        setModalVisible(!isModalVisible);
                    }}
                >
                    <FormModal closeModal={toggleModal} />
                </Modal>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        // paddingTop: 40,
        flex: 1,
    },
    container: {
        flex: 1,
        padding: 20,
    },
    headerContainer: {
        justifyContent: "space-between",
        display: "flex",
        flexDirection: 'row',
    },
    searchBarContainer: {
        width: "80%",
        // marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 12,
        padding: 12,
        marginBottom: 20,
    },
    searchBarInput: {
        flex: 1,
        marginLeft: 10,
        color: '#808080',
    },
    addContainer: {
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 12,
        padding: 12,
        marginBottom: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    header: {
        marginVertical: 12,
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 23,
    },

});

export default HomeScreen;
