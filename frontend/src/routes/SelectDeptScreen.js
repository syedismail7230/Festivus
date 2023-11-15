import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'

const SelectDeptScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.head}>
        <Image style={styles.img1} source={require('./img/deptSel_back.png')} />
        <Image styles={styles.img2} source={require('./img/deptSel_dashes.png')} />
        <Text style={styles.title}>Choose your department</Text>
      </View>


      {/* Departments- each with image and text */}

      <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap', gap: 10 }}>
        <View style={styles.box}>
          <Image style={styles.img_dpt} source={require('../../assets/images/deptSel_ai.png')} />
          <Text style={styles.box_text} >AI & ML</Text>
        </View>
        <View style={styles.box}>
          <Image style={styles.img_dpt} source={require('../../assets/images/deptSel_cs.png')} />
          <Text style={styles.box_text} >CSE</Text>
        </View>
        <View style={styles.box}>
          <Image style={styles.img_dpt} source={require('../../assets/images/deptSel_ele.png')} />
          <Text style={styles.box_text} >ELE</Text>
        </View>
        <View style={styles.box}>
          <Image style={styles.img_dpt} source={require('../../assets/images/deptSel_ise.png')} />
          <Text style={styles.box_text} >ISE</Text>
        </View>
        <View style={styles.box}>
          <Image style={styles.img_dpt} source={require('../../assets/images/img/deptSel_mec.png')} />
          <Text style={styles.box_text} >ME</Text>
        </View>
      </View>

      {/* Finish button */}
      <View style={styles.finish_div}>
        <Text style={styles.finish_txt}>Finish</Text>
      </View>

    </View>
  )
}

export default SelectDeptScreen

const styles = StyleSheet.create({
  container: {

    paddingVertical: 30,
    width: "100%",
    borderWidth: 2,
    flex: 1,
    justifyContent: "flex-start",
    paddingHorizontal: 20,
  },

  title: {
    fontWeight: 'bold',
    paddingVertical: 30,
    fontSize: 28,
  },

  img1: {
    marginVertical: 20,

  },

  img2: {
    marginLeft: 10,

  },

  img_dpt:
  {
    width: 20,
    height: 20,
  },

  box:
  {
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
  finish_div: {
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: '#808080',
    height: 50,
    width: '90%',
    margin: 5,
    padding: 5,
    borderRadius: 15
  },
  finish_txt: {
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff'
  }

})