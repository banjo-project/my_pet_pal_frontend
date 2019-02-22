'use strict';
import React from 'react';
import { Text, View, TouchableOpacity, TextInput, Image, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';
import BottomNav from './BottomNav'
import HeaderImage from './HeaderImage'
import styles from '../styling/ManageHumanScreen'
import { Button } from 'react-native-elements'
import { connect } from 'react-redux'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { bindActionCreators } from 'redux'
import { saveName } from '../action/pets'
import Communications from 'react-native-communications';

class ManageHumanScreen extends React.Component {
  state = {
    openErrorMsg: false,
    openProfile: false,
    openInvitation: false,
    openAlert: false
  }

  static navigationOptions = {
    headerTitle: <HeaderImage />,
    headerStyle: {
      height: 100,
      fontWeight: 'bold',
    },
  };

  handleAddImage = () => {
    this.props.navigation.navigate('PetPhotoPage')
  }

  sentInvitation = () => {
    this.setState({ 
      openAlert: false, 
      openProfile: false,
      openInvitation: false })   
    this.props.navigation.navigate('DailySchedulePage')
  }

  render() {
  const image = this.props.humansData.humanImage
  const name = this.props.humansData.humanName

    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>

        <View style={styles.contentsContainer}>
            {image ? (
            <View style={styles.roundImage} onPress={this.handleAddImage}>
                <Image style={styles.image} source={{ uri: image }} /> 
            </View>
            ) : (
            <TouchableOpacity style={styles.roundImage} onPress={this.handleAddImage}>
                <Image style={styles.image2} source={require('../../assets/happy_color.png')}/> 
                <Text style={styles.roundImageText}>+ Human Image</Text>
            </TouchableOpacity>
            )}
        {this.state.openProfile? (
            <View style={styles.profileContainer}>
                <Text style={styles.profileText1}>Sarah</Text>
                <Text style={styles.profileText}>Title</Text>
                <Text style={styles.profileText}>Email</Text>
                <Text style={styles.profileText}>Phone</Text>
            </View>
        ): null}
            
        {this.state.openInvitation? (
        <View style={styles.profileContainer}>
          <KeyboardAwareScrollView>
            <View style={styles.container2}>
            <Text style={styles.profileText3}>Name</Text>
              <TextInput style={styles.textInput1} onChangeText={(human2Name) => this.setState({human2Name})}></TextInput>
            <Text style={styles.profileText2}>Email</Text>
              <TextInput style={styles.textInput2} onChangeText={(human2Email) => this.setState({human2Email})}></TextInput>
              <Button style={styles.btn} title="Send Invitation" onPress={()=>{this.setState({ openInvitation: !this.state.openInvitation, openProfile: false, openAlert: true})}}></Button>
              <Button style={styles.btn} title="Your Human's profile" onPress={()=>{this.setState({ openProfile: !this.state.openProfile, openInvitation: false})}}></Button>
            </View>
              
          </KeyboardAwareScrollView>
        </View>
        ): null}

          <View style={styles.btnContainer}>
              <Button style={styles.btn} title="Your Human's profile" onPress={()=>{this.setState({ openProfile: !this.state.openProfile, openInvitation: false})}}></Button>
              <Button style={styles.btn} title="Invite More Human"onPress={()=>{this.setState({ openInvitation: !this.state.openInvitation, openProfile: false})}}></Button>
          </View>


          {this.state.openAlert? 
            Alert.alert(
              "Invitation Sent!",
              '',
              [
                {text: 'OK', onPress: () => {
                  this.props.navigation.navigate('DailySchedulePage')}
                }
              ],
              {cancelable: false},
            ) : null}

        </View>
        <View style={styles.bottomNavContainer}>
          <BottomNav />
        </View>
   
      </View>
      </TouchableWithoutFeedback>
    )
  }
}

const mapStateToProps = (state) => {
  return ({
    petsData: state.petsData,
    humansData: state.humansData
  })
}

const mapDispatchToProps = (dispatch) => bindActionCreators({ saveName }, dispatch)


export default connect(mapStateToProps, mapDispatchToProps)(ManageHumanScreen)

