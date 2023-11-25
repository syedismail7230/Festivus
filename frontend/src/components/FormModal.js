import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Modal } from 'react-native';

const FormModal = ({ closeModal }) => {
    const [formData, setFormData] = useState({
        eventName: '',
        eventDate: '',
        eventLocation: '',
    });

    const handleInputChange = (field, value) => {
        setFormData({ ...formData, [field]: value });
    };

    const handleSubmit = () => {
        // Implement your logic to handle form submission
        // You can send the formData to your backend or perform any other actions
        console.log('Form Data:', formData);

        // Close the modal
        closeModal();
    };

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={true}
            onRequestClose={() => closeModal()}
        >
            <View style={styles.modalContainer}>
                <Text style={styles.modalTitle}>Add Event</Text>

                <TextInput
                    style={styles.input}
                    placeholder="Event Name"
                    value={formData.eventName}
                    onChangeText={(text) => handleInputChange('eventName', text)}
                />

                <TextInput
                    style={styles.input}
                    placeholder="Event Date"
                    value={formData.eventDate}
                    onChangeText={(text) => handleInputChange('eventDate', text)}
                />

                <TextInput
                    style={styles.input}
                    placeholder="Event Location"
                    value={formData.eventLocation}
                    onChangeText={(text) => handleInputChange('eventLocation', text)}
                />

                <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
                    <Text style={styles.submitButtonText}>Submit</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.closeButton} onPress={() => closeModal()}>
                    <Text style={styles.closeButtonText}>Close</Text>
                </TouchableOpacity>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 20,
    },
    modalTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input: {
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 8,
        padding: 10,
        marginBottom: 15,
        width: '100%',
    },
    submitButton: {
        backgroundColor: 'blue',
        padding: 15,
        borderRadius: 8,
        alignItems: 'center',
        width: '100%',
        marginTop: 10,
    },
    submitButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    closeButton: {
        backgroundColor: 'red',
        padding: 15,
        borderRadius: 8,
        alignItems: 'center',
        width: '100%',
        marginTop: 10,
    },
    closeButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default FormModal;
