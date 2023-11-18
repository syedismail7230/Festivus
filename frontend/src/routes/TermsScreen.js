// import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity, SafeAreaView, ScrollView, } from 'react-native'
// import React from 'react'

// const TermsScreen = () => {
//   return (
//     <View style={styles.container}>
//       <ScrollView>
//         <View style={styles.head}>
//           <Text style={styles.title}>Terms and Condition</Text>
//           <Text style={styles.body}>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum feugiat ante, nec scelerisque dui viverra a. Aliquam sit amet pulvinar libero, sagittis vehicula ipsum. Vivamus luctus aliquet lacus. Proin tellus nibh, consectetur placerat sodales et, porta sed leo. Nunc id odio massa. Nulla vel nunc ex. Nunc fringilla rhoncus arcu sed mollis. Proin sed elit ante. Suspendisse porttitor mauris sit amet tincidunt tincidunt. Etiam ut bibendum dolor, in sollicitudin velit. Morbi semper molestie lacus, sit amet convallis magna ullamcorper et. Aliquam ac auctor ipsum. Proin sed tellus sit amet felis faucibus iaculis eu non erat.
//             Aliquam ac arcu a velit gravida laoreet. Nunc volutpat pretium dui at congue. Sed sit amet ligula sagittis, efficitur quam eu, vestibulum enim. Fusce tincidunt porta enim et interdum. Etiam sodales nisi eu vehicula bibendum. Integer eget lacus eu dolor hendrerit ultricies. Integer faucibus lacinia porttitor. Etiam in massa eget quam convallis placerat in a nisi. Phasellus consequat mattis justo. Etiam placerat lectus sit amet arcu elementum accumsan. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras eget lacus vitae lacus placerat elementum vel in quam. Vestibulum vitae nulla porttitor, egestas tellus a, volutpat nunc. Donec sollicitudin varius dui sed porta. Nullam ultrices est in magna congue, at porta nibh bibendum. Praesent vitae placerat nunc.
//             Ut tincidunt turpis vitae eros bibendum iaculis. Nam porta vitae lacus at tristique. Sed viverra eros ut porta efficitur. Duis congue eget nulla nec suscipit. Donec suscipit ornare euismod. Aenean et condimentum nulla. Nunc vel vehicula enim, id mattis nisl. Curabitur euismod eu turpis id tempor. Proin ut aliquet augue. In hendrerit, nibh et posuere fermentum, urna tellus venenatis massa, eget suscipit ligula mi vitae dui. Praesent tincidunt accumsan justo, eget mattis risus feugiat in.
//             Nullam in dignissim sapien, ut ultricies augue. Vivamus egestas, ante nec maximus ornare, orci justo suscipit arcu, fringilla sodales eros nisl suscipit odio. Vestibulum tincidunt, mi quis faucibus feugiat, dolor mauris lacinia ipsum, non ultricies tellus quam sit amet lectus. Nullam et est id enim dictum mattis. Etiam aliquam placerat luctus. Sed pretium velit vel fermentum euismod. Cras in volutpat orci, in accumsan erat.
//             Vestibulum commodo dictum lorem in mattis. Aliquam sodales posuere nulla vitae varius. Curabitur laoreet ullamcorper laoreet. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut at vulputate nulla. Vivamus bibendum risus scelerisque iaculis facilisis. Praesent sodales odio ac leo mollis, nec efficitur sapien porttitor. Duis mollis nisi sed suscipit sodales. Aliquam erat volutpat. Fusce ac ullamcorper quam, blandit dictum lacus.
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum feugiat ante, nec scelerisque dui viverra a. Aliquam sit amet pulvinar libero, sagittis vehicula ipsum. Vivamus luctus aliquet lacus. Proin tellus nibh, consectetur placerat sodales et, porta sed leo. Nunc id odio massa. Nulla vel nunc ex. Nunc fringilla rhoncus arcu sed mollis. Proin sed elit ante. Suspendisse porttitor mauris sit amet tincidunt tincidunt. Etiam ut bibendum dolor, in sollicitudin velit. Morbi semper molestie lacus, sit amet convallis magna ullamcorper et. Aliquam ac auctor ipsum. Proin sed tellus sit amet felis faucibus iaculis eu non erat.
//             Aliquam ac arcu a velit gravida laoreet. Nunc volutpat pretium dui at congue. Sed sit amet ligula sagittis, efficitur quam eu, vestibulum enim. Fusce tincidunt porta enim et interdum. Etiam sodales nisi eu vehicula bibendum. Integer eget lacus eu dolor hendrerit ultricies. Integer faucibus lacinia porttitor. Etiam in massa eget quam convallis placerat in a nisi. Phasellus consequat mattis justo. Etiam placerat lectus sit amet arcu elementum accumsan. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras eget lacus vitae lacus placerat elementum vel in quam. Vestibulum vitae nulla porttitor, egestas tellus a, volutpat nunc. Donec sollicitudin varius dui sed porta. Nullam ultrices est in magna congue, at porta nibh bibendum. Praesent vitae placerat nunc.
//             Ut tincidunt turpis vitae eros bibendum iaculis. Nam porta vitae lacus at tristique. Sed viverra eros ut porta efficitur. Duis congue eget nulla nec suscipit. Donec suscipit ornare euismod. Aenean et condimentum nulla. Nunc vel vehicula enim, id mattis nisl. Curabitur euismod eu turpis id tempor. Proin ut aliquet augue. In hendrerit, nibh et posuere fermentum, urna tellus venenatis massa, eget suscipit ligula mi vitae dui. Praesent tincidunt accumsan justo, eget mattis risus feugiat in.
//             Nullam in dignissim sapien, ut ultricies augue. Vivamus egestas, ante nec maximus ornare, orci justo suscipit arcu, fringilla sodales eros nisl suscipit odio. Vestibulum tincidunt, mi quis faucibus feugiat, dolor mauris lacinia ipsum, non ultricies tellus quam sit amet lectus. Nullam et est id enim dictum mattis. Etiam aliquam placerat luctus. Sed pretium velit vel fermentum euismod. Cras in volutpat orci, in accumsan erat.
//             Vestibulum commodo dictum lorem in mattis. Aliquam sodales posuere nulla vitae varius. Curabitur laoreet ullamcorper laoreet. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut at vulputate nulla. Vivamus bibendum risus scelerisque iaculis facilisis. Praesent sodales odio ac leo mollis, nec efficitur sapien porttitor. Duis mollis nisi sed suscipit sodales. Aliquam erat volutpat. Fusce ac ullamcorper quam, blandit dictum lacus.
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum feugiat ante, nec scelerisque dui viverra a. Aliquam sit amet pulvinar libero, sagittis vehicula ipsum. Vivamus luctus aliquet lacus. Proin tellus nibh, consectetur placerat sodales et, porta sed leo. Nunc id odio massa. Nulla vel nunc ex. Nunc fringilla rhoncus arcu sed mollis. Proin sed elit ante. Suspendisse porttitor mauris sit amet tincidunt tincidunt. Etiam ut bibendum dolor, in sollicitudin velit. Morbi semper molestie lacus, sit amet convallis magna ullamcorper et. Aliquam ac auctor ipsum. Proin sed tellus sit amet felis faucibus iaculis eu non erat.
//             Aliquam ac arcu a velit gravida laoreet. Nunc volutpat pretium dui at congue. Sed sit amet ligula sagittis, efficitur quam eu, vestibulum enim. Fusce tincidunt porta enim et interdum. Etiam sodales nisi eu vehicula bibendum. Integer eget lacus eu dolor hendrerit ultricies. Integer faucibus lacinia porttitor. Etiam in massa eget quam convallis placerat in a nisi. Phasellus consequat mattis justo. Etiam placerat lectus sit amet arcu elementum accumsan. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras eget lacus vitae lacus placerat elementum vel in quam. Vestibulum vitae nulla porttitor, egestas tellus a, volutpat nunc. Donec sollicitudin varius dui sed porta. Nullam ultrices est in magna congue, at porta nibh bibendum. Praesent vitae placerat nunc.
//             Ut tincidunt turpis vitae eros bibendum iaculis. Nam porta vitae lacus at tristique. Sed viverra eros ut porta efficitur. Duis congue eget nulla nec suscipit. Donec suscipit ornare euismod. Aenean et condimentum nulla. Nunc vel vehicula enim, id mattis nisl. Curabitur euismod eu turpis id tempor. Proin ut aliquet augue. In hendrerit, nibh et posuere fermentum, urna tellus venenatis massa, eget suscipit ligula mi vitae dui. Praesent tincidunt accumsan justo, eget mattis risus feugiat in.
//             Nullam in dignissim sapien, ut ultricies augue. Vivamus egestas, ante nec maximus ornare, orci justo suscipit arcu, fringilla sodales eros nisl suscipit odio. Vestibulum tincidunt, mi quis faucibus feugiat, dolor mauris lacinia ipsum, non ultricies tellus quam sit amet lectus. Nullam et est id enim dictum mattis. Etiam aliquam placerat luctus. Sed pretium velit vel fermentum euismod. Cras in volutpat orci, in accumsan erat.
//             Vestibulum commodo dictum lorem in mattis. Aliquam sodales posuere nulla vitae varius. Curabitur laoreet ullamcorper laoreet. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut at vulputate nulla. Vivamus bibendum risus scelerisque iaculis facilisis. Praesent sodales odio ac leo mollis, nec efficitur sapien porttitor. Duis mollis nisi sed suscipit sodales. Aliquam erat volutpat. Fusce ac ullamcorper quam, blandit dictum lacus.
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum feugiat ante, nec scelerisque dui viverra a. Aliquam sit amet pulvinar libero, sagittis vehicula ipsum. Vivamus luctus aliquet lacus. Proin tellus nibh, consectetur placerat sodales et, porta sed leo. Nunc id odio massa. Nulla vel nunc ex. Nunc fringilla rhoncus arcu sed mollis. Proin sed elit ante. Suspendisse porttitor mauris sit amet tincidunt tincidunt. Etiam ut bibendum dolor, in sollicitudin velit. Morbi semper molestie lacus, sit amet convallis magna ullamcorper et. Aliquam ac auctor ipsum. Proin sed tellus sit amet felis faucibus iaculis eu non erat.
//             Aliquam ac arcu a velit gravida laoreet. Nunc volutpat pretium dui at congue. Sed sit amet ligula sagittis, efficitur quam eu, vestibulum enim. Fusce tincidunt porta enim et interdum. Etiam sodales nisi eu vehicula bibendum. Integer eget lacus eu dolor hendrerit ultricies. Integer faucibus lacinia porttitor. Etiam in massa eget quam convallis placerat in a nisi. Phasellus consequat mattis justo. Etiam placerat lectus sit amet arcu elementum accumsan. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras eget lacus vitae lacus placerat elementum vel in quam. Vestibulum vitae nulla porttitor, egestas tellus a, volutpat nunc. Donec sollicitudin varius dui sed porta. Nullam ultrices est in magna congue, at porta nibh bibendum. Praesent vitae placerat nunc.
//             Ut tincidunt turpis vitae eros bibendum iaculis. Nam porta vitae lacus at tristique. Sed viverra eros ut porta efficitur. Duis congue eget nulla nec suscipit. Donec suscipit ornare euismod. Aenean et condimentum nulla. Nunc vel vehicula enim, id mattis nisl. Curabitur euismod eu turpis id tempor. Proin ut aliquet augue. In hendrerit, nibh et posuere fermentum, urna tellus venenatis massa, eget suscipit ligula mi vitae dui. Praesent tincidunt accumsan justo, eget mattis risus feugiat in.
//             Nullam in dignissim sapien, ut ultricies augue. Vivamus egestas, ante nec maximus ornare, orci justo suscipit arcu, fringilla sodales eros nisl suscipit odio. Vestibulum tincidunt, mi quis faucibus feugiat, dolor mauris lacinia ipsum, non ultricies tellus quam sit amet lectus. Nullam et est id enim dictum mattis. Etiam aliquam placerat luctus. Sed pretium velit vel fermentum euismod. Cras in volutpat orci, in accumsan erat.
//             Vestibulum commodo dictum lorem in mattis. Aliquam sodales posuere nulla vitae varius. Curabitur laoreet ullamcorper laoreet. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut at vulputate nulla. Vivamus bibendum risus scelerisque iaculis facilisis. Praesent sodales odio ac leo mollis, nec efficitur sapien porttitor. Duis mollis nisi sed suscipit sodales. Aliquam erat volutpat. Fusce ac ullamcorper quam, blandit dictum lacus.
//           </Text>
//         </View>

