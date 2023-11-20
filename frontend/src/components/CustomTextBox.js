import React from 'react'
import { StyleSheet, TextInput } from 'react-native'

function CustomTextBox({ placeholder }) {
    return (
        <TextInput
            style={styles.input}
            placeholder={placeholder}
            autoCapitalize="characters" // If you want USN to be in uppercase
        />
    )
}

export default CustomTextBox

const styles = StyleSheet.create({
    input: {
        color: "black",
        paddingVertical: 22,
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingLeft: 10,
        borderRadius: 12,
    },
})