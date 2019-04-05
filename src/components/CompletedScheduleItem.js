import React from 'react';
import activityToImageMap from './imageMap'
import { Text, View, Image, TouchableOpacity } from 'react-native';
import styles from '../styling/DailyScheduleScreen'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { selectedCompletedSchedule } from '../action/pets'

class CompletedScheduleItem extends React.Component {

    commentTrim = (comment) => {    
        if(comment.length> 30){
            return comment.split(" ").splice(0,5).join(" ") + "..."
        }   
        return comment
    }

    handleSelect = (event) => { 
        this.props.selectedCompletedSchedule(event)
        this.props.openCompletedModalFunc()
    }

    render () {
        const event = this.props.event.item
        const type = this.props.event.item.event_type
        const comment = this.props.event.item.comment
        const icon = activityToImageMap[type]
        const image = this.props.event.item.image
        return (
            <View style={styles.oneEventContainer} >
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
                { type? 
                    <Text style={styles.typeText}>{type.toUpperCase()}</Text> : null
                }    
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
                
                <TouchableOpacity style={styles.btnContainer} onPress={() => this.handleSelect(event)}>
                    <Image style={styles.iconImage} source={require('../../assets/paws.png')}/>
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
  
const mapDispatchToProps = (dispatch) => bindActionCreators({ selectedCompletedSchedule }, dispatch)
  
export default connect(mapStateToProps, mapDispatchToProps)(CompletedScheduleItem)
  
  