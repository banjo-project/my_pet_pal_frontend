import React, { Component } from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";
import HeaderImage from './HeaderImage'
import ScheduleItem from './ScheduleItem'
import BottomButtons from './BottomButtons'


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
            <View opacity={0.5} style={styles.listOuterContainer}>
              <FlatList
                data={[{title: "What does Banjo's morning look like?", key: 'Banjo Waks Up!'}]}
                renderItem={({item, separators}) => (
                    <View style={styles.listContainer}>
                      <Text style={styles.listTitle}>{item.title}</Text>
                      <Text style={styles.listTitle}>{item.key}</Text>
                      <ScheduleItem schedule = {this.state.schedule}/>
                    </View>
                )}
              />
            </View>
        </View>
        <View style={styles.ballContainer} />
          <BottomButtons 
            addItem = {() => this.addItem()}/>
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
    height: 100,
    position: 'absolute',
  },
  listOuterContainer: {
    alignItems: 'center', 
    justifyContent: 'center', 
    marginTop: 130 
  },
  listContainer: {
    backgroundColor: 'white', 
    width: 300, 
    padding: '5%', 
    alignItems: 'center', 
    borderRadius: 20
  },
  contentContainer: {
    justifyContent: 'center',
    flexDirection: 'column',
    padding: '10%',
    borderStyle: 'solid',
    borderColor: 'white',
    width: "70%",
  },
  dropZone: {
    height: 600,
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
  },
  listTitle: {
    paddingBottom: '10%', 
    marginTop: '5%',
    fontSize: 15, 
    fontWeight: 'bold'
  }
});