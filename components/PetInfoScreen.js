import React from 'react';
import HeaderImage from './HeaderImage'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Button } from 'react-native-elements';

export default class PetInfoScreen extends React.Component {
  static navigationOptions = {
    headerTitle: <HeaderImage />,
    headerStyle: {
      height: 100,
      fontWeight: 'bold',
    },
  };
  
  
  handleNext = () => this.props.navigation.navigate('PetInfoPage')

  render() {

    return (
      <View style={styles.container}>
        <View style={styles.contentsContainer}>
          <View style={styles.inputContainer}>
              <Text style={styles.text}>What's your pet's name?</Text>
              <TextInput style={styles.textInput}></TextInput>
              <Button title="Next" style={styles.nextBtn} onPress={this.handleNext}></Button>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  roundImage: {
    alignItems: 'center',
    borderWidth:1,
    borderColor:'rgba(0,0,0,0.8)',
    width:70,
    height:70,
    borderRadius:100,
    alignItems:'center',
    justifyContent:'center',
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
  },
  headerContainer:{
    alignItems:'center',
    justifyContent:'center',
  },
  topNavContainer: {
    padding: 3,
    fontSize: 30,
    justifyContent:'center',
    height: '10%',
  },
  inputContainer: {
    justifyContent:'center',
    alignItems:'center',
  },
  bottomNavContainer: {
    padding: 3,
    fontSize: 30,
    justifyContent:'center',
    height: '15%',
  },
  contentsContainer: {
    height: '80%',
    alignItems:'center',
    marginTop: 20

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
});
