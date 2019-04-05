import React, { Component } from "react";
import { TouchableWithoutFeedback, View, Text, ScrollView, TouchableOpacity, Image, DatePickerIOS, Keyboard, Alert } from "react-native";
import Modal from "react-native-modal"
import styles from '../styling/ScheduleDetail'
import activityToImageMap from './imageMap'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withNavigation } from 'react-navigation';
import { saveEventImage, postCompletedEvent } from '../action/pets'

class CompletedScheduleDetail extends Component {
 
    constructor(props) {
      super(props);
      this.state = {
      };
    }
    closeModalFunc = () => {
        this.props.closeCompletedModalFunc()
    }
    
    render() {
        const type = this.props.petsData.selectedCompletedSchedule && this.props.petsData.selectedCompletedSchedule["event_type"]
        const TYPE = type && type.toUpperCase()
        const comment = this.props.petsData.selectedCompletedSchedule && this.props.petsData.selectedCompletedSchedule["comment"]
        const time = this.props.petsData.selectedCompletedSchedule && this.props.petsData.selectedCompletedSchedule["time"]
        const completed_time = this.props.petsData.selectedCompletedSchedule && this.props.petsData.selectedCompletedSchedule["completed_time"]
        const image = this.props.petsData.selectedCompletedSchedule && this.props.petsData.selectedCompletedSchedule["image"]
        const icon = activityToImageMap[type]

        return (

        <Modal isVisible={this.props.isCompletedVisible} key={null}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <View style={styles.container}>
            <Text style={styles.timeText}>
                {new Date().toString().slice(0,15)}
            </Text>
            <TouchableOpacity onPress={() => this.closeModalFunc()} style={styles.cancelContainer2}>
                <Image source={require('../../assets/cancel.png')} style={styles.cancelImg}/>
                <Text> </Text> 
            </TouchableOpacity>
            <View style={styles.headerContainer}>
            {
                image? (
                    <Image source={{ uri: image }} style={styles.image2}/> 
                ): (
                <View style={styles.roundImage}>
                    <Image source={require('../../assets/dog_brown.png')}/> 
                </View>
                )
            }
            </View>
            <View style={styles.container}>
                <View style={styles.oneEventContainer}>
                    <View style={styles.iconContainer}>
                        <Image style={styles.iconImage} source={icon} /> 
                    </View>
                    <View style={styles.eventTextContainer}>
                        <Text style={styles.timeText4}>{TYPE}</Text>
                    </View>
                </View>
                    <View style={styles.completedContainer}>
                        <Text style={styles.timeText5}>{comment}</Text>
                    </View>
                    <View style={styles.completedContainer}>
                        <Text style={styles.timeText3}>SETUP TIME: </Text>
                        <Text style={styles.timeText2}>{time}</Text>
                    </View>
                
                <View style={styles.completedContainer}>
                    <Text style={styles.timeText3}>COMPLETED TIME:</Text>
                    <Text style={styles.timeText2}> {completed_time}</Text>
                </View>
            </View>
            </View>
        </TouchableWithoutFeedback>
        </Modal>
        )
    }
}

const mapStateToProps = (state) => {
    return ({
      petsData: state.petsData,
      humansData: state.humansData
    })
  } 
  
  const mapDispatchToProps = (dispatch) => bindActionCreators({ saveEventImage, postCompletedEvent }, dispatch)
  
  export default withNavigation(connect(mapStateToProps, mapDispatchToProps)(CompletedScheduleDetail))
  
  