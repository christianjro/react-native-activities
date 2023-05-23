import { View, Text, StyleSheet } from 'react-native';

function AboutMe() {
	return (
	  <View style={styles.aboutContainer}>
			<Text style={styles.aboutHeadingText}>About Me</Text>
			<View>
			  <Text>I'm a lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
			</View>
	  </View>
	)
}

export default AboutMe;

const styles = StyleSheet.create({
    aboutContainer: {
      paddingVertical: 30,
      justifyContent: 'space-between',
      alignItems: 'center',
      borderBottomWidth: 1,
      borderBottomColor: '#cccccc',
    },
    aboutHeadingText: {
      fontSize: 20,
      paddingBottom: 10
    }
  });