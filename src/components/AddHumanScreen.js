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
              <View style={styles.inputTitleContainer}>
                <Text style={styles.text}>Name</Text>
                <Text style={styles.text}>Title</Text>
                <Text style={styles.text}>Email</Text>
                <Text style={styles.text}>Password</Text>
                <Text style={styles.text}>Retype Password</Text>
                <Text style={styles.text}>Phone Number</Text>
              </View>
              <View style={styles.inputContentContainer}>
                <TextInput style={styles.mdTextInput}></TextInput>
                <TextInput style={styles.smTextInput}></TextInput>
                <TextInput style={styles.lgTextInput}></TextInput>
                <TextInput style={styles.smTextInput}></TextInput>
                <TextInput style={styles.smTextInput}></TextInput>
                <TextInput style={styles.mdTextInput}></TextInput>
              </View>
            </View>
          
              <View style={styles.btnContainer}>
                {/* <Button title="Send Invitation" type="outline" style={styles.nextBtn} onPress={this.handleInvitation}></Button> */}
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

const mapDispatchToProps = (dispatch) => bindActionCreators({ openHumanImage, saveHumanImage }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(AddHumanScreen)

