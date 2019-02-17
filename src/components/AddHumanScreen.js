import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { openHumanImage, saveHumanName, saveHumanTitle, saveHumanEmail, saveHumanPw, saveHumanPhoneNumber } from '../action/humans'
import { Text, View, TouchableOpacity, TextInput, Image } from 'react-native'
import { Button } from 'react-native-elements'
import BottomNav from './BottomNav'
import HeaderImage from './HeaderImage'
import styles from '../styling/AddHumanScreen'


class AddHumanScreen extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      humanName: '',
      humanTitle: '',
      humanEmail: '',
      humanPw: '',
      humanPw2: '',
      humanPhone: '',
      petBdOpen: false,
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

  emailValidate = (humanEmail) => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
    if(reg.test(humanEmail) === false){
      this.setState({ humanEmail, errorMessage: 'Please type valid email address.' })
      } else {
      this.setState({ humanEmail, errorMessage: '' })
    }
  }
  pwValidate = (humanPw2) => {
    if(humanPw2 !== this.state.humanPw){
      this.setState({ humanPw2, errorMessage: 'Please type matching password' })
      } else {
      this.setState({ humanPw2, errorMessage: '' })
    }
  }
  phoneValidate = (humanPhone) => {
    let reg = /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/;
    if(reg.test(humanPhone) === false){
      this.setState({ humanPhone, errorMessage: 'Please type valid phone number.' })
      } else {
      this.setState({ humanPhone, errorMessage: '' })
    }
  }

  handleNext = () => {
    if(!this.state.errorMessage){
      this.props.saveHumanName(this.state.humanName)
      this.props.saveHumanTitle(this.state.humanTitle)
      this.props.saveHumanEmail(this.state.humanEmail)
      this.props.saveHumanPw(this.state.humanPw)
      this.props.saveHumanPhoneNumber(this.state.humanPhone)
      this.props.navigation.navigate('LogInPage')
    }
  }

  render() {
    const image = this.props.humansData.humanImage
    return (
      <View style={styles.container}>
        <View style={styles.contentsContainer}>
        
        {image ? (
          <TouchableOpacity style={styles.roundImage} onPress={this.handleAddImage}>
            <Image style={styles.image} source={{ uri: image }} /> 
          </TouchableOpacity>
        ): (
          <TouchableOpacity style={styles.roundImage} onPress={this.handleAddImage}>
            <Image style={styles.image2} source={require('../../assets/happy.png')}/> 
            <Text style={styles.roundImageText}>+Photo </Text>
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
                <TextInput style={styles.mdTextInput} value={this.state.humanName} onChangeText={(humanName) => this.setState({ humanName })}></TextInput>
                <TextInput style={styles.smTextInput} value={this.state.humanTitle} onChangeText={(humanTitle) => this.setState({ humanTitle })}></TextInput>
                <TextInput style={styles.lgTextInput} value={this.state.humanEmail} onChangeText={(humanEmail) => this.emailValidate(humanEmail)}></TextInput>
                <TextInput style={styles.smTextInput} value={this.state.humanPw} onChangeText={(humanPw) => this.setState({ humanPw})}></TextInput>
                <TextInput style={styles.smTextInput} value={this.state.humanPw2} onChangeText={(humanPw2) => this.pwValidate(humanPw2)}></TextInput>
                <TextInput style={styles.mdTextInput} value={this.state.humanPhone} onChangeText={(humanPhone) => this.phoneValidate(humanPhone)}></TextInput>
              </View>
            </View>
            {this.state.errorMessage ? (
              <View>
              <Text>{this.state.errorMessage}</Text>
              </View>
              ) : null}
            <View style={styles.btnContainer}>
              <Button title="Create Account" type="outline" style={styles.nextBtn} onPress={this.handleNext}></Button>
            </View>
          </View>
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

const mapDispatchToProps = (dispatch) => bindActionCreators({ openHumanImage, saveHumanName, saveHumanTitle, saveHumanEmail, saveHumanPw, saveHumanPhoneNumber }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(AddHumanScreen)

