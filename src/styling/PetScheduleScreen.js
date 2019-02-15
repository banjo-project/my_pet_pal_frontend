import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    mainContainer: {
      flex: 1,
      justifyContent: 'center',
    },
    ballContainer: {
      flexDirection: 'row',
      height: 70,
      position: 'absolute',
    },
    listOuterContainer: {
      alignItems: 'center', 
      justifyContent: 'center', 
      marginTop: 100,
      marginBottom: 20, 
    },
    listContainer: {
      backgroundColor: 'white', 
      width: 300, 
      padding: '5%', 
      alignItems: 'center', 
      borderRadius: 20
    },
    contentContainer: {
      justifyContent: 'center',
      flexDirection: 'column',
      padding: '5%',
      borderStyle: 'solid',
      borderColor: 'white',
      width: "70%",
    },
    contentBox: {
      flexDirection: 'row',
    },
    dropZone: {
      height: '85%',
      backgroundColor: "#00334d",
      justifyContent: 'center',
    },
    text: {
      marginTop: '30%',
      marginLeft: 5,
      marginRight: 5,
      textAlign: "center",
      color: "#fff",
      fontSize: 20,
      fontWeight: "bold"
    },
    listTitle: {
      paddingBottom: '5%', 
      marginTop: '5%',
      marginLeft: 10,
      fontSize: 15, 
      fontWeight: 'bold'
    },
    listText: {
      paddingBottom: '10%', 
      marginTop: '5%',
      fontSize: 17, 
      color: 'red',
      fontWeight: 'bold'
    },
    scheduleText: {
      padding: '5%', 
      fontSize: 15, 
      fontWeight:'bold'
    },
    scheduleText2: {
      padding: '5%', 
      fontSize: 13, 
    },
    contentImg: {
      width: 30, 
      height: 30, 
      marginTop: 10
    },
    btnStyle:{
      alignItems: 'center', 
      justifyContent: 'center', 
    },
    nextBtn: {
      marginTop: 20,
      width: 130,
      justifyContent: 'space-between',
    },
    textInput: {
      fontSize: 15,
      paddingLeft: '3%', 
      fontWeight:'bold',
      width: 55,
    },
    container: {
      backgroundColor: 'gray',
      alignItems: 'center', 
      justifyContent: 'center', 
     },
     modalView: {
      backgroundColor: 'white',
      marginTop: 100,
      margin: 40,
      alignItems: 'center', 
      justifyContent: 'center', 
      padding: 20,
     },
     closeText: {
       color: 'black',
       borderRadius: 20,
       width: 32,
       padding: 6,
       alignSelf: 'flex-end',
       textAlign: 'center',
       borderWidth: 1,
       borderColor:'white'
      },
      cancelContainer: {
        position: 'absolute',
        marginLeft: '100%',
        right: 0,
        left: 0,
        top: 0,
        bottom: 0,
  
      },
      cancelImg: {
        right: 0,
        left: 0,
        top: 10,
        bottom: 0,
        width: 25,
        height: 25
      }
})

export default styles