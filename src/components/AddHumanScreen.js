import React from 'react';
import { Text, View, TouchableOpacity, TextInput, Image } from 'react-native';
import BottomNav from './BottomNav'
import styles from '../styling/HomeScreen'
import HeaderImage from './HeaderImage'
import { Button } from 'react-native-elements'
import { connect } from 'react-redux'


class AddHumanScreen extends React.Component {

  static navigationOptions = {
    headerTitle: <HeaderImage />,
    headerStyle: {
      height: 100,
      fontWeight: 'bold',
    },
  };

  handleAddImage = () => this.props.navigation.navigate('PetPhotoPage')
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
              <Text style={styles.text}>email</Text>
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
    saveImage: state.saveImage,
  })
}

export default connect(mapStateToProps, null)(AddHumanScreen)

