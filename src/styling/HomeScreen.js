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
      fontSize: 20
    },
    text: {
      marginTop: 20,
      fontSize: 20,
    },
    textInput: {
      margin: 10,
      height: 40, 
      fontSize: 30,
      width: 200,
      borderColor: 'gray', 
      borderWidth: 1
    },
    nextBtn: {
      marginTop: 30,
      width: 150,
    }
  })
  
  export default styles  