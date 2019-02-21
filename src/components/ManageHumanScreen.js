'use strict';
import React from 'react';
import { Text, View, TouchableOpacity, TextInput, Image, TouchableWithoutFeedback, Keyboard} from 'react-native';
import BottomNav from './BottomNav'
import HeaderImage from './HeaderImage'
import styles from '../styling/ManageHumanScreen'
import { Button } from 'react-native-elements'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { saveName } from '../action/pets'
import Communications from 'react-native-communications';

class ManageHumanScreen extends React.Component {
  state = {
    openErrorMsg: false,
    openProfile: false,
    openInvitation: false
  }

  static navigationOptions = {
    headerTitle: <HeaderImage />,
    headerStyle: {
      height: 100,
      fontWeight: 'bold',
    },
  };

  handleAddImage = () => {
    // this.props.openHumanImage()
    this.props.navigation.navigate('PetPhotoPage')
  }

  handleNext = () => {
    if(!this.state.humanEmail || !this.state.humanPw){ 
      return this.setState({ openErrorMsg: true })
    }
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
                <Image style={styles.image2} source={require('../../assets/happy.png')}/> 
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
            <Text style={styles.profileText}>Name</Text>
            <TextInput style={styles.textInput1} onChangeText={(human2Name) => this.setState({human2Name})}></TextInput>
            <Text style={styles.profileText}>Email</Text>
            <TextInput style={styles.textInput2} onChangeText={(human2Email) => this.setState({human2Email})}></TextInput>

            <TouchableOpacity onPress={() => Communications.email(['tmddms0223@hotmail.dom'],null,null,'My Subject','My body text')}>
          <View style={styles.holder}>
            <Text style={styles.text}>Send an email</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => Communications.text('5038668388', 'testing my app -Sarah-')}>
          <View style={styles.holder}>
            <Text style={styles.text}>Send a text/iMessage</Text>
          </View>
        </TouchableOpacity>

            <Button style={styles.btn} title="Send Invitation" onPress={()=>{this.setState({ openInvitation: !this.state.openInvitation, openProfile: false})}}></Button>
        </View>
        ): null}

            <View style={styles.btnContainer}>
                <Button style={styles.btn} type="outline" title="Your Human's profile" onPress={()=>{this.setState({ openProfile: !this.state.openProfile, openInvitation: false})}}></Button>
                <Button style={styles.btn} type="outline" title="Invite More Human"onPress={()=>{this.setState({ openInvitation: !this.state.openInvitation, openProfile: false})}}></Button>
            </View>

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

