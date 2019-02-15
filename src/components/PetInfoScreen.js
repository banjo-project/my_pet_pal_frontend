import React from 'react'
import HeaderImage from './HeaderImage'
import { StyleSheet, Text, View, TextInput } from 'react-native'
import { Button } from 'react-native-elements'
import DatePicker from 'react-native-datepicker'
import styles from '../styling/PetInfoScreen'

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

