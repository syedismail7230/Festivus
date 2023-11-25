import { Feather } from '@expo/vector-icons';
import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'

function Eventbox(props) {
  return (
    <TouchableOpacity style={styles.box}>
      <Image style={styles.image} source={require("../../assets/images/temp_img2.png")}></Image>
      <View style={styles.desc}>
        <Text style={styles.title}>{props.title}</Text>

        <View style={styles.loc_desc}>
          <View style={styles.locationContainer}>
            <Feather name="map-pin" size={24} color="black" />
            <Text style={styles.body}>{props.location}</Text>
          </View>
          <Feather name="heart" size={24} color="black" />
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default Eventbox

const styles = StyleSheet.create({

  box: {
    backgroundColor: "white",
    flexDirection: 'row',
    width: '100%',
    padding: 12,
    borderRadius: 4,
    // borderWidth: 2, borderColor: "red",
    margin: 6,
  },
  image: {
    height: 100,
    width: 100,
    borderRadius: 12,

  },
  title: {
    fontWeight: 'bold',
    color: '#25131A',
    fontSize: 14,
  },
  locationContainer: {
    flexDirection: 'row', justifyContent: "center", alignItems: "center"
  },
  body: {
    marginLeft: 2,
    color: '#8B8688',
    fontSize: 12,
  },

  desc: {
    flex: 1,
    paddingHorizontal: 15,
  },

  loc_desc:
  {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    height: 40

  },
  heart_icon:
  {
    paddingRight: 20
  }
})