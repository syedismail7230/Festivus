import React from 'react'
import { View, Text, StyleSheet,Image, TextInput, TouchableOpacity } from 'react-native'

function Btn1(props) {
  return (
    <View style={styles.container}>
    
        <TouchableOpacity >          
        <View style={styles.btn_div}>
                      <Text style={styles.btn_txt}>{props.btn_txt}</Text>
                      <Image source={props.img_url} style={styles.btn_img}></Image>
                    </View>

        </TouchableOpacity>
    </View>
  )
}

export default Btn1

const styles = StyleSheet.create({
    
  

    btn_div:{
      justifyContent:'center',
      alignSelf:'center',
      backgroundColor:'#808080',
      height:50,
      width:'85%',
      margin:5,
      padding:5,
      borderRadius:15,
      borderColor:'#fff',
      flexDirection: 'row',
      alignItems: 'center',
    
    },
    btn_txt:{
      textAlign:'center',
      fontSize:18,
      color:'#eee',
    },
    
  btn_img:
  {
    marginLeft:50
  }
})