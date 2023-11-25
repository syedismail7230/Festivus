import React from 'react'
import { View, Text, StyleSheet,Image, TextInput, TouchableOpacity } from 'react-native'

function NavBar(props) {
  return (
    <View style={styles.container}>
    {/* Nav bar */}
    <View style={styles.Nav}> 
            <Image style={styles.Nav_img} source={require('../../assets/images/deptSel_back.png')} />
            <Text style={styles.Nav_title}>{props.NavTitle}</Text>
        </View>
    </View>
  )
}

export default NavBar

const styles = StyleSheet.create({
    
    Nav:{
      flexDirection:'row',
      paddingTop:'5%',
      alignItems: 'center',
      
      
            
    },
    Nav_title: {
      
      fontWeight:'bold',
      fontSize: 22,

      marginHorizontal:70
  
    },


    Nav_img:{
      marginVertical:'2%',
    }
})