import { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function ActivityGenerator() {
  const [searchResults, setSearchResults] = useState({});

  function handlePress(evt) {
	fetch('https://www.boredapi.com/api/activity/')
		.then(response => response.json())
		.then(data => {
			const parsedData = {
				activityName: data.activity,
				price: data.price,
				type: data.type,
				participants: data.participants
			}
			setSearchResults(parsedData)
		})
  }

	return (
		<View style={styles.actGeneratorContainer}>
			<Text style={styles.actGeneratorHeading}>Do you need help finding something to do?</Text>
			<View style={styles.activityResults}>
			{ 
				(Object.keys(searchResults).length !== 0)
				? <View style={{ textAlign: 'center', paddingVertical: 10 }}>
						<Text>{searchResults.activityName}</Text>
						<Text>Price: {searchResults.price}</Text>
						<Text>Type: {searchResults.type}</Text> 
						<Text>Num of Participants needed: {searchResults.participants}</Text>
					</View>
				: ''
			}
			</View>
			<View style={styles.getActivityForm}>
				<Button title="Click for a new activity" onPress={handlePress} />
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
    actGeneratorContainer: {
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingVertical: 30,
      minHeight: '15%'
    },
    actGeneratorHeading: {
			fontSize: 20,
    },
    activityResults: {
      width: '60%',
      marginVertical: 10
    },
    getActivityForm: {
    	marginVertical: 10
    },
    getActivityBtn: {
    	marginVertical: 10
    }
  });