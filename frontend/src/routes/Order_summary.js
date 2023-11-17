import { View, Text,Image, StyleSheet, TextInput, TouchableOpacity, SafeAreaView,FlatList,ScrollView,Button } from 'react-native'
import React from 'react'





const Order_summary = () => {

    const Details_list = [
        {
          user_id: "1HK21AI000",
          amt: 100.00,
          misc:0.00,
          fees:0.00,
          total:100.00,
        },
      ];

  return (

    
    <View style={styles.container}>
        
        {/* Nav bar */}
        <View style={styles.Nav}> 
            <Image style={styles.img1} source={require('../../assets/images/deptSel_back.png')} />
            <Text style={styles.title}>Order Summary</Text>
        </View>

          {/*Event view*/}
        <View>
        <Image style={styles.img2} source={require('../../assets/images/event_temp.png')} />
        </View>


        <Text style={styles.title2}>Order Summary</Text>

        {Details_list.map((user,i) => (
          <View style={styles.detail_list}>

            {/*Details list*/}
            <View style={styles.row} >
                <Text style={styles.Name}>Participation</Text>
                <Text style={styles.amt}>Rs. {user.amt}</Text>
                
            </View>

            <View style={styles.row} >
                <Text style={styles.Name}>Misc</Text>
                <Text style={styles.amt}>Rs. {user.misc}</Text>
                
            </View>
            
            <View style={styles.row} >
                <Text style={styles.Name}>Fees</Text>
                <Text style={styles.amt}>Rs. {user.fees}</Text>
                
            </View>

            {/*Lorel Score*/}
            <View style={styles.row} >
                <Text style={styles.total}>Total</Text>
                <Text style={styles.total_val}>Rs. {user.total}</Text>
                
            </View>

        </View>
        

        


        ))}

      <Text style={styles.title2}>Paymen Method</Text>

      {/*Place order button*/}
        <TouchableOpacity >          
       <View style={styles.btn_div}>
          <Text style={styles.btn_txt}>Place Order</Text>
        </View>
        </TouchableOpacity>

    </View>
  )
}

export default Order_summary

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
        alignItems: 'center',
            
    },
  title: {
    
    fontWeight:'bold',
    fontSize: 22,

    marginHorizontal:70
  
},

detail_list:{

},

  title2: {
    fontWeight:'bold',
    fontSize: 16,
    marginBottom:20
  },

img1:{
  marginVertical:'2%',
  
  
},
img2:{
  width:'100%'
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
  amt: {
    fontWeight:'600',
    fontSize: 14,
    color: '#808080',
  },


  total: {
    flex: 1,
    fontWeight:'bold',
    fontSize: 14,
    color: '#2F2F2F',
  },
  total_val: {
    fontWeight:'bold',
    fontSize: 14,
    color: '#2F2F2F',
  },
  btn1:{
    marginTop:30,
    width:'100%',
    alignItems:'center',
    borderRadius:20
    
  },

  btn_div:{
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
  btn_txt:{
    textAlign:'center',
    fontSize:18,
    color:'#eee',
  },

 
})