import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity, Touchable, ScrollView } from 'react-native'
import React from 'react'

const departments = [
  { name: 'AI & ML', image: require('../../assets/images/deptSel_ai.png') },
  { name: 'CSE', image: require('../../assets/images/deptSel_cs.png') },
  { name: 'ELE', image: require('../../assets/images/deptSel_ele.png') },
  { name: 'ISE', image: require('../../assets/images/deptSel_ele.png') },
  { name: 'ME', image: require('../../assets/images/deptSel_mec.png') },
  { name: 'Other', image: require('../../assets/images/deptSel_mec.png') },
];


const SelectDeptScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.head}>
        <Text style={styles.title}>Choose your department</Text>
      </View>

      {/* Departments - each with image and text */}
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        {departments.map((dept, index) => (
          <TouchableOpacity
            key={index}
            style={styles.box}
            onPress={() => console.log(`Selected ${dept.name}`)} // Add your logic here
          >
            <Image style={styles.img_dpt} source={dept.image} />
            <Text style={styles.box_text}>{dept.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Finish button */}
      <TouchableOpacity
        style={styles.finish_div}
        onPress={() =>
          // console.log("Finish Pressed.")
          navigation.replace("TabNavigator")
        }
      >
        <Text style={styles.finish_txt}>Finish</Text>
      </TouchableOpacity>
    </View >
  );
};

export default SelectDeptScreen;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 30,
    width: '100%',
    borderWidth: 2,
    flex: 1,
    justifyContent: 'flex-start',
    paddingHorizontal: 20,
  },

  title: {
    fontWeight: 'bold',
    paddingVertical: 30,
    fontSize: 28,
  },

  img_dpt: {
    width: 20,
    height: 20,
  },

  box: {
    flexDirection: 'row',
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    backgroundColor: '#ccc',
    height: 50,
    width: '45%',
    margin: 5,
    padding: 5,
    borderRadius: 15,
  },
  box_text: {
    fontWeight: 'bold',
    textAlignVertical: 'center',
    textAlign: 'center',
  },
  scrollViewContent: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  finish_div: {
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: '#808080',
    height: 50,
    width: '90%',
    margin: 5,
    padding: 5,
    borderRadius: 15,
  },
  finish_txt: {
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff',
  },
});