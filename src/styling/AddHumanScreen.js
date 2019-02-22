import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: '#53B6C4',
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
      backgroundColor: '#CBE7ED',
      width:200,
      height:200,
      borderRadius:100,
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
      fontSize: 15,
      color: '#E45A42',
      marginTop: 20,
    },
    text: {
      marginTop: 20,
      fontSize: 15,
      color: 'white'
    },
    smTextInput: {
      padding: 5,
      margin: 5,
      height: 30, 
      fontSize: 15,
      color:'white',
      width: 120,
      borderColor: '#CBE7ED', 
      borderWidth: 2
    },
    mdTextInput: {
        padding: 5,
        margin: 5,
        height: 30, 
        fontSize: 15,
        color:'white',
        width: 160,
        borderColor: '#CBE7ED', 
        borderWidth: 2
    },
    lgTextInput: {
        padding: 5,
        margin: 5,
        height: 30, 
        fontSize: 15,
        color:'white',
        width: 200,
        borderColor: '#CBE7ED', 
        borderWidth: 2
    },
    nextBtn: {
      width: 150,
      marginTop: 10,
    }
  })
  
  export default styles  