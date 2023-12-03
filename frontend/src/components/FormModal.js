import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal, TextInput } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Picker } from '@react-native-picker/picker';

const FormModal = ({ closeModal }) => {
    const [formData, setFormData] = useState({
        eventName: '',
        eventDate: new Date(),
        eventLocation: '',
    });

    const handleInputChange = (field, value) => {
        setFormData({ ...formData, [field]: value });
    };

    const handleDateChange = (event, selectedDate) => {
        const currentDate = selectedDate || formData.eventDate;
        setFormData({ ...formData, eventDate: currentDate });
    };

    const formatDate = (date) => {
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    };


    const handleSubmit = () => {
        // Implement your logic to handle form submission
        // You can send the formData to your backend or perform any other actions
        console.log('Form Data:', formData);
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
                <View style={styles.datePicker}>
                    <Text>Selected Date: {formatDate(formData.eventDate)}</Text>
                    <DateTimePicker
                        value={formData.eventDate}
                        mode="date"
                        display="default"
                        onChange={handleDateChange}
                        minimumDate={new Date()}
                    />
                </View>

                {/* <TextInput
                    style={styles.input}
                    placeholder="Event Location"
                    value={formData.eventLocation}
                    onChangeText={(text) => handleInputChange('eventLocation', text)}
                /> */}
                <View style={styles.input}>
                    <Text style={styles.label}>Event Location</Text>
                    <Picker
                        style={styles.picker}
                        selectedValue={formData.eventLocation}
                        onValueChange={(value) => handleInputChange('eventLocation', value)}
                    >
                        <Picker.Item label="AIML Seminar Hall" value="AIML Seminar Hall" />
                        <Picker.Item label="AIML Lab" value="AIML Lab" />
                        <Picker.Item label="ISE Seminar Hall" value="ISE Seminar Hall" />
                        <Picker.Item label="CSE Seminar Hall" value="CSE Seminar Hall" />
                        {/* Add more places as needed */}
                    </Picker>
                </View>

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

    datePicker: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 15,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 8,
        padding: 10,

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
