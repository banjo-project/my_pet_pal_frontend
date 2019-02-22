import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
    },
    container2: {
      marginTop: 120,
      justifyContent:'center',
      alignItems:'center',
    },
    textContainer:{
      marginTop: '5%',
      justifyContent:'center',
      alignItems:'center',
    },
    roundImage: {
      backgroundColor: '#CBE7ED',
      width:200,
      height:200,
      borderRadius:100,
      justifyContent:'center',
    },
    dogImageContainer:{
      flexDirection: "column", 
      alignItems:'center', 
      justifyContent:'center',
    },
    cameraContainer:{
      flexDirection: 'column', 
      justifyContent:'center', 
      alignItems:'center', 
      padding: 10
    },
    image: {
      resizeMode: "stretch",
      height: 200,
      width: 200,
      borderRadius: 100,
      alignItems:'center',
      justifyContent:'center',
    },
    cameraImage: {
      width:40, 
      height:40, 
      marginBottom: '2%'
    },
    roundImageText:{
      justifyContent:'center',
      fontSize: 20,
      color: "#E45A42"
    },
    btn: {
      marginTop: 25,
      width: 160
    }
  });

export default styles