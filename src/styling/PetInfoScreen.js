import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: '#53B6C4',
      padding: 10,
      alignItems:'center',
    },
    inputContainer: {
      width: '60%',
      alignItems:'center',
      padding: '1%',
      color:'#CBE7ED'
    },
    inputContainer2: {
      flexDirection: "row",
      alignItems:'center',
      color:'#CBE7ED',
      justifyContent: 'center',
      padding: '1%',
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
      marginTop: 15,
      fontSize: 20,
      color: 'white'
    },
    textInput: {
      margin: 5,
      height: 40, 
      padding: 10,
      fontSize: 18,
      fontWeight: 'bold',
      width: 200,
      borderColor: '#CBE7ED', 
      color: '#CBE7ED',
      borderWidth: 1
    },
    datePickerStyle: {
      width: 200, 
      height: 20,
      marginTop: 10,
      marginBottom: '5%',
    },
    nextBtn: {
      marginTop: 40,
      width: 150,
    }
  });

export default styles