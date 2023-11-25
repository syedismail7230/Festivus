import React from 'react'
import { View, Text, StyleSheet,Image, TouchableOpacity } from 'react-native'

function Eventbox(props) {
  return (
    <TouchableOpacity style={styles.box}>
        <Image source={require("../../assets/images/temp_img2.png")}></Image>
        <View style={styles.desc}>
          <Text style={styles.title}>{props.title}</Text>
          
          <View style={styles.loc_desc}>
            <View style={{flexDirection:'row'}}>
            <Image source={require("../../assets/images/location_icon.png")}></Image>
            <Text style={styles.body}>{props.location}</Text>
            </View>
            <Image style={styles.heart_icon} source={require("../../assets/images/heart_icon.png")}></Image>
          </View>
        </View>
       </TouchableOpacity>
  )
}

export default Eventbox

const styles = StyleSheet.create({
    
    box:{
        flexDirection:'row',
        width:'100%',
        padding:5
        
        
        
      },
        title: {
          fontWeight: 'bold',
          color:'#25131A',
          fontSize: 14,
          
             
      },
    
      body:{
          color:'#8B8688',
          fontSize: 12,
      },
    
      desc:{
        
        flex:1,
        paddingHorizontal:15,
        
       },
      loc_desc:
      {
        flexDirection:'row',
        alignItems:'flex-end',
        justifyContent:'space-between',
        
        height:40
        
      },
      heart_icon:
      {
        paddingRight:20
      }
})