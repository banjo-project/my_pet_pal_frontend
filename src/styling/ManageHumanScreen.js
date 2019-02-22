import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems:'center',
      backgroundColor: '#53B6C4',
    },
    container2: {
      marginTop: 20,
      justifyContent:'center',
      alignItems:'center',
    },
    inputContainer: {
      justifyContent:'center',
    },
    profileContainer: {
        marginTop: "4%",
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
      height: '84%',
      alignItems:'center',
      marginTop: 20
    },
    roundImage: {
        alignItems: 'center',
        backgroundColor: '#CBE7ED',
        width:160,
        height:160,
        borderRadius:80,
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
      marginTop: 20,
      color: "#E45A42"
    },
    text: {
      marginTop: 20,
      fontSize: 17,
      color: 'white'
    },
    profileText1:{
      marginTop: 7,
      fontSize: 23,
      color: 'white',
      fontWeight: 'bold',
      alignItems: 'center',
      justifyContent:'center',
    },
    profileText2:{
      marginTop: 7,
      fontSize: 17,
      color: 'white'
    },
    profileText:{
      marginTop: 7,
      fontSize: 17,
      color: 'white'
     },
     profileText3:{
      fontSize: 17,
      color: 'white'
     },
    textInput1: {
      margin: 7,
      height: 30, 
      fontSize: 17,
      width: 150,
      borderColor: '#CBE7ED', 
      color: "white",
      borderWidth: 2,
      padding: "1%"
    },
    textInput2: {
        margin: 7,
        marginBottom: 10,
        height: 30, 
        fontSize: 17,
        width: 230,
        borderColor: '#CBE7ED', 
        color: "white",
        borderWidth: 2,
        padding: "1%"
      },
    
    btnContainer:{
        width: 200,
        margin: "3%"
    },
    btn:{
        margin: "3%",
        width: 200
    },
    nextBtn: {
      marginTop: 30,
      width: 150,
      alignItems:'center',
      justifyContent:'center',
    }
  })
  
  export default styles  