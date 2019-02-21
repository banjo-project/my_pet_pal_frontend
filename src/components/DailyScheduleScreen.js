import React, { Component } from "react";
import { View, Text, FlatList, Image } from "react-native";
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { saveEvent } from '../action/pets'
import ScheduleItem from './ScheduleItem'
import ScheduleDetail from './ScheduleDetail'
import CompletedScheduleItem from './CompletedScheduleItem'
import BottomNav from './BottomNav'
import styles from '../styling/DailyScheduleScreen'

const events = [
    { id: 4, pet_id: 1, event_type: 'WALK', time: '05:00 PM' },
    { id: 5, pet_id: 1, event_type: 'POTTY', time: '05:00 PM' },
    { id: 6, pet_id: 1, event_type: 'EAT', time: '07:00 PM' },
    { id: 7, pet_id: 1, event_type: 'WALK', time: '09:00 PM' },
    { id: 8, pet_id: 1, event_type: 'POTTY', time: '09:00 PM' },
    { id: 9, pet_id: 1, event_type: 'EAT', time: '10:20 PM' },
  ]

const completed_event = [
    { id: 1, event_id: 1, event_type: 'WALK', user_id: 1, completed_time: 'Fri Feb 08 2019 09:11:06 GMT-0800', image:  'https://www.petmd.com/sites/default/files/over-active-dog-211592482.jpg', comment: 'We went to Seattle Center! Banjo has been a good boi. need to give him lots of treats <3'},
    { id: 2, event_id: 2, event_type: 'POTTY', user_id: 1, completed_time: 'Fri Feb 08 2019 09:11:06 GMT-0800' },
    { id: 3, event_id: 3, event_type: 'WALK', user_id: 2, completed_time: 'Fri Feb 08 2019 09:11:06 GMT-0800', image: 'https://cdn3-www.dogtime.com/assets/uploads/gallery/west-highland-white-terrier-dogs-and-puppies/west-highland-white-terrier-dogs-puppies-2.jpg', comment: 'played with Merlin:)' }
  ]

class DailyScheduleScreen extends Component {

    constructor() {
        super();
        this.state = {
            isVisible: false,
        };
    }

    handleNext = () => {
      this.props.navigation.navigate('AddHumanPage')
    }
    handleAddImage = () => {
      this.props.navigation.navigate('PetPhotoPage')
    }
    openModalFunc = () => { 
        this.setState({ isVisible: true }) 
    } 
    closeModalFunc = () => {
        this.setState({ isVisible: false }) 
    }
    
    render() {
        const image = this.props.petsData.petImage
    return (
        <View style={styles.container}>
            <View style={styles.contentsContainer}>

            <ScheduleDetail 
                isVisible = {this.state.isVisible}
                closeModalFunc = {this.closeModalFunc}/>
            
                <View style={styles.headContainer}>
                   {image ? (
                    <View style={styles.roundImage}>
                       <Image source={{ uri: image }} style={styles.image} />
                    </View>
                   ): (
                    <View style={styles.roundImage}>
                        <Image source={require('../../assets/dog.png')} style={styles.headerIcon}/> 
                    </View>
                   )}
                   
                    
                    <View style={styles.headTitleContainer}>
                        <Text style={styles.headTitle}>
                            Banjo's Day
                        </Text>
                        <Text style={styles.headText}>
                            {new Date().toString().slice(0,15)}
                        </Text>
                    </View>
                    
                </View>
                <View style={styles.scheduleContainer}>
                    <View style={styles.eventContainer}>
                        <FlatList
                            data = {events}
                            renderItem={(event) => (
                                <ScheduleItem 
                                    event = {event}
                                    isVisible = {this.state.isVisible}
                                    openModalFunc = {this.openModalFunc}
                                    />
                            )}>
                        </FlatList>
                    </View>

                    <View style={styles.completedEventContainer}>
                        <View style={styles.completedTitleContainer}>
                            <Text style={styles.completedTitleText}>Completed Activities</Text>
                        </View>                   
                        <FlatList
                            data = {completed_event}
                            renderItem={(i) => (
                                <CompletedScheduleItem event = {i}/>
                            )}>
                        </FlatList>
                    </View>
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
  
  