import React, { Component } from "react";
import { StyleSheet, View, Text, FlatList, Image, TouchableOpacity, DatePickerIOS } from "react-native";
import HeaderImage from './HeaderImage'
import { Button } from 'react-native-elements'
import Modal from "react-native-modal";

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
        selected_schedule: [],
        date: new Date(),
        modalVisible: false,
        time_changed_schedule: ''
    };
  }

  componentDidMount = () => {
    this.saveTimeChange
  }

  static navigationOptions = {
    headerTitle: <HeaderImage />,
    headerStyle: {
      height: 100,
      fontWeight: 'bold',
    },
  };

  handleTimeChange = ( a, visible ) => { 
    this.setState({
      ...this.state,
      modalVisible: visible,
      time_changed_schedule: a
    }) 
  }

  setDate = (newDate) => { this.setState({date: newDate}) }

  addItem = (a) => {
    const activity = {[a]: 8.50}
    const joined = this.state.selected_schedule.concat(activity);
    this.setState({ selected_schedule: joined })
  }
  handleReset = () => { this.setState({ selected_schedule: [] }) }
  closeModalFunc = () => { this.setState({modalVisible: false}) } 
  saveTimeChange = (a) => {
    console.warn(Object.keys(a))
    this.state.selected_schedule.map(i => {
      if(Object.keys(i) === a){
        // console.warn(this.state.selected_schedule[i])
        this.setState({
          ...this.state,
          selected_schedule: [...this.state, {a: this.state.date}],
          modalVisible: false
        })
      }
    })

  }

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
                timeZoneOffsetInMinutes='-7 * 60'
                minDate="1900-05-01"
                date={this.state.date}
                onDateChange={this.setDate}
              />
              <View style={{flexDirection: 'row'}}>
                <Button title="Cancel" style={styles.nextBtn} onPress={this.closeModalFunc}></Button>
                <Button title="Confirm" style={styles.nextBtn} onPress={this.saveTimeChange}></Button>
              </View>
              </View>
            </View>
          </Modal>

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
                            <View>
                            <View style={{flexDirection: 'row'}}>
                              <Image source={activityToImageMap[Object.keys(a)]} style={{width: 35, height: 35}}/> 
                              <Text style={styles.scheduleText}>{Object.keys(a).toString().toUpperCase()}</Text>
                              <TouchableOpacity onPress={() => this.handleTimeChange(a)}>
                                <Text style={styles.scheduleText2}>AT 8:00 AM</Text>
                              </TouchableOpacity>
                           
                            </View>
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
    color: 'blue',
    fontWeight: 'bold'
  },
  scheduleText: {
    padding: '5%', 
    fontSize: 15, 
    fontWeight:'bold'
  },
  scheduleText2: {
    padding: '5%', 
    fontSize: 15, 
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
    alignItems: 'center', 
    justifyContent: 'center',
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
});