import React, { Component } from "react";
import { TouchableWithoutFeedback, View, Text, TouchableOpacity, Image, DatePickerIOS, Keyboard } from "react-native";
import Modal from "react-native-modal"
import { Overlay, Button } from 'react-native-elements'
import styles from '../styling/ScheduleDetail'
import activityToImageMap from './imageMap'
import { AutoGrowingTextInput } from 'react-native-autogrow-textinput'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { openScheduleChecker } from '../action/pets'


class ScheduleDetail extends Component {
 
    constructor(props) {
      super(props);
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
        this.props.closeModalFunc()
    }
    handleAddImage = () => {
        this.props.closeModalFunc()
        this.props.navigation.navigate('Home')
    }
    closeModalFunc = () => {
        this.setState({ showTime: false})
        this.props.closeModalFunc()
    }
    
    render() {

        const type = this.props.petsData.selectedSchedule && this.props.petsData.selectedSchedule["event_type"]
        const time = this.props.petsData.selectedSchedule && this.props.petsData.selectedSchedule["time"]
        const miniType = this.props.petsData.selectedSchedule && type.toLowerCase()
        const icon = activityToImageMap[miniType]
        
        return (

        <Modal isVisible={this.props.isVisible} >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
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
            
            <TouchableOpacity onPress={this.closeModalFunc} style={styles.cancelContainer}>
                <Image source={require('../../assets/cancel.png')} style={styles.cancelImg}/>
                <Text> </Text> 
            </TouchableOpacity>

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
                    <Text style={styles.text}>  Comment</Text>
                   
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
                    <Button style={styles.btn} title="Notification" onPress={() => this.handleNotification()}/>
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
  
  const mapDispatchToProps = (dispatch) => bindActionCreators({ openScheduleChecker }, dispatch)
  
  export default connect(mapStateToProps, mapDispatchToProps)(ScheduleDetail)
  
  