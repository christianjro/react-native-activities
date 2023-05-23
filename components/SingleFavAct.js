import { View, Text, StyleSheet, Pressable } from 'react-native';

function SingleFavAct(props) {

	return (
    <Pressable onPress={() => props.onDelActivity(props.actName)}>
      <View style={styles.singleActivity}>
        <Text style={styles.activityText}>{props.actName}</Text>
      </View>
    </Pressable>

	)
}

export default SingleFavAct;

const styles = StyleSheet.create({
    singleActivity: {
      backgroundColor: '#502D91',
      borderRadius: 5,
      margin: 8,
      padding: 8
    },
    activityText: {
      color: 'white'
    }
  });
