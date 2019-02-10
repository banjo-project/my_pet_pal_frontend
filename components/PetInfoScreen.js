import React from 'react'
import HeaderImage from './HeaderImage'
import { StyleSheet, Text, View, TextInput } from 'react-native'
import { Button } from 'react-native-elements'
import DatePicker from 'react-native-datepicker'

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
  
  HandlePicker = () => {this.setState({ petSexPickerOpen: true })}
  
  handleNext = () => this.props.navigation.navigate('PetSchedulePage')

  render() {

    return (
      <View style={styles.container}>
        <Text style={styles.titleText}>Create your pet's profile</Text>
          <View style={styles.inputContainer}>
            
            <View style={styles.inputContainer2}>
              <Text style={styles.text}> Breed        </Text>
              <TextInput style={styles.textInput}
                placeholder=" ex) Poodle"></TextInput>
            </View>

            <View style={styles.inputContainer2}>
              <Text style={styles.text}> Sex            </Text>
              <TextInput style={styles.textInput}
              placeholder=" Girl or Boy"></TextInput>
            </View>

            <View style={styles.inputContainer2}>
              <Text style={styles.text}>Bithday     </Text>
                  <DatePicker
                    customStyles={{
                      showIcon: false,
                      fontSize: 20,
                      fontColor: 'gray',
                      dateIcon: {
                        position: 'absolute',
                        height: 0
                      },
                    }}
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
    )
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
    width: '60%',
    alignItems:'center',
    padding: '1%'
  },
  inputContainer2: {
    flexDirection: "row",
    alignItems:'flex-start',
    justifyContent: 'flex-start',
    padding: '1%'
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
    marginTop: 15,
    fontSize: 20,
  },
  textInput: {
    margin: 5,
    height: 40, 
    padding: 10,
    fontSize: 18,
    width: 200,
    borderColor: 'gray', 
    borderWidth: 1
  },
  datePickerStyle: {
    width: 200, 
    height: 20,
    marginTop: 10,
    marginBottom: '5%'
  },
  nextBtn: {
    marginTop: 40,
    width: 150,
  }
});
