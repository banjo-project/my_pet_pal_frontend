import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({ 
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#fff',
        alignItems:'center',
    },
    headerContainer: {
        margin: "3%",
        justifyContent:'center',
        alignItems:'center',
    },
    oneEventContainer:{
        flexDirection: 'row',
        justifyContent:'center',
        alignItems:'center',
        paddingLeft: '3%',
        paddingRight: '3%',
        paddingBottom: "2%",
    },
    iconContainer:{
        width: "15%",
        height:50,
        borderRadius:25,
        width:50,
        height:50,
        marginBottom: 5,
        marginLeft: 20,
        justifyContent:'center',
        alignItems:'center',
        borderWidth:0.7
    },
    inputContainer:{
        margin: "3%"
    },
    timePickerContainer:{
        justifyContent:'center',
        alignItems:'center',
    },
    eventTextContainer:{
        width: "20%",
        marginLeft: "2%"
    },
    timeContainer:{
        width: "45%",
    },
    timeContainer2:{
        justifyContent:'center',
        alignItems:'center',
    },
    roundImage: {
        borderWidth:1,
        borderColor:'rgba(0,0,0,0.8)',
        width:140,
        height:140,
        borderRadius:70,
        alignItems:'center',
        justifyContent:'center',
    },
    iconImage:{
        width:30,
        height:30,
    },
    text:{
        marginLeft: 10,
        fontSize: 15
    },
    textInput:{
        fontSize: 15,
        height: '25%',
        borderRadius:10,
        width: 250,
        borderWidth: 0.7,
        padding: "2%",
        margin : "5%"
    },
    timeText: {
        fontSize: 16,
        marginTop: "10%",
        marginBottom: "5%"
    },
    timeText2: {
        fontSize: 15,
        fontWeight: "bold",
        margin: "3%"
    },
    btn:{
        marginTop: 10,
        justifyContent:'center',
        marginLeft: 18,
        width: 250,

    },
    cancelContainer: {
        position: 'absolute',
        marginLeft: '100%',
        right: 0,
        left: -30,
        top: 0,
        bottom: 0,
      },
      cancelImg: {
        right: 0,
        left: 0,
        top: 10,
        bottom: 0,
        width: 30,
        height: 30
      },
      container2: {
        marginTop: 200,
        justifyContent:'center',
        alignItems:'center',
      },
      textContainer:{
        marginTop: '5%',
        justifyContent:'center',
        alignItems:'center',
      },
      roundImage: {
        borderWidth:1,
        borderColor:'rgba(0,0,0,0.8)',
        width:200,
        height:200,
        borderRadius:100,
        justifyContent:'center',
        alignItems:'center',
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
      image2: {
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
        fontSize: 20
      },
      btn2: {
        marginTop: 25,
        width: 160
      }
})

export default styles  