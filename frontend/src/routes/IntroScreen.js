import React from 'react';
import { View, Text, Button, StyleSheet, Dimensions, Image, SafeAreaView, TouchableOpacity } from 'react-native';
import Carousel from 'react-native-snap-carousel';

const IntroScreen = ({ navigation }) => {
    const handleNext = () => {
        // Navigate to the Signup screen
        navigation.replace('Signup');
    };

    const slides = [
        {
            image: require('../../assets/images/festivus-intro8.jpg'),
            title: 'Find your favourite events here',
            body: 'The customer is very important, the customer will be followed by the customer.',
        },
        {
            image: require('../../assets/images/festivus-intro2.jpg'),
            title: 'Find your favourite events here',
            body: 'The customer is very important, the customer will be followed by the customer.',
        },
        {
            image: require('../../assets/images/festivus-intro3.jpg'),
            title: 'Find your favourite events here',
            body: 'The customer is very important, the customer will be followed by the customer.',
        },
        {
            image: require('../../assets/images/festivus-intro4.jpg'),
            title: 'Find your favourite events here',
            body: 'The customer is very important, the customer will be followed by the customer.',
        },
        {
            image: require('../../assets/images/festivus-intro5.jpg'),
            title: 'Find your favourite events here',
            body: 'The customer is very important, the customer will be followed by the customer.',
        },
        {
            image: require('../../assets/images/festivus-intro6.jpg'),
            title: 'Find your favourite events here',
            body: 'The customer is very important, the customer will be followed by the customer.',
        },
    ];

    const renderCarouselItem = ({ item }) => (
        <View style={styles.carouselItem}>
            <Image source={item.image} style={styles.carouselImage} />
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.body}>{item.body}</Text>
        </View>
    );

    return (

        <View style={styles.container}>
            <Carousel
                data={slides}
                renderItem={renderCarouselItem}
                sliderWidth={Dimensions.get('window').width}
                itemWidth={Dimensions.get('window').width}
            />
            <TouchableOpacity style={styles.buttonContainer} onPress={handleNext}>
                <Text style={styles.buttonText}>Continue</Text>
            </TouchableOpacity>
        </View >

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        margin: 20,
    },
    carouselItem: {
        // borderColor: "red", borderWidth: 23,
        margin: 12,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    carouselImage: {
        width: '100%',
        height: '80%',
        resizeMode: 'cover',
        borderRadius: 15,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginVertical: 20,
    },
    body: {
        fontSize: 16,
        textAlign: 'center',
        marginHorizontal: 20,
        marginBottom: 30,
    },
    buttonContainer: {
        width: '100%',
        marginTop: 20,
    },
    buttonContainer: {
        width: "80%",
        // marginRight: 60,
        // marginLeft: 60,
        paddingVertical: 18,
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'blue',
        padding: 10,
        borderRadius: 15,
        marginTop: 10,
        backgroundColor: "#808080",
    },
    buttonText: {
        color: "white",
    }

});

export default IntroScreen;
