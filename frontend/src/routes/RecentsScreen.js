import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const RecentsScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Recents Screen</Text>
        </View>
    )
}

export default RecentsScreen


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
