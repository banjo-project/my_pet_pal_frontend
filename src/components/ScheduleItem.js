import React from 'react';
import activityToImageMap from './imageMap'
import { Text, View, Image, TouchableOpacity } from 'react-native';
import styles from '../styling/DailyScheduleScreen'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { openScheduleChecker, selectedSchedule } from '../action/pets'

class ScheduleItem extends React.Component {
      
    handleSelect = (type, time) => { 
        const info = {type: type, time: time}
        this.props.openScheduleChecker(true) 
        this.props.selectedSchedule(info)
    }

    render () {
    
        const type = this.props.event.item.event_type.toLowerCase()
        const time = this.props.event.item.time
        const icon = activityToImageMap[type]
    
        return (
            <View style={styles.oneEventContainer}>
                <View style={styles.iconContainer}>
                    <Image style={styles.iconImage} source={icon} /> 
                </View>
                <View style={styles.eventTextContainer}>
                    <Text>{type.toUpperCase()}</Text>
                </View>
                <View style={styles.timeContainer}>
                    <Text style={styles.timeText}>{time}</Text>
                </View>
                <TouchableOpacity style={styles.btnContainer} onPress={() => this.handleSelect(type, time)}>
                    <Image style={styles.iconImage} source={require('../../assets/veterinary.png')}/>
                </TouchableOpacity>
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return ({
      petsData: state.petsData,
      humansData: state.humansData
    })
  } 
  
const mapDispatchToProps = (dispatch) => bindActionCreators({ openScheduleChecker, selectedSchedule }, dispatch)
  
export default connect(mapStateToProps, mapDispatchToProps)(ScheduleItem)
  
  