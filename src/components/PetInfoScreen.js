import React from 'react'
import HeaderImage from './HeaderImage'
import { Text, View, TextInput, TouchableWithoutFeedback, Keyboard } from 'react-native'
import { Button } from 'react-native-elements'
import DatePicker from 'react-native-datepicker'
import RNPickerSelect from 'react-native-picker-select'
import styles from '../styling/PetInfoScreen'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { saveBreed, saveSex, saveBirthday } from '../action/pets'

const datePickerCustomStyles = {
  showIcon: false,
  dateIcon: {
    position: 'absolute',
    height: 0
  },
  dateInput: {
    borderColor: '#CBE7ED',
    borderWidth: 0.8,
    color: '#CBE7ED'
  },
  dateText:{
    color: '#CBE7ED',
    fontSize: 18,
    fontWeight: 'bold',
  },
  placeholderText: {
      fontSize: 18,
  }
}

const sex = [{
  label: 'Boy',
  value: 'boy'
}, {
  label: 'Girl',
  value: 'girl'
}]

class PetInfoScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      petBreed: '',
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
  }
  
  HandlePicker = () => this.setState({ petSexPickerOpen: true })
  
  handleNext = () => {
    this.props.saveBreed(this.state.petBreed)
    this.props.saveSex(this.state.petSex)
    this.props.saveBirthday(this.state.petBirthday)
    this.props.navigation.navigate('PetSchedulePage')
  }

  render() {
    const placeholder = {
      label: 'Select One',
      value: null,
    }
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={styles.container}>
        
        {this.props.petsData.petName? <Text style={styles.titleText}>Create {this.props.petsData.petName}'s profile</Text> 
          : <Text style={styles.titleText}>Create your pet's profile</Text>}
            <View style={styles.inputContainer}>

              <View style={styles.inputContainer2}>
                <Text style={styles.text}>Breed</Text>
                <TextInput style={styles.textInput} onChangeText={(petBreed) => this.setState({  ...this.state, petBreed })}
                  placeholder="e.g. Poodle" placeholderTextColor='#CBE7ED'></TextInput>
              </View>

              <View style={styles.inputContainer2}>
                <Text style={styles.text}>Sex</Text>
                <View style={styles.pickerContainer}>
                  <RNPickerSelect 
                    placeholder= {placeholder}
                    items={sex}
                    textInputProps={{style: styles.pickerTextInput}}
                    onValueChange={petSex => this.setState({ ...this.state, petSex })}
                    value={this.state.petSex}
                    useNativeAndroidPickerStyle={false}
                  />
                </View>
              </View>
              <View style={styles.inputContainer2}>
                <Text style={styles.text}>Bithday</Text>
                    <DatePicker
                      customStyles={datePickerCustomStyles}
                      style={styles.datePickerStyle}
                      date={this.state.petBirthday}
                      mode="date"
                      format="MM-DD-YYYY"
                      minDate="01-01-2000"
                      maxDate={new Date()}
                      confirmBtnText="Confirm"
                      cancelBtnText="Cancel"
                      onDateChange={(date) => {this.setState({ ...this.state, petBirthday: date})}}
                    />
              </View>
            </View>
            <Button title="Next" style={styles.nextBtn} onPress={this.handleNext}></Button>
        </View>
      </TouchableWithoutFeedback>
    )
  }
}

const mapStateToProps = (state) => {
  return ({
    petsData: state.petsData
  })
}

const mapDispatchToProps = (dispatch) => bindActionCreators({ saveBreed, saveSex, saveBirthday }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps )(PetInfoScreen)

