import { View, Text, StyleSheet } from 'react-native';

function Jumbotron() {
	return (
      <View style={styles.jumbotron}>
        <Text style={styles.jumbotronText}>Welcome to my super cool, feature-rich native app!</Text>
      </View>
	)
}

export default Jumbotron;

const styles = StyleSheet.create({
    jumbotron: {
      paddingVertical: 30,
      borderBottomWidth: 1,
      borderBottomColor: '#cccccc',
      textAlign: 'center'
    },
    jumbotronText: {
      fontSize: 25
    }
  });