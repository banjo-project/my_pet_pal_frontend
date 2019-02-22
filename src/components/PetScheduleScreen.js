import React, { Component } from "react";
import { View, Text, FlatList, Image, TouchableOpacity, DatePickerIOS } from "react-native";
import { Button } from 'react-native-elements'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { saveEvent } from '../action/pets'
import Modal from "react-native-modal"
import activityToImageMap from './imageMap'
import HeaderImage from './HeaderImage'
import BottomButtons from "./BottomButtons";
import styles from '../styling/PetScheduleScreen'

const shortid = require('shortid');

class PetScheduleScreen extends Component {
 
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
  handleNext = () => {
    this.props.saveEvent(this.state.selected_schedule)
    this.props.navigation.navigate('AddHumanPage')
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
                date={this.state.date}
                onDateChange={(date) => {this.setState({date: date})}}
              />
              <TouchableOpacity onPress={this.closeModalFunc} style={styles.cancelContainer}>
                <Image source={require('../../assets/cancel.png')} style={styles.cancelImg}/>
              </TouchableOpacity>
              <View style={{flexDirection: 'row'}}>
                <Button title="Confirm" style={styles.nextBtn} onPress={this.saveTimeChange}></Button>
              </View>
              </View>
            </View>
          </Modal>
        <View opacity={0.8} style={styles.listOuterContainer}>
          <FlatList
            data={[{title: `What does ${this.props.petsData.petName}'s daily schedule look like?`, key: '  BANJO WAKES UP!'}]}
            //`   ${this.props.petsData.petName.toUpperCase()} WAKES UP!`}]}
            renderItem={({item, separators}) => (
                <View style={styles.listContainer}>
                  <Text style={styles.listTitle}>{item.title}</Text>
                  <View style={styles.contentBox}>
                    <Image source={require('../../assets/dog.png')} style={styles.contentImg}/> 
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
                    <Button title="Add a human"  type="outline" style={styles.nextBtn} onPress={this.handleNext}></Button>
                  </View>
                </View>
                )}
              />
            </View>
        </View>

        <View style={styles.ballContainer} />
        <BottomButtons 
          addItem={this.addItem}
          />
    </View>
    );
  }
}

const mapStateToProps = (state) => {
  return ({
    petsData: state.petsData,
  })
} 

const mapDispatchToProps = (dispatch) => bindActionCreators({ saveEvent }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(PetScheduleScreen)

