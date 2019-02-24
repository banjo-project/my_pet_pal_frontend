import React, { Component } from "react";
import { View, Text, FlatList, Image } from "react-native";
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { LinearGradient } from 'expo';
import { saveEvent, getAllEvents, getCompletedEvents } from '../action/pets'
import ScheduleItem from './ScheduleItem'
import ScheduleDetail from './ScheduleDetail'
import CompletedScheduleItem from './CompletedScheduleItem'
import BottomNav from './BottomNav'
import styles from '../styling/DailyScheduleScreen'
import { getTaskOptionsAsync } from "expo-task-manager";

class DailyScheduleScreen extends Component {

    constructor() {
        super();
        this.state = {
            isVisible: false,
        };
    }

    componentDidMount = () => {
        this.props.getAllEvents(1)
        this.props.getCompletedEvents(1)
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
                                <CompletedScheduleItem event = {i} />
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
  
  const mapDispatchToProps = (dispatch) => bindActionCreators({ saveEvent, getAllEvents, getCompletedEvents }, dispatch)
  
  export default connect(mapStateToProps, mapDispatchToProps)(DailyScheduleScreen)
  