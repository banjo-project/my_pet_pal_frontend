import React, { Component } from 'react';
import { Button, Text, ScrollView, StyleSheet, View, TouchableOpacity, Image } from 'react-native';
import { ImagePicker, Permissions, Constants } from 'expo';

export default class PetPhotoScreen extends Component {
  state = {
    result: null,
  };

  askPermissionsAsync = async () => {
    await Permissions.askAsync(Permissions.CAMERA);
    await Permissions.askAsync(Permissions.CAMERA_ROLL);
    // you would probably do something to verify that permissions
    // are actually granted, but I'm skipping that for brevity
  };

  useLibraryHandler = async () => {
    await this.askPermissionsAsync();
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
      base64: false,
    });
    this.setState({ result });
  };

  useCameraHandler = async () => {
    await this.askPermissionsAsync();
    let result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 3],
      base64: false,
    });
    this.setState({ result });
  };

  render() {
    return (
        <ScrollView style={{flex: 1, flexDirection: 'column',}} contentContainerStyle={styles.container2}>

            <TouchableOpacity style={styles.roundImage} onPress={this.handleAddImage}>
                <Image source={require('../assets/dog.png')}/> 
                <Text style={styles.roundImageText}>+ Pet Image</Text>
            </TouchableOpacity>
            <View style={styles.textContainer }>
                <View style={{flexDirection: 'row', justifyContent:'center'}}>
                    <Button title="Take a profile photo" onPress={this.useCameraHandler} />
                    <Image source={require('../assets/camera.png')} style={{width:25, height:25}}/> 
                </View>
                <View style={{flexDirection: 'row', justifyContent:'center'}}>
                    <Button
                    title="Choose a photo from my album"
                    onPress={this.useLibraryHandler}
                    />
                                        <Image source={require('../assets/files.png')} style={{width:25, height:25}}/> 
                </View>
                <Text style={styles.paragraph}>
                {JSON.stringify(this.state.result)}
                </Text>
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
    marginTop: '35%',
    justifyContent:'center',
    alignItems:'center',
  },
  paragraph: {
    marginHorizontal: 15,
    marginTop: 30,
    fontSize: 18,
    color: '#34495e',
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
  textContainer:{
      marginTop: '5%',
  }

});
