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
            <Draggable style={styles.dragItem}/>
            <Draggable style={styles.dragItem}/>
            <Draggable style={styles.dragItem}/>
            <Draggable style={styles.dragItem}/>
          </View>
          <View style={styles.row2}>
            <Draggable style={styles.dragItem}/>
            <Draggable style={styles.dragItem}/>
            <Draggable style={styles.dragItem}/>
            <Draggable style={styles.dragItem}/>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  ballContainer: {
    flexDirection: 'row',
  },
  row: {
    paddingTop: '5%',
    paddingRight: '5%',
    paddingLeft: '5%',
    flexDirection: "row",
    justifyContent: 'space-around',
  },  
  row2: {
    padding: '5%',
    flexDirection: "row",
    marginBottom: '20%',
    justifyContent: 'space-around',
  },
  dropZone: {
    height: '85%',
    backgroundColor: "#00334d"
  },
  dragItem:{
    padding:'2%',
    margin: '2%'
  },
  text: {
    marginTop: '30%',
    marginLeft: 5,
    marginRight: 5,
    textAlign: "center",
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold"
  }
});