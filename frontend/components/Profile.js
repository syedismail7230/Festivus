import { View, Text,Image, StyleSheet, TextInput, TouchableOpacity, SafeAreaView,FlatList,ScrollView } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'




const Profile = () => {

    const Details_list = [
        {
          user_id: "1HK21AI000",
          dp:require('./img/temp_img.png'),
          user_name: "Dummy",
          dpt: "AIML",
          lscore: 1000,
        },
      ];

  return (

    
    <View style={styles.container}>
            
        <View style={styles.Nav}> 
            <Image style={styles.img1} source={require('./img/deptSel_back.png')} />
            <Text style={styles.title}>Choose your department</Text>
        </View>




               {Details_list.map((user,i) => (
                 <View>
                    {/*display pic*/}
                    <Image style={styles.dp} source={user.dp}></Image>

                    {/*user name*/}
                    <Text style={styles.title2}>{user.user_name}</Text>


                    {/*Details list*/}
                    <View style={styles.row} >
                        <Text style={styles.Name}>Name</Text>
                        <Text style={styles.user_name}>{user.user_name}</Text>
                        
                    </View>

                    <View style={styles.row} >
                        <Text style={styles.Name}>Department</Text>
                        <Text style={styles.user_name}>{user.dpt}</Text>
                        
                    </View>
                    
                    <View style={styles.row} >
                        <Text style={styles.Name}>USN</Text>
                        <Text style={styles.user_name}>{user.user_id}</Text>
                        
                    </View>

                    {/*Lorel Score*/}
                    <View style={styles.row} >
                        <Text style={styles.lscore}>Lorel Score</Text>
                        <Text style={styles.lscore_val}>{user.lscore} pts</Text>
                        
                    </View>
                    

                    {/*signout Button*/}
                    <View style={styles.signout_div}>
                      <Text style={styles.signout_txt}>Sign Out</Text>
                      <Image source={require('./img/signout_btn.png')} style={styles.signout_img}></Image>
                    </View>


                </View>


               


                ))}






        


      

      

    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
  container: {
    
    paddingTop:'10%',
    paddingBottom:5,
    width: "100%",
    borderWidth: 2,
    flex: 1,
    justifyContent: "flex-start",
    paddingHorizontal: 20,
  },
    Nav:{
        flexDirection:'row',
        marginVertical:'10%',
      
        
            
    },
  title: {
    
    fontWeight:'bold',
    fontSize: 22,
    paddingHorizontal:'5%'
  
},
  title2: {
    fontWeight:'bold',
    fontSize: 22,
  },

img1:{
  marginVertical:'2%',
  
},

  

dp:{
    
        width:65,
        height:65,
        borderRadius:1000
      
},

row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal:5,

  },
  Name: {
    flex: 1,
    
    fontSize: 14,
    color: '#2F2F2F',
  },
  user_name: {
    fontWeight:'600',
    fontSize: 14,
    color: '#808080',
  },


  lscore: {
    flex: 1,
    fontWeight:'bold',
    fontSize: 14,
    color: '#2F2F2F',
  },
  lscore_val: {
    fontWeight:'bold',
    fontSize: 14,
    color: '#2F2F2F',
  },

  signout_div:{
    justifyContent:'center',
    alignSelf:'center',
    backgroundColor:'#808080',
    height:50,
    width:'85%',
    margin:5,
    marginTop:'25%',
    padding:5,
    borderRadius:15,
    borderColor:'#fff',
    flexDirection: 'row',
    alignItems: 'center',
  
  },
  signout_txt:{
    textAlign:'center',
    fontSize:18,
    color:'#eee',
    marginLeft:50
  },

  signout_img:
  {
    marginLeft:50
  }
})