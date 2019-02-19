import React from 'react';
import activityToImageMap from './imageMap'
import { Text, View, Image, TouchableOpacity } from 'react-native';
import styles from '../styling/DailyScheduleScreen'

export default class ScheduleItem extends React.Component {

    commentTrim = (comment) => {    
        if(comment.length> 30){
            return comment.split(" ").splice(0,5).join(" ") + "..."
        }   
        return comment
    }


    render () {
        const type = this.props.event.item.event_type.toLowerCase()
        const comment = this.props.event.item.comment
        const icon = activityToImageMap[type]
        const image = this.props.event.item.image
        return (
            <View style={styles.oneEventContainer}>
                {image? (
                    <View style={styles.iconContainer}>
                        <Image style={styles.photoImage} source={{uri: image}} /> 
                    </View>
                    ):
                    <View style={styles.iconContainer}>
                        <Image style={styles.iconImage} source={icon} /> 
                    </View>
                }

                <View style={styles.eventTextContainer}>
                    <Text>{type.toUpperCase()}</Text>
                </View>
                {comment? (
                    <View style={styles.commentContainer}>
                        <Text>{this.commentTrim(comment)}</Text>
                    </View>
                ):(
                    <View style={styles.timeContainer}>
                        <Text></Text>
                    </View>
                )}
                
                <TouchableOpacity style={styles.btnContainer}>
                    <Image style={styles.iconImage} source={require('../../assets/paws.png')}/>
                </TouchableOpacity>
            </View>
        )
        
    }
}