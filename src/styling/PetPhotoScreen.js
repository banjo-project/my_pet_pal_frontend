import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: '#fff',
  
    },
    container2: {
      marginTop: '50%',
      justifyContent:'center',
      alignItems:'center',
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
    dogImageContainer:{
      flexDirection: "column", 
      alignItems:'center', 
      justifyContent:'center',
    },
    image: {
      resizeMode: "stretch",
      height: 200,
      width: 200,
      borderRadius: 100,
      alignItems:'center',
      justifyContent:'center',
    },
    roundImageText:{
      justifyContent:'center',
      fontSize: 20
    },
    textContainer:{
        marginTop: '5%',
    }
  });

export default styles