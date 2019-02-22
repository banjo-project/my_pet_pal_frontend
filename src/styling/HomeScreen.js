import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: '#53B6C4',
      justifyContent:'center',
      alignItems:'center',
    },
    inputContainer: {
      justifyContent:'center',
      alignItems:'center',
      padding: "3%"
    },
    bottomNavContainer: {
      padding: 3,
      fontSize: 30,
      justifyContent:'center',
      height: '18%',
    },
    contentsContainer: {
      height: '65%',
      alignItems:'center',
      marginTop: 20
    },
    roundImage: {
      backgroundColor: '#CBE7ED',
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
      fontSize: 20,
      color: "#E45A42"
    },
    title:{
      fontSize: 30,
      fontWeight: 'bold',
      marginTop: 100,
      color: 'white'
    },
    text: {
      marginTop: 20,
      fontSize: 20,
      fontWeight: 'bold',
      color: '#F7D147'
    },
    text2: {
      marginTop: 50,
      fontSize: 15,
      fontWeight: 'bold',
      color: '#485786'
      
    },
    textInput: {
      margin: 10,
      height: 40, 
      fontSize: 20,
      width: 200,
      borderColor: 'white', 
      borderWidth: 1,
      color: 'white',
      padding: "2%"
    },
    nextBtn: {
      marginTop: 30,
      width: 150,
    }
  })
  
  export default styles  