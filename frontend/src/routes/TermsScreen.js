import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity, SafeAreaView, ScrollView, } from 'react-native'
import React from 'react'

const TermsScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.head}>
          <Text style={styles.title}>Terms and Condition</Text>
          <Text style={styles.body}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum feugiat ante, nec scelerisque dui viverra a. Aliquam sit amet pulvinar libero, sagittis vehicula ipsum. Vivamus luctus aliquet lacus. Proin tellus nibh, consectetur placerat sodales et, porta sed leo. Nunc id odio massa. Nulla vel nunc ex. Nunc fringilla rhoncus arcu sed mollis. Proin sed elit ante. Suspendisse porttitor mauris sit amet tincidunt tincidunt. Etiam ut bibendum dolor, in sollicitudin velit. Morbi semper molestie lacus, sit amet convallis magna ullamcorper et. Aliquam ac auctor ipsum. Proin sed tellus sit amet felis faucibus iaculis eu non erat.
            Aliquam ac arcu a velit gravida laoreet. Nunc volutpat pretium dui at congue. Sed sit amet ligula sagittis, efficitur quam eu, vestibulum enim. Fusce tincidunt porta enim et interdum. Etiam sodales nisi eu vehicula bibendum. Integer eget lacus eu dolor hendrerit ultricies. Integer faucibus lacinia porttitor. Etiam in massa eget quam convallis placerat in a nisi. Phasellus consequat mattis justo. Etiam placerat lectus sit amet arcu elementum accumsan. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras eget lacus vitae lacus placerat elementum vel in quam. Vestibulum vitae nulla porttitor, egestas tellus a, volutpat nunc. Donec sollicitudin varius dui sed porta. Nullam ultrices est in magna congue, at porta nibh bibendum. Praesent vitae placerat nunc.
            Ut tincidunt turpis vitae eros bibendum iaculis. Nam porta vitae lacus at tristique. Sed viverra eros ut porta efficitur. Duis congue eget nulla nec suscipit. Donec suscipit ornare euismod. Aenean et condimentum nulla. Nunc vel vehicula enim, id mattis nisl. Curabitur euismod eu turpis id tempor. Proin ut aliquet augue. In hendrerit, nibh et posuere fermentum, urna tellus venenatis massa, eget suscipit ligula mi vitae dui. Praesent tincidunt accumsan justo, eget mattis risus feugiat in.
            Nullam in dignissim sapien, ut ultricies augue. Vivamus egestas, ante nec maximus ornare, orci justo suscipit arcu, fringilla sodales eros nisl suscipit odio. Vestibulum tincidunt, mi quis faucibus feugiat, dolor mauris lacinia ipsum, non ultricies tellus quam sit amet lectus. Nullam et est id enim dictum mattis. Etiam aliquam placerat luctus. Sed pretium velit vel fermentum euismod. Cras in volutpat orci, in accumsan erat.
            Vestibulum commodo dictum lorem in mattis. Aliquam sodales posuere nulla vitae varius. Curabitur laoreet ullamcorper laoreet. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut at vulputate nulla. Vivamus bibendum risus scelerisque iaculis facilisis. Praesent sodales odio ac leo mollis, nec efficitur sapien porttitor. Duis mollis nisi sed suscipit sodales. Aliquam erat volutpat. Fusce ac ullamcorper quam, blandit dictum lacus.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum feugiat ante, nec scelerisque dui viverra a. Aliquam sit amet pulvinar libero, sagittis vehicula ipsum. Vivamus luctus aliquet lacus. Proin tellus nibh, consectetur placerat sodales et, porta sed leo. Nunc id odio massa. Nulla vel nunc ex. Nunc fringilla rhoncus arcu sed mollis. Proin sed elit ante. Suspendisse porttitor mauris sit amet tincidunt tincidunt. Etiam ut bibendum dolor, in sollicitudin velit. Morbi semper molestie lacus, sit amet convallis magna ullamcorper et. Aliquam ac auctor ipsum. Proin sed tellus sit amet felis faucibus iaculis eu non erat.
            Aliquam ac arcu a velit gravida laoreet. Nunc volutpat pretium dui at congue. Sed sit amet ligula sagittis, efficitur quam eu, vestibulum enim. Fusce tincidunt porta enim et interdum. Etiam sodales nisi eu vehicula bibendum. Integer eget lacus eu dolor hendrerit ultricies. Integer faucibus lacinia porttitor. Etiam in massa eget quam convallis placerat in a nisi. Phasellus consequat mattis justo. Etiam placerat lectus sit amet arcu elementum accumsan. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras eget lacus vitae lacus placerat elementum vel in quam. Vestibulum vitae nulla porttitor, egestas tellus a, volutpat nunc. Donec sollicitudin varius dui sed porta. Nullam ultrices est in magna congue, at porta nibh bibendum. Praesent vitae placerat nunc.
            Ut tincidunt turpis vitae eros bibendum iaculis. Nam porta vitae lacus at tristique. Sed viverra eros ut porta efficitur. Duis congue eget nulla nec suscipit. Donec suscipit ornare euismod. Aenean et condimentum nulla. Nunc vel vehicula enim, id mattis nisl. Curabitur euismod eu turpis id tempor. Proin ut aliquet augue. In hendrerit, nibh et posuere fermentum, urna tellus venenatis massa, eget suscipit ligula mi vitae dui. Praesent tincidunt accumsan justo, eget mattis risus feugiat in.
            Nullam in dignissim sapien, ut ultricies augue. Vivamus egestas, ante nec maximus ornare, orci justo suscipit arcu, fringilla sodales eros nisl suscipit odio. Vestibulum tincidunt, mi quis faucibus feugiat, dolor mauris lacinia ipsum, non ultricies tellus quam sit amet lectus. Nullam et est id enim dictum mattis. Etiam aliquam placerat luctus. Sed pretium velit vel fermentum euismod. Cras in volutpat orci, in accumsan erat.
            Vestibulum commodo dictum lorem in mattis. Aliquam sodales posuere nulla vitae varius. Curabitur laoreet ullamcorper laoreet. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut at vulputate nulla. Vivamus bibendum risus scelerisque iaculis facilisis. Praesent sodales odio ac leo mollis, nec efficitur sapien porttitor. Duis mollis nisi sed suscipit sodales. Aliquam erat volutpat. Fusce ac ullamcorper quam, blandit dictum lacus.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum feugiat ante, nec scelerisque dui viverra a. Aliquam sit amet pulvinar libero, sagittis vehicula ipsum. Vivamus luctus aliquet lacus. Proin tellus nibh, consectetur placerat sodales et, porta sed leo. Nunc id odio massa. Nulla vel nunc ex. Nunc fringilla rhoncus arcu sed mollis. Proin sed elit ante. Suspendisse porttitor mauris sit amet tincidunt tincidunt. Etiam ut bibendum dolor, in sollicitudin velit. Morbi semper molestie lacus, sit amet convallis magna ullamcorper et. Aliquam ac auctor ipsum. Proin sed tellus sit amet felis faucibus iaculis eu non erat.
            Aliquam ac arcu a velit gravida laoreet. Nunc volutpat pretium dui at congue. Sed sit amet ligula sagittis, efficitur quam eu, vestibulum enim. Fusce tincidunt porta enim et interdum. Etiam sodales nisi eu vehicula bibendum. Integer eget lacus eu dolor hendrerit ultricies. Integer faucibus lacinia porttitor. Etiam in massa eget quam convallis placerat in a nisi. Phasellus consequat mattis justo. Etiam placerat lectus sit amet arcu elementum accumsan. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras eget lacus vitae lacus placerat elementum vel in quam. Vestibulum vitae nulla porttitor, egestas tellus a, volutpat nunc. Donec sollicitudin varius dui sed porta. Nullam ultrices est in magna congue, at porta nibh bibendum. Praesent vitae placerat nunc.
            Ut tincidunt turpis vitae eros bibendum iaculis. Nam porta vitae lacus at tristique. Sed viverra eros ut porta efficitur. Duis congue eget nulla nec suscipit. Donec suscipit ornare euismod. Aenean et condimentum nulla. Nunc vel vehicula enim, id mattis nisl. Curabitur euismod eu turpis id tempor. Proin ut aliquet augue. In hendrerit, nibh et posuere fermentum, urna tellus venenatis massa, eget suscipit ligula mi vitae dui. Praesent tincidunt accumsan justo, eget mattis risus feugiat in.
            Nullam in dignissim sapien, ut ultricies augue. Vivamus egestas, ante nec maximus ornare, orci justo suscipit arcu, fringilla sodales eros nisl suscipit odio. Vestibulum tincidunt, mi quis faucibus feugiat, dolor mauris lacinia ipsum, non ultricies tellus quam sit amet lectus. Nullam et est id enim dictum mattis. Etiam aliquam placerat luctus. Sed pretium velit vel fermentum euismod. Cras in volutpat orci, in accumsan erat.
            Vestibulum commodo dictum lorem in mattis. Aliquam sodales posuere nulla vitae varius. Curabitur laoreet ullamcorper laoreet. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut at vulputate nulla. Vivamus bibendum risus scelerisque iaculis facilisis. Praesent sodales odio ac leo mollis, nec efficitur sapien porttitor. Duis mollis nisi sed suscipit sodales. Aliquam erat volutpat. Fusce ac ullamcorper quam, blandit dictum lacus.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum feugiat ante, nec scelerisque dui viverra a. Aliquam sit amet pulvinar libero, sagittis vehicula ipsum. Vivamus luctus aliquet lacus. Proin tellus nibh, consectetur placerat sodales et, porta sed leo. Nunc id odio massa. Nulla vel nunc ex. Nunc fringilla rhoncus arcu sed mollis. Proin sed elit ante. Suspendisse porttitor mauris sit amet tincidunt tincidunt. Etiam ut bibendum dolor, in sollicitudin velit. Morbi semper molestie lacus, sit amet convallis magna ullamcorper et. Aliquam ac auctor ipsum. Proin sed tellus sit amet felis faucibus iaculis eu non erat.
            Aliquam ac arcu a velit gravida laoreet. Nunc volutpat pretium dui at congue. Sed sit amet ligula sagittis, efficitur quam eu, vestibulum enim. Fusce tincidunt porta enim et interdum. Etiam sodales nisi eu vehicula bibendum. Integer eget lacus eu dolor hendrerit ultricies. Integer faucibus lacinia porttitor. Etiam in massa eget quam convallis placerat in a nisi. Phasellus consequat mattis justo. Etiam placerat lectus sit amet arcu elementum accumsan. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras eget lacus vitae lacus placerat elementum vel in quam. Vestibulum vitae nulla porttitor, egestas tellus a, volutpat nunc. Donec sollicitudin varius dui sed porta. Nullam ultrices est in magna congue, at porta nibh bibendum. Praesent vitae placerat nunc.
            Ut tincidunt turpis vitae eros bibendum iaculis. Nam porta vitae lacus at tristique. Sed viverra eros ut porta efficitur. Duis congue eget nulla nec suscipit. Donec suscipit ornare euismod. Aenean et condimentum nulla. Nunc vel vehicula enim, id mattis nisl. Curabitur euismod eu turpis id tempor. Proin ut aliquet augue. In hendrerit, nibh et posuere fermentum, urna tellus venenatis massa, eget suscipit ligula mi vitae dui. Praesent tincidunt accumsan justo, eget mattis risus feugiat in.
            Nullam in dignissim sapien, ut ultricies augue. Vivamus egestas, ante nec maximus ornare, orci justo suscipit arcu, fringilla sodales eros nisl suscipit odio. Vestibulum tincidunt, mi quis faucibus feugiat, dolor mauris lacinia ipsum, non ultricies tellus quam sit amet lectus. Nullam et est id enim dictum mattis. Etiam aliquam placerat luctus. Sed pretium velit vel fermentum euismod. Cras in volutpat orci, in accumsan erat.
            Vestibulum commodo dictum lorem in mattis. Aliquam sodales posuere nulla vitae varius. Curabitur laoreet ullamcorper laoreet. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut at vulputate nulla. Vivamus bibendum risus scelerisque iaculis facilisis. Praesent sodales odio ac leo mollis, nec efficitur sapien porttitor. Duis mollis nisi sed suscipit sodales. Aliquam erat volutpat. Fusce ac ullamcorper quam, blandit dictum lacus.
          </Text>
        </View>

        {/* Finish button */}
        <View style={styles.Accept_div}>
          <Text style={styles.Accept_txt}>Accept</Text>
        </View>


      </ScrollView>







    </View>
  )
}

export default TermsScreen;

const styles = StyleSheet.create({
  container: {

    paddingTop: 30,
    paddingBottom: 5,
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

  body: {

  },


  Accept_div: {
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: '#808080',
    height: 50,
    width: '90%',
    margin: 5,
    padding: 5,
    borderRadius: 15
  },
  Accept_txt: {
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff'
  }

})