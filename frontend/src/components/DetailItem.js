import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'

const DetailItem = ({ icon, text }) => {
    return (
        <View style={styles.detailItem}>
            <View style={styles.icons}>
                <Ionicons name={icon} size={24} color="#111111" />
            </View>

            <Text style={styles.detailText}>{text}</Text>
        </View>
    )
}

export default DetailItem

const styles = StyleSheet.create({
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
})