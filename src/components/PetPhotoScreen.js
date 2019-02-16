import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { saveImage } from '../action/pets'
import { openHumanImage, saveHumanImage } from '../action/humans'
import styles from '../styling/PetPhotoScreen'
import { Button, Text, ScrollView, View, TouchableOpacity, Image } from 'react-native';
import { ImagePicker, Permissions } from 'expo';

class PetPhotoScreen extends Component {
  state = {
    result: null,
    image: null,
  };

  askPermissionsAsync = async () => {
    await Permissions.askAsync(Permissions.CAMERA);
    await Permissions.askAsync(Permissions.CAMERA_ROLL);
  };

  useLibraryHandler = async () => {
    await this.askPermissionsAsync();
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
      base64: false,
    });
    this.setState({ result });
    this.setState({ image: result.uri });
  };

  useCameraHandler = async () => {
    await this.askPermissionsAsync();
    let result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 3],
      base64: false,
    });
    this.setState({ result });
    this.setState({ image: result.uri });
  };
  
  handleNext = async () => {
    this.props.saveImage(this.state.image)
    this.props.navigation.navigate('Home')
  }
  
  handleNext = async () => {
    this.props.saveImage(this.state.image)
    this.props.navigation.navigate('Home')
  }

  handleHumanNext = async () => {
    this.props.saveHumanImage(this.state.image)
    this.props.navigation.navigate('Home')
  }

  render() {
    let { image } = this.state;
    if (this.props.humansData){
      return (
        <ScrollView style={{flex: 1, flexDirection: 'column',}} contentContainerStyle={styles.container2}>
            <View style={styles.roundImage}>
                {image ? <Image source={{ uri: image }} style={styles.image}/> 
                    : (
                    <View style={styles.dogImageContainer}>
                        <Image source={require('../../assets/happy.png')}/>
                        <Text style={styles.roundImageText}>+ Human Image</Text>
                    </View> 
                    )}
            </View>
            <View style={styles.textContainer }>
                <TouchableOpacity onPress={this.useCameraHandler} style={{flexDirection: 'column', justifyContent:'center', alignItems:'center', padding: 10}}>
                    <Image source={require('../../assets/camera.png')} style={{width:40, height:40, marginBottom: '2%'}}/> 
                    <Text style={styles.roundImageText}> Take a profile photo </Text> 
                </TouchableOpacity>
                <TouchableOpacity onPress={this.useLibraryHandler} style={{flexDirection: 'column', justifyContent:'center', alignItems:'center', padding: 10}}>
                    <Image source={require('../../assets/files.png')} style={{width:40, height:40, marginBottom: '2%'}}/> 
                    <Text style={styles.roundImageText}>Choose a photo from my album</Text>
                </TouchableOpacity >
                <Button style={{marginTop: '70%'}} title="Save this photo" onPress={() => this.handleHumanNext(image)}>
                </Button>
            </View>
        </ScrollView>
  )} return (
        <ScrollView style={{flex: 1, flexDirection: 'column',}} contentContainerStyle={styles.container2}>
            <View style={styles.roundImage}>
                {image ? <Image source={{ uri: image }} style={styles.image}/> 
                    : (
                    <View style={styles.dogImageContainer}>
                        <Image source={require('../../assets/dog.png')}/>
                        <Text style={styles.roundImageText}>+ Pet Image</Text>
                    </View> 
                    )}
            </View>

            <View style={styles.textContainer }>
                <TouchableOpacity onPress={this.useCameraHandler} style={{flexDirection: 'column', justifyContent:'center', alignItems:'center', padding: 10}}>
                    <Image source={require('../../assets/camera.png')} style={{width:40, height:40, marginBottom: '2%'}}/> 
                    <Text style={styles.roundImageText}> Take a profile photo </Text> 
                </TouchableOpacity>
                <TouchableOpacity onPress={this.useLibraryHandler} style={{flexDirection: 'column', justifyContent:'center', alignItems:'center', padding: 10}}>
                    <Image source={require('../../assets/files.png')} style={{width:40, height:40, marginBottom: '2%'}}/> 
                    <Text style={styles.roundImageText}>Choose a photo from my album</Text>
                </TouchableOpacity >
                <Button style={{marginTop: '70%'}} title="Save this photo" onPress={() => this.handleNext(image)}>
                </Button>
            </View>
        </ScrollView>
    );
  }
}
const mapStateToProps = (state) => {
  return ({
    petsData: state.petsData,
    humansData: state.humansData
  })
}

const mapDispatchToProps = (dispatch) => bindActionCreators({ saveImage, openHumanImage, saveHumanImage }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(PetPhotoScreen)

