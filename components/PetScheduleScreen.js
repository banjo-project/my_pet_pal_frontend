import React, { Component } from "react";
import { StyleSheet, View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import HeaderImage from './HeaderImage'
import { Button } from 'react-native-elements'

const activityToImageMap = {
  walk: require('../assets/walk.png'),
  eat: require('../assets/eat.png'),
  meds: require('../assets/meds.png'),
  treats: require('../assets/treats.png'),
  exercise: require('../assets/exercise.png'),
  groom: require('../assets/groom.png'),
  crate: require('../assets/crate.png'),
  potty: require('../assets/potty.png'),
}

const activities1 = ['walk', 'eat', 'meds', 'treats']
const activities2 = ['exercise', 'groom', 'crate', 'potty']

export default class PetScheduleScreen extends Component {
  constructor() {
    super();
    this.state = {
        selected_schedule: []
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
    const joined = this.state.selected_schedule.concat(a);
    this.setState({
      selected_schedule: joined
    })
  }
  handleReset = () => {
    this.setState({
      selected_schedule: []
    })
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.dropZone}>
            <View opacity={0.8} style={styles.listOuterContainer}>
              <FlatList
                data={[{title: "What does Banjo's morning look like?", key: '   BANJO WAKES UP!'}]}
                renderItem={({item, separators}) => (
                    <View style={styles.listContainer}>
                      <Text style={styles.listTitle}>{item.title}</Text>
                      <View style={styles.contentBox}>
                        <Image source={require('../assets/dog.png')} style={styles.contentImg}/> 
                        <Text style={styles.listText}>{item.key}</Text>
                      </View>
                        {this.state.selected_schedule.map( a => {
                          return (
                            <View style={{flexDirection: 'row'}}>
                              <Image source={activityToImageMap[a]} style={{width: 35, height: 35}}/> 
                              <Text style={{padding: '5%', fontSize: 15, fontWeight:'bold'}}>{a.toUpperCase()}</Text>
                            </View>
                          )
                        })}
                      <View style={{flexDirection: 'row'}}>
                        <Button title="Reset" style={styles.nextBtn} onPress={this.handleReset}></Button>
                        <Button title="Confirm" style={styles.nextBtn} onPress={this.handleNext}></Button>
                      </View>
                    </View>
                )}
              />
            </View>
        </View>
        <View style={styles.ballContainer} />

        <View style={styles.row}>
          {activities1.map( a => {
            return (
              <TouchableOpacity style={styles.circle} onPress={()=>this.addItem(a)}>    
                <Image source={activityToImageMap[a]} style={styles.image}/> 
                <Text style={styles.btnText}>{a.toUpperCase()}</Text>
              </TouchableOpacity>
            )
          })}
        </View> 
        <View style={styles.row2}>
          {activities2.map( a => {
            return (
              <TouchableOpacity style={styles.circle} onPress={()=>this.addItem(a)}>
                <Image source={activityToImageMap[a]} style={styles.image}/> 
                <Text style={styles.btnText}>{a.toUpperCase()}</Text>
              </TouchableOpacity>
            )
          })}
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
    height: 70,
    position: 'absolute',
  },
  listOuterContainer: {
    alignItems: 'center', 
    justifyContent: 'center', 
    marginTop: 100,
    marginBottom: 20, 
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
  contentBox: {
    flexDirection: 'row',
  },
  dropZone: {
    height: '85%',
    backgroundColor: "#00334d",
    justifyContent: 'center',
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
    paddingBottom: '5%', 
    marginTop: '5%',
    marginLeft: 10,
    fontSize: 15, 
    fontWeight: 'bold'
  },
  listText: {
    paddingBottom: '10%', 
    marginTop: '5%',
    fontSize: 17, 
    color: 'red',
    fontWeight: 'bold'
  },
  contentImg: {
    width: 30, 
    height: 30, 
    marginTop: 10
  },
  btnStyle:{
    alignItems: 'center', 
    justifyContent: 'center', 
  },
  nextBtn: {
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
    width: 90,
    justifyContent: 'space-between',
  },
  row: {
    paddingTop: '3%',
    paddingRight: '3%',
    paddingLeft: '3%',
    flexDirection: "row",
    justifyContent: 'space-around',
  },  
  row2: {
    padding: '3%',
    flexDirection: "row",
    marginBottom: '17%',
    justifyContent: 'space-around',
  },
  circle: {
    backgroundColor: "skyblue",
    alignItems: 'center', justifyContent: 'center',
    width: 30 * 2.5,
    height: 30 * 2,
    borderRadius: 30
  },
  image: {
    width: 30, 
    height: 30, 
    marginTop: 10
  },
  btnText: {
    fontSize: 10,
  }
});