//         {/* Finish button */}
//         <View style={styles.Accept_div}>
//           <Text style={styles.Accept_txt}>Accept</Text>
//         </View>


//       </ScrollView>







//     </View>
//   )
// }

// export default TermsScreen;

// const styles = StyleSheet.create({
//   container: {

//     paddingTop: 30,
//     paddingBottom: 5,
//     width: "100%",
//     borderWidth: 2,
//     flex: 1,
//     justifyContent: "flex-start",
//     paddingHorizontal: 20,
//   },

//   title: {
//     fontWeight: 'bold',
//     paddingVertical: 30,
//     fontSize: 28,
//   },

//   body: {

//   },


//   Accept_div: {
//     justifyContent: 'center',
//     alignSelf: 'center',
//     backgroundColor: '#808080',
//     height: 50,
//     width: '90%',
//     margin: 5,
//     padding: 5,
//     borderRadius: 15
//   },
//   Accept_txt: {
//     fontWeight: 'bold',
//     textAlign: 'center',
//     color: '#fff'
//   }

// })

import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

const TermsAndConditionsScreen = () => {

  const handleAccept = () => {
    console.log('Terms accepted!');
  };
  return (
    <ScrollView style={styles.container}>
      <View style={styles.topSpace} />

      <Text style={styles.title}>Terms and Conditions</Text>

      <Text style={styles.sectionTitle}>1. Acceptance of Terms</Text>
      <Text>
        By using this application, you agree to comply with and be bound by these terms and conditions.
        If you do not agree to these terms, please do not use the application.
      </Text>

      <Text style={styles.sectionTitle}>2. User Responsibilities</Text>
      <Text>
        Users are responsible for their actions within the application. Users must not engage in
        unlawful or harmful activities and must comply with all applicable laws and regulations.
      </Text>

      <Text style={styles.sectionTitle}>3. Privacy</Text>
      <Text>
        Our privacy policy outlines how we collect, use, and disclose your personal information.
        By using the application, you agree to the terms outlined in our privacy policy.
      </Text>

      <Text style={styles.sectionTitle}>4. Intellectual Property</Text>
      <Text>
        All content and materials in the application are the property of the application owner and
        are protected by intellectual property laws. Users may not reproduce, distribute, or
        create derivative works without permission.
      </Text>

      <Text style={styles.sectionTitle}>5. Termination</Text>
      <Text>
        The application owner reserves the right to terminate or suspend user accounts at any time
        for violations of these terms or for any other reason.
      </Text>

      <Text style={styles.sectionTitle}>6. Disclaimer of Warranty</Text>
      <Text>
        The application is provided "as is" without warranties of any kind. The application owner
        makes no guarantees regarding the availability, reliability, or security of the application.
      </Text>

      <Text style={styles.sectionTitle}>7. Changes to Terms</Text>
      <Text>
        The application owner reserves the right to change these terms and conditions at any time.
        Users will be notified of changes, and continued use of the application constitutes acceptance
        of the modified terms.
      </Text>

      <Text style={styles.sectionTitle}>8. Governing Law</Text>
      <Text>
        These terms and conditions are governed by and construed in accordance with the laws of [Your Country/Region].
      </Text>

      <Text style={styles.sectionTitle}>Contact Us</Text>
      <Text>
        If you have any questions about these terms and conditions, please contact us at [Your Contact Information].
      </Text>

      <TouchableOpacity style={styles.acceptButton} onPress={handleAccept}>
        <Text style={styles.acceptButtonText}>Accept</Text>
      </TouchableOpacity>
      <View style={styles.bottomSpace} />

    </ScrollView>
  );
};

export default TermsAndConditionsScreen;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 15,
  },
  acceptButton: {
    backgroundColor: '#808080', // Use the color from your design system
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    marginTop: 20,
  },
  acceptButtonText: {
    color: '#fff', // Use the text color from your design system
    fontWeight: 'bold',
    fontSize: 18,
  },
  bottomSpace: {
    height: 80, // Adjust the height of the additional space as needed
  },
  topSpace: {
    height: 80,
  }
});
