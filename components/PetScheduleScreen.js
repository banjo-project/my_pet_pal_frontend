import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import HeaderImage from './HeaderImage'
// import { MaterialCommunityIcons } from '@expo/vector-icons';
// import { Button } from 'react-native-elements';
import Draggable from "./DraggableItems";


export default class PetScheduleScreen extends Component {

  static navigationOptions = {
    headerTitle: <HeaderImage />,
    headerStyle: {
      height: 100,
      fontWeight: 'bold',
    },
  };

  render() {
    return (
      <View style={styles.mainContainer}>
      
        <View style={styles.dropZone}>
          <Text style={styles.text}>What does Banjo's morning look like?</Text>
        </View>
        <View style={styles.ballContainer} />
        <View style={styles.row}>
          <Draggable />
          <Draggable />
          <Draggable />
          <Draggable />
          <Draggable />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1
  },
  ballContainer: {
    height:'10%'
  },
  row: {
    flexDirection: "row"
  },  
  dropZone: {
    height: '70%',
    backgroundColor: "#00334d"
  },
  text: {
    marginTop: 25,
    marginLeft: 5,
    marginRight: 5,
    textAlign: "center",
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold"
  }
});