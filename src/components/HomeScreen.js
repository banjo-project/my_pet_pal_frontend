import React from 'react';
import { Text, View, TouchableOpacity, TextInput, Image } from 'react-native';
import BottomNav from './BottomNav'
import styles from '../styling/HomeScreen'
import { Button } from 'react-native-elements'
import { connect } from 'react-redux'

class HomeScreen extends React.Component {
  state = {
    openNameInput: false,
  }

  handleAddName = () => { this.setState({ openNameInput: true }) }
  handleAddImage = () => this.props.navigation.navigate('PetPhotoPage')
  handleNext = () => this.props.navigation.navigate('PetInfoPage')

  render() {
    let image = this.props.saveImage
  
    return (
      <View style={styles.container}>
        <View style={styles.contentsContainer}>
        {image ? (
          <View style={styles.roundImage} onPress={this.handleAddImage}>
            <Image style={styles.image} source={{ uri: image }} /> 
          </View>
        ) : (
          <TouchableOpacity style={styles.roundImage} onPress={this.handleAddImage}>
            <Image source={require('../../assets/dog.png')}/> 
            <Text style={styles.roundImageText}>+ Pet Image</Text>
          </TouchableOpacity>
        )}
          
          {!this.state.openNameInput? (
            <TouchableOpacity onPress={this.handleAddName} style={{flexDirection: 'row'}}> 
              <Text style={styles.text}> Tell us about your Pet  </Text>
              <Image source={require('../../assets/happy.png')} style={{width:35, height:35, marginTop: 15}} />
            </TouchableOpacity>
          ): (
              <View style={styles.inputContainer}>
                <Text style={styles.text}>What's your pet's name?</Text>
                <TextInput style={styles.textInput}></TextInput>
                <Button title="Next" style={styles.nextBtn} onPress={this.handleNext}></Button>
              </View>
          )} 
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

export default connect(mapStateToProps, null)(HomeScreen)

