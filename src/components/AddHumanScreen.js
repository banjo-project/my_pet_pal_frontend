import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { openHumanImage, saveHumanName } from '../action/humans'
import { Text, View, TouchableOpacity, TextInput, Image, ScrollView } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Button } from 'react-native-elements'
import BottomNav from './BottomNav'
import HeaderImage from './HeaderImage'
import styles from '../styling/AddHumanScreen'
import axios from 'axios'
const BASE_URL = 'http://localhost:5000'

class AddHumanScreen extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      username: '',
      title: '',
      email: '',
      password: '',
      password2: '',
      phone_number: '',
      errorMessage: ''
    }
  }

  static navigationOptions = {
    headerTitle: <HeaderImage />,
    headerStyle: {
      height: 100,
      fontWeight: 'bold',
    },
  };

  handleAddImage = () => {
    this.props.openHumanImage()
    this.props.navigation.navigate('PetPhotoPage')
  }

  emailValidate = (email) => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
    if(reg.test(email) === false){
      this.setState({ email, errorMessage: 'Please type valid email address.' })
      } else {
      this.setState({ email, errorMessage: '' })
    }
  }
  pwValidate = (password2) => {
    if(password2 !== this.state.password){
      this.setState({ password2, errorMessage: 'Please type matching password' })
      } else {
      this.setState({ password2, errorMessage: '' })
    }
  }
  phoneValidate = (phone_number) => {
    let reg = /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/;
    if(reg.test(phone_number) === false){
      this.setState({ phone_number, errorMessage: 'Please type valid phone number.' })
      } else {
      this.setState({ phone_number, errorMessage: '' })
    }
  }

  handleNext = () => {
    if(!this.state.errorMessage){
      this.props.saveHumanName(this.state.username)
      this.props.navigation.navigate('LogInPage')
    }
  }

  handleSignUp = () => {
    if (!this.state.username|| !this.state.email || !this.state.password || !this.state.password2) {
      this.setState({
        errorMessage: 'Please enter all fields',
        //showError: true,
      })
      // console.warn(this.state.errorMessage)
      return
    }

    const newUser = { 
      username: this.state.username,
      password: this.state.password,
      email: this.state.email, 
      phone_number: this.state.phone_number,
      title: this.state.title,
      petName: this.props.petsData.petName, 
      petBirthday: this.props.petsData.petBirthday,
      petBreed: this.props.petsData.petBreed,
      petImg: this.props.petsData.petImage ? this.props.petsData.petImage: null,
      petSex: this.props.petsData.petSex
    }

    axios.post(`${BASE_URL}/users`, newUser)
      .then((response) => {
        // console.warn(response)
        this.setState({
          showError: false
        })
        this.props.navigation.navigate('LogInPage')
      })
      .catch(error => {
        // console.warn(error)
        this.setState({
          errorMessage: 'Signup Failed',
          showError: true,
          username: '',
          title: '',
          email: '',
          password: '',
          password2: '',
          phone_number: ''
        })
      })
  }


  render() {
    const image = this.props.humansData.humanImage
    return (
      <View style={styles.container}>
        <ScrollView>
        <KeyboardAwareScrollView>
        <View style={styles.contentsContainer}>
        
        {image ? (
          <TouchableOpacity style={styles.roundImage} onPress={this.handleAddImage}>
            <Image style={styles.image} source={{ uri: image }} /> 
          </TouchableOpacity>
        ): (
          <TouchableOpacity style={styles.roundImage} onPress={this.handleAddImage}>
            <Image style={styles.image2} source={require('../../assets/happy_color.png')}/> 
            <Text style={styles.roundImageText}>+ Human Photo </Text>
          </TouchableOpacity>
        )}

            <View style={styles.inputContainer}>
              <View style={styles.inputTitleContainer}>
                <Text style={styles.text}>Name</Text>
                <Text style={styles.text}>Title</Text>
                <Text style={styles.text}>Email</Text>
                <Text style={styles.text}>Password</Text>
                <Text style={styles.text}>Retype Password</Text>
                <Text style={styles.text}>Phone Number</Text>
              </View>
              <View style={styles.inputContentContainer}>
                <TextInput style={styles.mdTextInput} value={this.state.username} onChangeText={(username) => this.setState({ username })}></TextInput>
                <TextInput style={styles.smTextInput} value={this.state.title} onChangeText={(title) => this.setState({ title })}></TextInput>
                <TextInput style={styles.lgTextInput} value={this.state.email} onChangeText={(email) => this.emailValidate(email)}></TextInput>
                <TextInput style={styles.smTextInput} value={this.state.password} onChangeText={(password) => this.setState({ password })}></TextInput>
                <TextInput style={styles.smTextInput} value={this.state.password2} onChangeText={(password2) => this.pwValidate(password2)}></TextInput>
                <TextInput style={styles.mdTextInput} value={this.state.phone_number} onChangeText={(phone_number) => this.phoneValidate(phone_number)}></TextInput>
              </View>
            </View>
            {this.state.errorMessage ? (
              <View>
              <Text>{this.state.errorMessage}</Text>
              </View>
              ) : null}
            <View style={styles.btnContainer}>
              <Button title="Create Account" style={styles.nextBtn} onPress={this.handleSignUp}></Button>
            </View>
          </View>
          </KeyboardAwareScrollView>
          </ScrollView>
        <View style={styles.bottomNavContainer}>
          <BottomNav />
        </View>
        
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

const mapDispatchToProps = (dispatch) => bindActionCreators({ openHumanImage, saveHumanName }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(AddHumanScreen)

