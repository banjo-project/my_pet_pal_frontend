import React from 'react';
import { Text, View, TouchableOpacity, TextInput, Image } from 'react-native';
import BottomNav from './BottomNav'
import styles from '../styling/HomeScreen'
import { Button } from 'react-native-elements'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { saveName } from '../action/pets'

class HomeScreen extends React.Component {
  state = {
    openNameInput: false,
    openErrorMsg: false,
    petName: ''
  }

  handleAddName = () => { this.setState({ openNameInput: true }) }
  handleAddImage = () => this.props.navigation.navigate('PetPhotoPage')
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
                <TextInput style={styles.textInput} onChangeText={(petName) => this.setState({petName})}></TextInput>
                <Button title="Next" style={styles.nextBtn} onPress={this.handleNext}></Button>
              </View>
          )} 
          {this.state.openErrorMsg? (
            <View>
             <Text>Please type your pet's name</Text>
            </View>
          ) : null}
          
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

const mapDispatchToProps = (dispatch) => bindActionCreators({ saveName }, dispatch)


export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)

