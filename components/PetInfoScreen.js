import React from 'react';
import HeaderImage from './HeaderImage'
import { StyleSheet, Text, View, TextInput, Picker, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Button } from 'react-native-elements';
import DatePicker from 'react-native-datepicker'
import { Dropdown } from 'react-native-material-dropdown'

export default class PetInfoScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      petSex: '',
      petBirthday: '',

      petBdOpen: false,
    }
}

  static navigationOptions = {
    headerTitle: <HeaderImage />,
    headerStyle: {
      height: 100,
      fontWeight: 'bold',
    },
  };
  
  HandlePicker = () => {
    this.setState({
      petSexPickerOpen: true,
    })
  }
  
  handleNext = () => this.props.navigation.navigate('PetInfoPage')

  render() {
    let data = [{value: 'Girl'}, {value: 'Boy'}]

    return (
      <View style={styles.container}>
        <Text style={styles.titleText}>Create your pet's profile</Text>
          <View style={styles.inputContainer}>
            
            <View style={styles.inputContainer2}>
              <Text style={styles.text}>Breed       </Text>
              <TextInput style={styles.textInput}
                placeholder=" ex) Poodle"></TextInput>
            </View>

            <View style={styles.inputContainer2}>
              <Text style={styles.text}>Sex           </Text>
              <TextInput style={styles.textInput}
              placeholder=" Girl or Boy"></TextInput>
            </View>

            <View style={styles.inputContainer2}>
              <Text style={styles.text2}>BirthDay  </Text>
                  <DatePicker
                    showIcon = 'false'
                    style={styles.datePickerStyle}
                    date={this.state.petBirthday}
                    mode="date"
                    format="MM-DD-YYYY"
                    minDate="01-01-2000"
                    maxDate="12-31-2019"
                    confirmBtnText="Confirm"
                    cancelBtnText="Cancel"
                    onDateChange={(date) => {this.setState({petBirthday: date})}}
                  />
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
  datePickerStyle: {
    width: 210, 
    height: 25,
    marginTop: 10,
    marginBottom: '5%',
    marginLeft: 13,
  },
  inputContainer: {
    width: '80%',
    alignItems:'center',
    padding: '3%'
  },
  inputContainer2: {
    flexDirection: "row",
    padding: '3%'
  },
  titleText: {
    marginTop: 30,
    marginBottom: 20,
    fontSize: 20,
    fontWeight: 'bold',
    alignItems:'center',
    justifyContent: "center",
  },
  text: {
    marginTop: 7,
    fontSize: 20,
  },
  text2: {
    marginTop: 15,
    fontSize: 20,
  },
  textInput: {
    margin: 5,
    height: 30, 
    padding: 5,
    fontSize: 18,
    width: 200,
    borderColor: 'gray', 
    borderWidth: 1
  },
  inputPicker: {
    width: 200,
    fontSize: 18,
  },
  nextBtn: {
    marginTop: '7%',
    width: 150,
  }
});
