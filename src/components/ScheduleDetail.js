import React, { Component } from "react";
import { TouchableWithoutFeedback, View, Text, ScrollView,  TouchableOpacity, Image, DatePickerIOS, Keyboard } from "react-native";
import Modal from "react-native-modal"
import { Button } from 'react-native-elements'
import styles from '../styling/ScheduleDetail'
import activityToImageMap from './imageMap'
import { AutoGrowingTextInput } from 'react-native-autogrow-textinput'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withNavigation } from 'react-navigation';
import { saveEventImage, postCompletedEvent } from '../action/pets'
import { ImagePicker, Permissions } from 'expo';

class ScheduleDetail extends Component {
 
    constructor(props) {
      super(props);
      this.state = {
        showTime: false,
        photoPageOpen: false,
        modalPageOpen: true,
        date: new Date(),
        comment: null,
        result: null,
        image: null,
        completed_time: null,
      };
    }

      askPermissionsAsync = async () => {
        await Permissions.askAsync(Permissions.CAMERA);
        await Permissions.askAsync(Permissions.CAMERA_ROLL);
      };
    
      useLibraryHandler = async () => {
        await this.askPermissionsAsync();
        let result = await ImagePicker.launchImageLibraryAsync({
          allowsEditing: true,
          aspect: [4, 3],
          base64: false,
        });
        this.setState({ result });
        this.setState({ image: result.uri });
      };
    
      useCameraHandler = async () => {
        await this.askPermissionsAsync();
        let result = await ImagePicker.launchCameraAsync({
          allowsEditing: true,
          aspect: [4, 3],
          base64: false,
        });
        this.setState({ result });
        this.setState({ image: result.uri });
      }
      
      handleEventNext = async () => {
        this.props.saveEventImage(this.state.image)
        this.props.navigation.navigate('DailySchedulePage')
      }

    onTextChange = (event) => {
        const { contentSize, text } = event.nativeEvent;
   
        this.setState({
           text: text,
           height: contentSize.height > 100 ? 100 : contentSize.height
        }); 
    }

    handleTime = (str) => {
        let hour = Number(str.slice(0, 2))
        if(hour >= 12) {
            if(hour === 12){return str += ' PM'}
            let newNumber = (hour - 12).toString() 
            newNumber += str.slice(2, 6)
            return newNumber += ' PM'
        } 
        return str += ' AM'
    }

    handleNext = (eventId, completed_time) => {
        const eventInfo = {completed_time: completed_time, comment: this.state.comment, image: this.state.image }
        this.props.postCompletedEvent(eventId, 1, eventInfo)
        this.props.closeModalFunc()
    }
    closeModalFunc = () => {
        this.props.closeModalFunc()
        this.setState({ showTime: false })
    }
    openPhotoPage = () => {
        this.setState({
            photoPageOpen: true, 
            modalPageOpen: false
        })
    }
    saveEventPhoto = () => {
        this.setState({
            photoPageOpen: false,
            modalPageOpen: true,
        })
    }
    
    render() {
        let { image, date } = this.state;
        const type = this.props.petsData.selectedSchedule && this.props.petsData.selectedSchedule["event_type"]
        const eventId = this.props.petsData.selectedSchedule && this.props.petsData.selectedSchedule["id"]
        const time = this.props.petsData.selectedSchedule && this.props.petsData.selectedSchedule["time"]
        const icon = activityToImageMap[type]
        const completed_time = this.handleTime(date.toString().slice(16,21))

        return (

        <Modal isVisible={this.props.isVisible} >

        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <View style={styles.container}>
            
            {this.state.modalPageOpen? (

                
                <ScrollView contentContainerStyle={styles.container}>


                    <TouchableOpacity onPress={() => this.closeModalFunc()} style={styles.cancelContainer}>
                        <Image source={require('../../assets/cancel.png')} style={styles.cancelImg}/>
                        <Text> </Text> 
                    </TouchableOpacity>

                    <Text style={styles.timeText}>
                        {date.toString().slice(0,15)}
                    </Text>
                    <View style={styles.headerContainer}>

                        {this.state.showTime? (
                                <View/>
                            ):  image? (
                                    <Image source={{ uri: image }} style={styles.image2}/> 
                                ): (
                                <TouchableOpacity style={styles.roundImage} onPress={()=>this.openPhotoPage()}>
                                    <Image source={require('../../assets/dog.png')}/> 
                                    <Text style={styles.roundImageText}>+ Add Event Photo</Text>
                                </TouchableOpacity>
                                )
                        }
                    </View>
                    <TouchableOpacity onPress={() => this.setState({showTime: !this.state.showTime})}>
                        <Text style={styles.timeText2}>Completed Time : {completed_time}</Text>
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
                        <Button style={styles.btn} title="Completed" onPress={() => this.handleNext(eventId, completed_time)}/>
                        <Button style={styles.btn} title="Notification" onPress={() => this.handleNotification()}/>
                    </View>
                </ScrollView>
            ):<View/>}
              
            {this.state.photoPageOpen? (
                <ScrollView  contentContainerStyle={styles.container2}>
                    <View style={styles.roundImage}>
                        {image ? <Image source={{ uri: image }} style={styles.image2}/> 
                            : (
                            <View style={styles.dogImageContainer}>
                                <Image source={require('../../assets/dog.png')}/>
                                <Text style={styles.roundImageText}>+ Event Image</Text>
                            </View> 
                            )}
                    </View>
                    <View style={styles.textContainer}>
                        <TouchableOpacity onPress={this.useCameraHandler} style={styles.cameraContainer}>
                            <Image source={require('../../assets/camera.png')} style={styles.cameraImage}/> 
                            <Text style={styles.roundImageText}> Take a photo </Text> 
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.useLibraryHandler} style={styles.cameraContainer}>
                            <Image source={require('../../assets/files.png')} style={styles.cameraImage}/> 
                            <Text style={styles.roundImageText}>Choose a photo from my album</Text>
                        </TouchableOpacity >
                        <Button style={styles.btn2} type="outline" title="Save this photo"  onPress={() => this.saveEventPhoto()}>
                        </Button>
                    </View>
                </ScrollView>
            ):(<View/>)}
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
  
  const mapDispatchToProps = (dispatch) => bindActionCreators({ saveEventImage, postCompletedEvent  }, dispatch)
  
  export default withNavigation(connect(mapStateToProps, mapDispatchToProps)(ScheduleDetail))
  
  