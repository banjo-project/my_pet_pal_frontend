import React from 'react'
import { Text, View, TouchableOpacity, TextInput, Image, Alert, ScrollView } from 'react-native'
import styles from '../styling/HomeScreen'
import BottomNav from './BottomNav'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Button } from 'react-native-elements'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { saveName } from '../action/pets'

class HomeScreen extends React.Component {
  state = {
    openNameInput: false,
    openLogin: false,
    openErrorMsg: false,
    petName: '',
  }

  handleAddName = () => { this.setState({ openNameInput: true }) }
  handleAddImage = () => this.props.navigation.navigate('PetPhotoPage')
  handleLogIn = () => this.props.navigation.navigate('LogInPage')
  handleNext = () => {
    if(!this.state.petName){ 
      return this.setState({ openErrorMsg: true })
    }
    this.props.saveName(this.state.petName)
    this.props.navigation.navigate('PetInfoPage')
  }

  render() {
    const image = this.props.petsData.petImage
  
    return (
      <View style={styles.container}>
      <ScrollView>
      <KeyboardAwareScrollView>
        <View style={styles.titleContainer}>
        <Text style={styles.title}>MY PET PAL</Text>
        </View>
          <View style={styles.contentsContainer}>
          {image ? (
            <View style={styles.roundImage} onPress={this.handleAddImage}>
              <Image style={styles.image} source={{ uri: image }} /> 
            </View>
          ) : (
            <TouchableOpacity style={styles.roundImage} onPress={this.handleAddImage}>
              <Image source={require('../../assets/dog_brown.png')}/> 
              <Text style={styles.roundImageText}>+ Pet Image</Text>
            </TouchableOpacity>
          )}
            
            {!this.state.openNameInput? (
              <View>
                <TouchableOpacity onPress={this.handleAddName} style={{flexDirection: 'row'}}> 
                  <Text style={styles.text}> Tell us about your Pet!  </Text>
                  {/* <Image source={require('../../assets/happy_yellow.png')} style={{width:30, height:30, marginTop: 15}} /> */}
                </TouchableOpacity>
                <TouchableOpacity onPress={this.handleLogIn} style={{flexDirection: 'row', alignItems:'center', justifyContent:'center'}}> 
                  <Text style={styles.text2}> Already have an account?  </Text>
                </TouchableOpacity>
              </View>
            ): (
                <View style={styles.inputContainer}>
                    <Text style={styles.text}>What's your pet's name?</Text>
                    <TextInput style={styles.textInput} onChangeText={(petName) => this.setState({petName})}></TextInput>
                    <Button title="Next" style={styles.nextBtn} onPress={this.handleNext}></Button>
                </View>
            )} 

            {this.state.openErrorMsg? 
              Alert.alert(
                "Please enter your dog's name",
                '',
                [
                  {text: 'OK', onPress: () => this.setState({ openErrorMsg: false })}
                ],
                {cancelable: false},
              ) : null}
            
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

const mapDispatchToProps = (dispatch) => bindActionCreators({ saveName }, dispatch)


export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)


