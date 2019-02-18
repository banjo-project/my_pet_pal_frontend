import React from 'react';
import activityToImageMap from './imageMap'
import { Text, View, Image, TouchableOpacity } from 'react-native';
import styles from '../styling/DailyScheduleScreen'

export default class ScheduleItem extends React.Component {
      
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
                <TouchableOpacity style={styles.btnContainer}>
                    <Image style={styles.iconImage} source={require('../../assets/veterinary.png')}/>
                </TouchableOpacity>
            </View>
        )
        
    }
}