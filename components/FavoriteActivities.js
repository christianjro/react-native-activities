import { View, ScrollView, Text, FlatList, StyleSheet } from 'react-native';
import SingleFavAct from './SingleFavAct';
import AddActivityForm from './AddActivityForm';

export default function FavoriteActivities(props) {
	return (
    <View style={styles.favoritesContainer}>
      <ScrollView>
        <Text style={styles.favoritesHeadingText}>My Favorite Activities</Text>
        <View>
          {
            props.activities.map( (activity) => <SingleFavAct key={activity} actName={activity} />  )
          }
        </View>

        <AddActivityForm onAddActivity={props.onAddActivity} />

      </ScrollView>
    </View>

	)
}

// Alternate approach with FlatList =>

// <View>
// 	<FlatList data={props.activities} renderItem={ (actData) => {
//     return (
//     <SingleFavAct actName={actData.item} />
//     )
//   }}
//   keyExtractor={ (item, index) => {
//    return Math.random().toString()
// }}
//   alwaysBounceVertical={false} />
// </View>

const styles = StyleSheet.create({
    favoritesContainer: {
      paddingVertical: 30,
      borderTopWidth: 1,
      borderTopColor: '#cccccc',
      maxHeight: 400,
    },
    favoritesHeadingText: {
      fontSize: 20,
      textAlign: 'center',
      paddingBottom: 10,
    }
  });
