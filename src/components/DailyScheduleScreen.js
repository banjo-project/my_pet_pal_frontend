import React, { Component } from "react";
import { View, Text, FlatList, Image } from "react-native";
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { LinearGradient } from 'expo';
import { saveEvent, getAllEvents, getCompletedEvents, createEvent } from '../action/pets'
import ScheduleItem from './ScheduleItem'
import ScheduleDetail from './ScheduleDetail'
import CompletedScheduleDetail from './CompletedScheduleDetail'
import CompletedScheduleItem from './CompletedScheduleItem'
import BottomNav from './BottomNav'
import styles from '../styling/DailyScheduleScreen'


class DailyScheduleScreen extends Component {

    constructor() {
        super();
        this.state = {
            isVisible: false,
            isCompletedVisible: false,
        };
    }

    componentDidMount = () => {
        const petId = this.props.petsData.petInfo.pet_id
        if(this.props.petsData.petEvent){
            this.props.petsData.petEvent.forEach(event => {
                const eventInfo = { event_type: event.event_type, time: event.time}
                this.props.createEvent(petId, eventInfo)
            })
        }
        this.props.getAllEvents(petId)
        this.props.getCompletedEvents(petId)
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
    openCompletedModalFunc = () => { 
        this.setState({ isCompletedVisible: true }) 
    } 
    closeCompletedModalFunc = () => {
        this.setState({ isCompletedVisible: false }) 
    }

    compare = (a, b) => {
        const idA = a.id
        const idB = b.id
        let comparison = 0
        if(idA > idB){
            comparison = 1
        } else if (idA < idB){
            comparison = -1
        }
        return comparison
    }
    
    render() {
        const image = this.props.petsData.petImage
        const name = this.props.petsData.petInfo.name
        const events = this.props.petsData.events && this.props.petsData.events.sort(this.compare)
        const completed_events = this.props.petsData.completed_events && this.props.petsData.completed_events.sort(this.compare)

        return (
            <View style={styles.container}>
            <LinearGradient
                colors={['#fafc88','#04bfd8']}
                style={{
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    bottom: 0,
                    height: 750,
                }} ></LinearGradient>
                <View style={styles.contentsContainer}>

                <ScheduleDetail 
                    isVisible = {this.state.isVisible}
                    closeModalFunc = {this.closeModalFunc}/>
                <CompletedScheduleDetail 
                   isCompletedVisible = {this.state.isCompletedVisible}
                   closeCompletedModalFunc = {this.closeCompletedModalFunc}/>

                    <View style={styles.headContainer}>
                    {image ? (
                        <View style={styles.roundImage}>
                        <Image source={{ uri: image }} style={styles.image} />
                        </View>
                    ): (
                        <View style={styles.roundImage}>
                            <Image source={require('../../assets/dog_brown.png')} style={styles.headerIcon}/> 
                        </View>
                    )}
                    
                        <View style={styles.headTitleContainer}>
                            <Text style={styles.headTitle}>
                                {name}'s Day
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
                                        openModalFunc = {this.openModalFunc} />
                                )}
                                keyExtractor={(item, index) => index.toString()}>
                            </FlatList>
                        </View>
                        <View style={styles.completedEventContainer}>
                            <View style={styles.completedTitleContainer}>
                                <Text style={styles.completedTitleText}>Completed Activities</Text>
                            </View>                   
                            <FlatList
                                data = {completed_events}
                                renderItem={(i) => (
                                    <CompletedScheduleItem 
                                        event = {i}
                                        openCompletedModalFunc = {this.openCompletedModalFunc} />
                                )}
                                keyExtractor={(item, index) => index.toString()}>
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
  
  const mapDispatchToProps = (dispatch) => bindActionCreators({ saveEvent, getAllEvents, createEvent, getCompletedEvents }, dispatch)
  
  export default connect(mapStateToProps, mapDispatchToProps)(DailyScheduleScreen)
  