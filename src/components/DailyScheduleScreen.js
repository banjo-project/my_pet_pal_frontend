import React, { Component } from "react";
import { View, Text, FlatList } from "react-native";
import { Button } from 'react-native-elements'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { saveEvent } from '../action/pets'
import HeaderImage from './HeaderImage'
import ScheduleItem from './ScheduleItem'
import CompletedScheduleItem from './CompletedScheduleItem'
import BottomNav from './BottomNav'
import styles from '../styling/DailyScheduleScreen'

const events = [
    { id: 1, pet_id: 1, event_type: 'WALK', time: '8' },
    { id: 2, pet_id: 1, event_type: 'POTTY', time: '8', note: 'need to give him a treat' },
    { id: 3, pet_id: 1, event_type: 'WALK', time: '11' },
    { id: 4, pet_id: 1, event_type: 'WALK', time: '17' },
    { id: 5, pet_id: 1, event_type: 'POTTY', time: '17' },
    { id: 6, pet_id: 1, event_type: 'EAT', time: '18' },
    { id: 7, pet_id: 1, event_type: 'WALK', time: '17' },
    { id: 8, pet_id: 1, event_type: 'POTTY', time: '17' },
    { id: 9, pet_id: 1, event_type: 'EAT', time: '18' },
  ]

const completed_event = [
    { id: 1, event_id: 1, event_type: 'WALK', user_id: 1, completed_time: 'Fri Feb 08 2019 09:11:06 GMT-0800' },
    { id: 2, event_id: 2, event_type: 'POTTY', user_id: 1, completed_time: 'Fri Feb 08 2019 09:11:06 GMT-0800' },
    { id: 3, event_id: 3, event_type: 'WALK', user_id: 2, completed_time: 'Fri Feb 08 2019 09:11:06 GMT-0800', comment: 'banjo has been a good boi :)' }
  ]

class DailyScheduleScreen extends Component {
 
    constructor() {
      super();
      this.state = {
      };
    }
  
    static navigationOptions = {
      headerTitle: <HeaderImage />,
      headerStyle: {
        height: 100,
        fontWeight: 'bold',
      },
    }
  
    handleNext = () => {
      this.props.navigation.navigate('AddHumanPage')
    }
    
    render() {
  
      return (
        <View style={styles.container}>
            <View style={styles.contentsContainer}>
                <View style={styles.headContainer}>
                    <View style={styles.roundImage}>

                    </View>
                    <View style={styles.headTitleContainer}>
                        <Text style={styles.headTitle}>
                            Banjo's Day
                        </Text>
                        <Text style={styles.headText}>
                            {new Date().toISOString().slice(0, 10)}
                        </Text>
                    </View>
                    
                </View>
                <View style={styles.scheduleContainer}>
                    <View style={styles.eventContainer}>
                        <FlatList
                            data = {events}
                            renderItem={(i) => (
                                <ScheduleItem event = {i}/>
                            )}>
                        </FlatList>
                    </View>
                    <View style={styles.showCompletedContainer}>
                        <Button title='Completed Activities'></Button>
                    </View>
                    {/* <View style={styles.completedEventContainer}>
                        <FlatList
                            data = {completed_event}
                            renderItem={(i) => (
                                <CompletedScheduleItem event = {i}/>
                            )}>
                        </FlatList>
                    </View> */}
                </View>
            </View>
            <View style={styles.bottomNavContainer}>
                <BottomNav />
            </View>
        </View> 
      );
    }
  }
  
  const mapStateToProps = (state) => {
    return ({
      petsData: state.petsData,
      humansData: state.humansData
    })
  } 
  
  const mapDispatchToProps = (dispatch) => bindActionCreators({ saveEvent }, dispatch)
  
  export default connect(mapStateToProps, mapDispatchToProps)(DailyScheduleScreen)
  
  