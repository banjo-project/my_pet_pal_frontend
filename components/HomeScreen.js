import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image } from 'react-native';
import BottomNav from './BottomNav'
import { Button } from 'react-native-elements';

export default class HomeScreen extends React.Component {

  state = {
    openNameInput: false
  }

  handleAddName = () => { this.setState({ openNameInput: true })}
  handleAddImage = () => this.props.navigation.navigate('PetPhotoPage')
  handleNext = () => this.props.navigation.navigate('PetInfoPage')

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.contentsContainer}>
          <TouchableOpacity style={styles.roundImage} onPress={this.handleAddImage}>
          <Image source={require('../assets/dog.png')}/> 
            <Text style={styles.roundImageText}>+ Pet Image</Text>
          </TouchableOpacity>
          {!this.state.openNameInput? (
            <TouchableOpacity onPress={this.handleAddName} style={{flexDirection: 'row'}}> 
              <Text style={styles.text}> Tell us about your Pet!  </Text>
              <Image source={require('../assets/happy.png')} style={{width:30, height:30, marginTop: 15}} />
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
  },
  inputContainer: {
    justifyContent:'center',
    alignItems:'center',
  },
  bottomNavContainer: {
    padding: 3,
    fontSize: 30,
    justifyContent:'center',
    height: '13%',
  },
  contentsContainer: {
    height: '85%',
    alignItems:'center',
    marginTop: 20
  },
  roundImage: {
    alignItems: 'center',
    borderWidth:1,
    borderColor:'rgba(0,0,0,0.8)',
    width:200,
    height:200,
    borderRadius:100,
    alignItems:'center',
    justifyContent:'center',
  },
  roundImageText:{
    justifyContent:'center',
    fontSize: 20
  },
  text: {
    marginTop: 20,
    fontSize: 20,
  },
  textInput: {
    margin: 10,
    height: 40, 
    fontSize: 30,
    width: 200,
    borderColor: 'gray', 
    borderWidth: 1
  },
  nextBtn: {
    marginTop: 30,
    width: 150,
  }
})
