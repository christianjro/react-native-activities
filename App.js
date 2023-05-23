import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ScrollView } from 'react-native';
import Jumbotron from './components/Jumbotron';
import AboutMe from './components/AboutMe';
import FavoriteActivities from './components/FavoriteActivities';
import ActivityGenerator from './components/ActivityGenerator';

const myActivities = ['Snowshoeing', 'Rock Climbing', 'Reading', 'Crocodile Hunting (legal)', 'Photoshopping', 'Deep Sea Exploring', 'Painting', 'Singing A Cappella Music'];

export default function App() {
  const [activitiesList, setActivitiesList] = useState([...myActivities]);

  function handleAddActivity(newActivity) {
    setActivitiesList( (prevActivities) => [...prevActivities, newActivity] )
  }

  function handleDelActivity(removeActivity) {
    setActivitiesList( (prevActivities) => {
      return (
        prevActivities.filter((activity) => (activity !== removeActivity))
      )
    })
  }

  return (
    <>
      <StatusBar style="dark" />
      <ScrollView style={styles.container}>
        <Jumbotron />
        <AboutMe />
        <ActivityGenerator />
        <FavoriteActivities activities={activitiesList} onAddActivity={handleAddActivity} onDelActivity={handleDelActivity} />
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: '10%',
    paddingHorizontal: 30
  },
});
