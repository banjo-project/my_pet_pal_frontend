import React, { Component } from 'react';
import { Button, Text, ScrollView, StyleSheet, View, TouchableOpacity, Image } from 'react-native';
import { ImagePicker, Permissions, Constants } from 'expo';

export default class PetPhotoScreen extends Component {
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
  
  handleNext = () => this.props.navigation.navigate('PetInfoPage')

  render() {
    let { image } = this.state;
    return (

        <ScrollView style={{flex: 1, flexDirection: 'column',}} contentContainerStyle={styles.container2}>

            <TouchableOpacity style={styles.roundImage} onPress={this.handleAddImage}>
                {image ? <Image source={{ uri: image }} style={styles.image}/> 
                    : (
                    <View style={styles.dogImageContainer}>
                        <Image source={require('../assets/dog.png')}/>
                        <Text style={styles.roundImageText}>+ Pet Image</Text>
                    </View> 
                    )}


            </TouchableOpacity>
            <View style={styles.textContainer }>
                <TouchableOpacity onPress={this.useCameraHandler} style={{flexDirection: 'column', justifyContent:'center', alignItems:'center', padding: 10}}>
                    <Image source={require('../assets/camera.png')} style={{width:40, height:40, marginBottom: '2%'}}/> 
                    <Text style={styles.roundImageText}> Take a profile photo </Text> 
                </TouchableOpacity>
                <TouchableOpacity onPress={this.useLibraryHandler} style={{flexDirection: 'column', justifyContent:'center', alignItems:'center', padding: 10}}>
                    <Image source={require('../assets/files.png')} style={{width:40, height:40, marginBottom: '2%'}}/> 
                    <Text style={styles.roundImageText}>Choose a photo from my album</Text>
                </TouchableOpacity>
                <Button title="Save this photo" onPress={() => this.handleNext(image)}>
                
                </Button>
            </View>
        </ScrollView>
        
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',

  },
  container2: {
    marginTop: '50%',
    justifyContent:'center',
    alignItems:'center',
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
  dogImageContainer:{
    flexDirection: "column", 
    alignItems:'center', 
    justifyContent:'center',
  },
  image: {
    resizeMode: "stretch",
    height: 200,
    width: 200,
    borderRadius: 100,
    alignItems:'center',
    justifyContent:'center',
  },
  roundImageText:{
    justifyContent:'center',
    fontSize: 20
  },
  textContainer:{
      marginTop: '5%',
  }

});
