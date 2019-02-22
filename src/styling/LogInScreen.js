import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: '#53B6C4',
    },
    inputContainer: {
      justifyContent:'center',
      alignItems:'center',
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
    roundImage: {
        alignItems: 'center',
        backgroundColor: '#CBE7ED',
        width:200,
        height:200,
        borderRadius:100,
        justifyContent:'center',
    },
    image: {
        resizeMode: "stretch",
        height: 200,
        width: 200,
        borderRadius: 100
    },
    image2: {
        height: 40,
        width: 40,
    },
    roundImageText:{
      justifyContent:'center',
      fontSize: 13
    },
    text: {
      marginTop: 20,
      fontSize: 17,
      color: 'white'
    },
    text2: {
      marginTop: 7,
      fontSize: 17,
      color: 'white'
    },
    textInput1: {
      alignItems:'center',
      justifyContent:'center',
      margin: 10,
      height: 30, 
      fontSize: 15,
      width: 230,
      borderColor: '#CBE7ED', 
      borderWidth: 2
    },
    textInput2: {
        alignItems:'center',
        justifyContent:'center',
        margin: 10,
        height: 30, 
        fontSize: 15,
        width: 180,
        borderColor: '#CBE7ED', 
        borderWidth: 2
    },
    nextBtn: {
      marginTop: 30,
      width: 150,
      alignItems:'center',
      justifyContent:'center',
    }
  })
  
  export default styles  