import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { saveImage } from '../action/pets'
import { Button } from 'react-native-elements'
import { openHumanImage, saveHumanImage } from '../action/humans'
import styles from '../styling/PetPhotoScreen'
import { Text, ScrollView, View, TouchableOpacity, Image } from 'react-native';
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
    this.props.navigation.navigate('AddHumanPage')
  }

  render() {
    let { image } = this.state;
     if (this.props.humansData.humanImageOpen){
      return (
        <ScrollView style={{flex: 1, flexDirection: 'column', backgroundColor: '#53B6C4'}} contentContainerStyle={styles.container2}>
            <View style={styles.roundImage}>
                {image ? <Image source={{ uri: image }} style={styles.image}/> 
                    : (
                    <View style={styles.dogImageContainer}>
                        <Image source={require('../../assets/happy.png')}/>
                        <Text style={styles.roundImageText}>+ Human Image</Text>
                    </View> 
                    )}
            </View>
            <View style={styles.textContainer}>
                <TouchableOpacity onPress={this.useCameraHandler} style={styles.cameraContainer}>
                    <Image source={require('../../assets/camera_sky.png')} style={styles.cameraImage}/> 
                    <Text style={styles.roundImageText2}> Take a profile photo </Text> 
                </TouchableOpacity>
                <TouchableOpacity onPress={this.useLibraryHandler} style={styles.cameraContainer}>
                    <Image source={require('../../assets/album_sky.png')} style={styles.cameraImage}/> 
                    <Text style={styles.roundImageText2}>Choose a photo from my album</Text>
                </TouchableOpacity >
                <Button style={styles.btn} type="outline" title="Save this photo"  onPress={() => this.handleHumanNext(image)}>
                </Button>
            </View>
        </ScrollView>
  )} return (
        <ScrollView style={{flex: 1, flexDirection: 'column', backgroundColor: '#53B6C4'}} contentContainerStyle={styles.container2}>
            <View style={styles.roundImage}>
                {image ? <Image source={{ uri: image }} style={styles.image}/> 
                    : (
                    <View style={styles.dogImageContainer}>
                        <Image source={require('../../assets/dog_pink.png')}/>
                        <Text style={styles.roundImageText}>+ Pet Image</Text>
                    </View> 
                    )}
            </View>

            <View style={styles.textContainer}>
                <TouchableOpacity onPress={this.useCameraHandler} style={styles.cameraContainer}>
                    <Image source={require('../../assets/camera_sky.png')} style={styles.cameraImage}/> 
                    <Text style={styles.roundImageText2}> Take a profile photo </Text> 
                </TouchableOpacity>
                <TouchableOpacity onPress={this.useLibraryHandler} style={styles.cameraContainer}>
                    <Image source={require('../../assets/album_sky.png')} style={styles.cameraImage}/> 
                    <Text style={styles.roundImageText2}>Choose a photo from my album</Text>
                </TouchableOpacity >
                <Button style={styles.btn} title="Save this photo" onPress={() => this.handleNext(image)}/>
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

