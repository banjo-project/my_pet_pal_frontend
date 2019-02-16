import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: '#fff',
    },
    inputContainer: {
      flexDirection: 'row',
      justifyContent:'space-evenly',
      margin: 10,
      padding: 10,
      alignItems:'flex-start',
    },
    inputTitleContainer: {
      margin: 5,
    },
    inputContentContainer: {
      margin: 5,
    },
    bottomNavContainer: {
      padding: 3,
      fontSize: 30,
      justifyContent:'center',
      height: '13%',
    },
    contentsContainer: {
      height: '85%',
      alignItems:'center',
      marginTop: 20
    },
    btnContainer: {
        flexDirection: 'column',
        margin: 10
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
    image: {
      resizeMode: "stretch",
      height: 200,
      width: 200,
      borderRadius: 100
  },
    roundImageText:{
      justifyContent:'center',
      fontSize: 17
    },
    text: {
      marginTop: 20,
      fontSize: 15,
    },
    smTextInput: {
      padding: 5,
      margin: 5,
      height: 30, 
      fontSize: 15,
      width: 120,
      borderColor: 'gray', 
      borderWidth: 1
    },
    mdTextInput: {
        padding: 5,
        margin: 5,
        height: 30, 
        fontSize: 15,
        width: 160,
        borderColor: 'gray', 
        borderWidth: 1
    },
    lgTextInput: {
        padding: 5,
        margin: 5,
        height: 30, 
        fontSize: 15,
        width: 200,
        borderColor: 'gray', 
        borderWidth: 1
    },
    nextBtn: {
      width: 150,
    }
  })
  
  export default styles  