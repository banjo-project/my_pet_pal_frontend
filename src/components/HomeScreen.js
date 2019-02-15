import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image, AsyncStorage } from 'react-native';
import BottomNav from './BottomNav'
import styles from '../styling/HomeScreen'
import { Button } from 'react-native-elements';

export default class HomeScreen extends React.Component {
  state = {
    openNameInput: false,
  }

  handleAddName = () => { this.setState({ openNameInput: true }) }
  handleAddImage = () => this.props.navigation.navigate('PetPhotoPage')
  handleNext = () => this.props.navigation.navigate('PetInfoPage')

  async _getImageData () {
  //await AsyncStorage.removeItem('imageData')
   return await AsyncStorage.getItem('imageData')
}

  render() {
  //  let { openNameInput, image } = this.state;
    let image = this._getImageData()
    console.warn(image)

    return (
      <View style={styles.container}>
        <View style={styles.contentsContainer}>
        {image ==! null ? (
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
