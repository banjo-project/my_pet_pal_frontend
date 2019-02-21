import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: '#fff',
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
        borderWidth:1,
        borderColor:'rgba(0,0,0,0.8)',
        width:120,
        height:120,
        borderRadius:60,
        justifyContent:'center',
    },
    image: {
        resizeMode: "stretch",
        height: 120,
        width: 120,
        borderRadius: 60
    },
    image2: {
        height: 35,
        width: 35,
        marginTop: "10%"
    },
    roundImageText:{
      justifyContent:'center',
      fontSize: 13
    },
    text: {
      marginTop: 20,
      fontSize: 15,
      marginLeft: 10,
    },
    textInput1: {
      alignItems:'center',
      justifyContent:'center',
      margin: 10,
      height: 30, 
      fontSize: 20,
      width: 230,
      borderColor: 'gray', 
      borderWidth: 1
    },
    textInput2: {
        alignItems:'center',
        justifyContent:'center',
        margin: 10,
        height: 30, 
        fontSize: 20,
        width: 180,
        borderColor: 'gray', 
        borderWidth: 1
    },
    nextBtn: {
      marginTop: 30,
      width: 150,
      alignItems:'center',
      justifyContent:'center',
    }
  })
  
  export default styles  