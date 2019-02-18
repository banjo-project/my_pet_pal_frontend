import React, { Component } from "react";
import { View, Text, TouchableOpacity, Image, TextInput, DatePickerIOS  } from "react-native";
import { Overlay, Button } from 'react-native-elements'
import styles from '../styling/ScheduleDetail'
import activityToImageMap from './imageMap'
import {AutoGrowingTextInput} from 'react-native-autogrow-textinput'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { openScheduleChecker } from '../action/pets'

class ScheduleDetail extends Component {
 
    constructor() {
      super();
      this.state = {
        date: new Date(),
        showTime: false,
        text: '',
      };
    }

    onTextChange = (event) => {
        const { contentSize, text } = event.nativeEvent;
   
        this.setState({
           text: text,
           height: contentSize.height > 100 ? 100 : contentSize.height
        }); 
      }

    handleNext = () => {
      this.props.openScheduleChecker(false)
    //   this.props.navigation.navigate('AddHumanPage')
    }
    handleAddImage = () => {
      this.props.openScheduleChecker(false)
      this.props.navigation.navigate('PetPhotoPage')
    }
   //openModalFunc = () => { this.setState({overlayVisible: false}) } 
    
    render() {
        const type = this.props.petsData.selectedSchedule && this.props.petsData.selectedSchedule["type"]
        const time = this.props.petsData.selectedSchedule && this.props.petsData.selectedSchedule["time"]
        const icon = activityToImageMap[type]
        return (

        <Overlay
            isVisible={this.props.petsData.openScheduleChecker}
            onBackdropPress={() => this.props.openScheduleChecker(false)}
            >
            <View style={styles.container}>
                    <Text style={styles.timeText}>
                        {new Date().toISOString().slice(0, 10)}
                    </Text>
                <View style={styles.headerContainer}>
                    
                    {this.state.showTime? (
                            <View></View>
                        ): (
                            <TouchableOpacity style={styles.roundImage} onPress={()=>this.handleAddImage()}>
                                <Image source={require('../../assets/dog.png')}/> 
                                <Text style={styles.roundImageText}>+ Add Photo</Text>
                            </TouchableOpacity>
                        )
                    }
                    
                </View>
            
            <View style={styles.oneEventContainer}>
                <View style={styles.iconContainer}>
                    <Image style={styles.iconImage} source={icon} /> 
                </View>
                <View style={styles.eventTextContainer}>
                    <Text style={styles.timeText}>{type}</Text>
                </View>
                <View style={styles.timeContainer}>
                    <Text style={styles.timeText}>{time}</Text>
                </View>
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.text}>Comment</Text>
                <AutoGrowingTextInput style={styles.textInput} onChangeText={(comment) => this.setState({comment})}/>
                <Button  type="outline" style={styles.btn} title="Select Time" onPress={() => this.setState({showTime: !this.state.showTime})}></Button>
                {
                    this.state.showTime? (
                    <View style={styles.timePickerContainer}>
                        <DatePickerIOS
                            style={{width: 200, fontSize: 12 }}
                            mode='time'
                            minuteInterval='10'
                            date={this.state.date}
                            onDateChange={(date) => {this.setState({date: date})}}
                        />
                    </View>
                    ): (
                    null
                    )
                }
                
                <Button style={styles.btn} title="Completed" onPress={() => this.handleNext()}/>
            </View>
            </View>
        </Overlay>
        )
    }
}

const mapStateToProps = (state) => {
    return ({
      petsData: state.petsData,
      humansData: state.humansData
    })
  } 
  
  const mapDispatchToProps = (dispatch) => bindActionCreators({ openScheduleChecker }, dispatch)
  
  export default connect(mapStateToProps, mapDispatchToProps)(ScheduleDetail)
  
  