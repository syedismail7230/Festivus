import React from 'react';
import { View, Text, TextInput, StyleSheet, FlatList, Touchable, TouchableOpacity, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const HomeScreen = ({ navigation }) => {
    // Dummy data for two rows of cards
    const data = [
        { id: '1', title: 'Card 1' },
        { id: '2', title: 'Card 2' },
        { id: '3', title: 'Card 3' },
        { id: '4', title: 'Card 4' },
    ];

    const handleCardPress = (item) => {
        // Navigate to the EventDetailScreen with the selected item data
        navigation.navigate("EventDetails")
    };


    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                {/* Search Bar */}
                <View style={styles.searchBarContainer}>
                    <Icon name="ios-search" size={20} color="gray" />
                    <TextInput
                        style={styles.searchBarInput}
                        placeholder="Search..."
                        placeholderTextColor="gray"
                    />
                </View>

                {/* Headers */}
                <Text style={styles.header}>Ongoing Events</Text>

                {/* Two Rows of Cards */}
                <FlatList
                    data={data}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => handleCardPress(item)}>
                            <View style={styles.card}>
                                <Text>{item.title}</Text>
                            </View>
                        </TouchableOpacity>
                    )}
                    horizontal={true} // Set horizontal scroll direction
                    showsHorizontalScrollIndicator={false} // Hide horizontal scrollbar
                    contentContainerStyle={{ height: 'auto' }} // Adjust height based on content
                />

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
                            <View style={styles.card}>
                                <Text>{item.title}</Text>
                            </View>
                        </TouchableOpacity>
                    )}
                    horizontal={true} // Set horizontal scroll direction
                    showsHorizontalScrollIndicator={false} // Hide horizontal scrollbar
                    contentContainerStyle={{ height: 'auto' }} // Adjust height based on content
                />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#fff', // Set the background color to match your design
    },
    container: {
        flex: 1,
        padding: 20,
    },
    searchBarContainer: {
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
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    header: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    card: {
        width: 240,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#808080',
        borderRadius: 10,
        margin: 5,
        padding: 10,
    },
});

export default HomeScreen;
