import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: '#53B6C4',
      alignItems:'center',
      paddingLeft: '10%',
      paddingRight: '10%',
    },
    inputContainer: {
      alignItems:'center',
      padding: '1%',
      color:'#CBE7ED'
    },
    pickerContainer: {
      flex: 2
    },
    inputContainer2: {
      flexDirection: "row",
      alignItems:'center',
      color:'#CBE7ED',
      justifyContent: 'center',
      paddingTop: '5%',
    },
    titleText: {
      marginTop: 30,
      marginBottom: 20,
      fontSize: 20,
      fontWeight: 'bold',
      color:'white',
      alignItems:'center',
      justifyContent: "center",
    },
    text: {
      flex: 1,
      marginTop: 15,
      fontSize: 20,
      color: 'white'
    },
    textInput: {
      height: 40, 
      fontSize: 18,
      fontWeight: 'bold',
      flex: 2,
      textAlign: 'center',
      borderColor: '#CBE7ED', 
      color: '#CBE7ED',
      borderWidth: 1
    },
    pickerTextInput: {
      height: 40, 
      fontSize: 18,
      textAlign: 'center',
      fontWeight: 'bold',
      borderColor: '#CBE7ED', 
      color: '#CBE7ED',
      borderWidth: 1
    },
    datePickerStyle: {
      flex: 2,
      height: 20,
      marginBottom: '5%',
    },
    nextBtn: {
      marginTop: 40,
      width: 150,
    }
  });

export default styles