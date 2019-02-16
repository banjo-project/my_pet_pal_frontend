import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { openHumanImage, saveHumanImage } from '../action/humans'
import { Text, View, TouchableOpacity, TextInput, Image } from 'react-native'
import { Button } from 'react-native-elements'
import BottomNav from './BottomNav'
import HeaderImage from './HeaderImage'
import styles from '../styling/AddHumanScreen'


class AddHumanScreen extends React.Component {

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

  handleNext = () => this.props.navigation.navigate('PetInfoPage')

  render() {

    return (
      <View style={styles.container}>
        <View style={styles.contentsContainer}>
          <TouchableOpacity style={styles.roundImage} onPress={this.handleAddImage}>
            <Image source={require('../../assets/happy.png')}/> 
            <Text style={styles.roundImageText}>+ My Haman Image</Text>
          </TouchableOpacity>
          
            <View style={styles.inputContainer}>
              <Text style={styles.text}>name</Text>
              <TextInput style={styles.textInput}></TextInput>
              <Text style={styles.text}>title</Text>
              <TextInput style={styles.textInput}></TextInput>
              <Text style={styles.text}>email</Text>
              <TextInput style={styles.textInput}></TextInput>
              <Text style={styles.text}>password</Text>
              <TextInput style={styles.textInput}></TextInput>
              <Text style={styles.text}>retype password</Text>
              <TextInput style={styles.textInput}></TextInput>
              <Text style={styles.text}>phone number</Text>
              <TextInput style={styles.textInput}></TextInput>
              <Button title="Send Invitation" style={styles.nextBtn} onPress={this.handleInvitation}></Button>
              <Button title="Next" style={styles.nextBtn} onPress={this.handleNext}></Button>
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

const mapDispatchToProps = (dispatch) => bindActionCreators({ openHumanImage, saveHumanImage }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(AddHumanScreen)

