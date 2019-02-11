import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableHighlight, FlatList } from "react-native";
import HeaderImage from './HeaderImage'
import ScheduleItem from './ScheduleItem'
// import { MaterialCommunityIcons } from '@expo/vector-icons';
// import { Button } from 'react-native-elements';
import Draggable from "./DraggableItems";

import { Card, ListItem, Button, Icon, Divider } from 'react-native-elements'
import { isNullOrUndefined } from "util";


export default class PetScheduleScreen extends Component {
  constructor() {
    super();
    this.state = {
        schedule: []
    };
  }
  static navigationOptions = {
    headerTitle: <HeaderImage />,
    headerStyle: {
      height: 100,
      fontWeight: 'bold',
    },
  };

  addItem = (a) => {
    const joined = this.state.schedule.concat(a);
    this.setState({
      schedule: joined
    })
  }

  render() {
    return (
      <View style={styles.mainContainer}>
      
        <View style={styles.dropZone}>
          <Text style={styles.text}>What does Banjo's morning look like?</Text>
            
            <View style={{alignItems: 'center', justifyContent: 'center', marginTop: '5%'}}>

              <FlatList
                data={[{title: 'BANJO WAKES UP!', key1: 'item1', key2: 'item2',key3: 'item3'}]}
                renderItem={({item, separators}) => (
                  <TouchableHighlight
                    onShowUnderlay={separators.highlight}
                    onHideUnderlay={separators.unhighlight}>
                    <View style={{backgroundColor: 'white', width: 300, padding: '5%', alignItems: 'center', justifyContent: 'center'}}>
                      <Text style={{paddingBottom: '10%', fontSize: 15, fontWeight: 'bold', alignItems: 'center', justifyContent: 'center'}}>{item.title}</Text>

                      <ScheduleItem schedule = {this.state.schedule}/>
                      {/* <Text style={{padding: '5%', fontSize: 15}}>{item.key1}</Text>
                      <Text style={{padding: '5%', fontSize: 15}}>{item.key2}</Text>
                      <Text style={{padding: '5%', fontSize: 15}}>{item.key3}</Text> */}
                    </View>
                  </TouchableHighlight>
                )}
              />

            </View>
          

        </View>
        <View style={styles.ballContainer} />
          <View style={styles.row}>
            <Draggable style={styles.dragItem} addItem = {this.addItem}/>
            <Draggable style={styles.dragItem} addItem = {this.addItem}/>
            <Draggable style={styles.dragItem} addItem = {this.addItem}/>
            <Draggable style={styles.dragItem} addItem = {this.addItem}/>
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
  contentContainer: {
    justifyContent: 'center',
    flexDirection: 'column',
    padding: '10%',
    borderStyle: 'solid',
    borderColor: 'white',
    width: "70%",
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