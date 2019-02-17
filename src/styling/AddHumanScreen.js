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
      marginLeft: 10,
      marginRight: 10,
      paddingTop: 10,
      paddingRight: 10,
      paddingLeft: 10,
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
        margin: 5
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
      marginTop: 10,
    }
  })
  
  export default styles  