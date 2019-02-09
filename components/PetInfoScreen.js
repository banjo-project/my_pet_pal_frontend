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
        <Text style={styles.titleText}>Create your pet's profile</Text>
          <View style={styles.inputContainer}>
            <View style={styles.inputContainer2}>
              <Text style={styles.text}>Breed       </Text>
              <TextInput style={styles.textInput}></TextInput>
            </View>
            <View style={styles.inputContainer2}>
              <Text style={styles.text}>BirthDay  </Text>
              <TextInput style={styles.textInput}></TextInput>
            </View>
            <View style={styles.inputContainer2}>
              <Text style={styles.text}>Sex           </Text>
              <TextInput style={styles.textInput}></TextInput>
            </View>
          </View>
          <Button title="Next" style={styles.nextBtn} onPress={this.handleNext}></Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    padding: 10,
    alignItems:'center',
  },
  inputContainer: {
    width: '80%',
    justifyContent: "center",
    alignItems:'center',
  },
  inputContainer2: {
    flexDirection: "row",
  },
  titleText: {
    marginTop: 30,
    marginBottom: 30,
    fontSize: 25,
    fontWeight: 'bold',
    alignItems:'center',
    justifyContent: "center",
  },
  text: {
    marginTop: 20,
    fontSize: 20,
  },
  textInput: {
    margin: 15,
    height: 30, 
    fontSize: 25,
    width: 200,
    borderColor: 'gray', 
    borderWidth: 1
  },
  nextBtn: {
    marginTop: 30,
    width: 150,
  }
});
