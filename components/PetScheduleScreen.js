import React, { Component } from "react";
import { StyleSheet, View, Text, FlatList, Image, TouchableOpacity, DatePickerIOS } from "react-native";
import { Button } from 'react-native-elements'
import Modal from "react-native-modal";
import HeaderImage from './HeaderImage'
import BottomButtons from "./BottomButtons";
const shortid = require('shortid');

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

export default class PetScheduleScreen extends Component {
 
  constructor() {
    super();
    this.state = {
        selected_schedule: [],
        date: new Date(),
        modalVisible: false,
        time_changed_schedule: ''
    };
  }

  static navigationOptions = {
    headerTitle: <HeaderImage />,
    headerStyle: {
      height: 100,
      fontWeight: 'bold',
    },
  };

  handleTimeChange = ( id, visible ) => { 
    this.setState({
      ...this.state,
      modalVisible: visible,
      time_changed_schedule: id
    }) 
  }

  handleTime = (str) => {
    if(str == '8.5') {
      return '8:30 AM'
    } else {
      let time = str.slice(15, 21)
      let hour = Number(time.slice(0, 3))
      if(hour >= 12) {
        if(hour === 12){return time += 'PM'}
        let newNumber = (hour - 12).toString() 
        newNumber += time.slice(3, 6)
        return newNumber += ' PM'
      } return time += ' AM'
    }
  }

  addItem = (a) => {
    const activity = { id: shortid.generate(),
                       activity: a,
                       time: 8.5 }
    const joined = this.state.selected_schedule.concat(activity);
    this.setState({ selected_schedule: joined })
  }

  handleReset = () => { this.setState({ selected_schedule: [] }) }

  closeModalFunc = () => { this.setState({modalVisible: false}) } 

  saveTimeChange = () => {
    const activityId = this.state.time_changed_schedule
    const ns = this.state.selected_schedule.map(i => {
      if(i.id === activityId){
        return {...i, time: this.state.date}
      }
      return i
    })
    this.setState({
      selected_schedule: ns,
      modalVisible: false
    })
  }
  handleToggle = (id) => {
    const ns = this.state.selected_schedule.filter(i => i.id !== id)
    this.setState({
      selected_schedule: ns
    })
  }
  handleNext = () => this.props.navigation.navigate('AddHumanPage')

  render() {

    return (
      <View style={styles.mainContainer}>
        <View style={styles.dropZone}>
          <Modal visible={this.state.modalVisible}>
            <View style={{ flex: 1, marginTop:130 }}>
            <View style={styles.modalView}  >
              <DatePickerIOS
                style={{width: 200, fontSize: 12 }}
                mode='time'
                minuteInterval='10'
                date={this.state.date}
                onDateChange={(date) => {this.setState({date: date})}}
              />
              <TouchableOpacity onPress={this.closeModalFunc} style={styles.cancelContainer}>
                <Image source={require('../assets/cancel.png')} style={styles.cancelImg}/>
                <Text> </Text> 
              </TouchableOpacity>
              <View style={{flexDirection: 'row'}}>
                <Button title="Confirm" style={styles.nextBtn} onPress={this.saveTimeChange}></Button>
              </View>
              </View>
            </View>
          </Modal>
        <View opacity={0.8} style={styles.listOuterContainer}>
          <FlatList
            data={[{title: "What does Banjo's daily schedule look like?", key: '   BANJO WAKES UP!'}]}
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
                        <TouchableOpacity style={{flexDirection: 'row'}} onPress={() => this.handleToggle(a.id)}>
                          <Image source={activityToImageMap[a.activity]} style={{width: 30, height: 30}}/> 
                          <Text style={styles.scheduleText}>{a.activity.toUpperCase()}</Text>
                        </TouchableOpacity >
                          <TouchableOpacity onPress={() => this.handleTimeChange(a.id)}>
                            <Text style={styles.scheduleText2}>{this.handleTime(a.time.toString())}</Text>
                          </TouchableOpacity>
                        </View>
                      )
                    })}
                  <View style={{flexDirection: 'row'}}>
                    <Button title="Add a human" style={styles.nextBtn} onPress={this.handleNext}></Button>
                  </View>
                </View>
                )}
              />
            </View>
        </View>

        <View style={styles.ballContainer} />
        <BottomButtons 
          activityToImageMap={activityToImageMap}
          addItem={this.addItem}
          />
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
    padding: '5%',
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
  scheduleText: {
    padding: '5%', 
    fontSize: 15, 
    fontWeight:'bold'
  },
  scheduleText2: {
    padding: '5%', 
    fontSize: 13, 
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
    width: 130,
    justifyContent: 'space-between',
  },
  textInput: {
    fontSize: 15,
    paddingLeft: '3%', 
    fontWeight:'bold',
    width: 55,
  },
  container: {
    backgroundColor: 'gray',
    alignItems: 'center', 
    justifyContent: 'center', 
   },
   modalView: {
    backgroundColor: 'white',
    marginTop: 100,
    margin: 40,
    alignItems: 'center', 
    justifyContent: 'center', 
    padding: 20,
   },
   closeText: {
     color: 'black',
     borderRadius: 20,
     width: 32,
     padding: 6,
     alignSelf: 'flex-end',
     textAlign: 'center',
     borderWidth: 1,
     borderColor:'white'
    },
    cancelContainer: {
      position: 'absolute',
      marginLeft: '100%',
      right: 0,
      left: 0,
      top: 0,
      bottom: 0,

    },
    cancelImg: {
      right: 0,
      left: 0,
      top: 10,
      bottom: 0,
      width: 25,
      height: 25
    }
});