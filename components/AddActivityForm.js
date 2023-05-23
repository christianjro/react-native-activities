import { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function AddActivityForm(props) {
	const [activityInput, setActivityInput] = useState('');

	function handleInputChange(enteredText) {
		setActivityInput(enteredText);
	}

	function handleAddActivity() {
		props.onAddActivity(activityInput);
		setActivityInput('');
	}
	
	return(
		<View style={styles.inputContainer}>
			<Text style={styles.inputHeading}>Add a new activity</Text>
			<TextInput style={styles.textInput} onChangeText={handleInputChange} value={activityInput} />
			<Button title="Add Activity" onPress={handleAddActivity} />
		</View>
	)
}

const styles = StyleSheet.create({
    inputContainer: {
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingVertical: 30,
      borderBottomWidth: 1,
      borderBottomColor: '#cccccc',
    },
    inputHeading: {
			fontSize: 18,
      paddingBottom: 10,
    },
    textInput: {
      borderWidth: 1,
      borderColor: '#ccc',
      width: '60%',
      marginVertical: 10
    }
  });