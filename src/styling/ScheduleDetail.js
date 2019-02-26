import { StyleSheet } from 'react-native';
import { withTheme } from 'react-native-elements';

const styles = StyleSheet.create({ 
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#53B6C4',
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
        backgroundColor: 'white',
        borderColor: 'white',
        width:50,
        height:50,
        marginBottom: 5,
        marginLeft: 20,
        justifyContent:'center',
        alignItems:'center',
        borderWidth:0.7
    },
    inputContainer:{
        margin: "3%",
        color: 'white'
    },
    timePickerContainer:{
        justifyContent:'center',
        alignItems:'center',
    },
    eventTextContainer:{
        width: "25%",
        marginLeft: "2%",
        justifyContent:'center',
        alignItems:'center',
    },
    timeContainer:{
        width: "45%",
        justifyContent:'center',
        alignItems:'center',
    },
    timeContainer2:{
        justifyContent:'center',
        alignItems:'center',
    },
    completedContainer:{
      justifyContent:'center',
      alignItems:'center',
      flexDirection: 'row',
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
        color: 'white',
        marginLeft: 10,
        fontSize: 15,
        fontWeight: 'bold'
    },
    textInput:{
        fontSize: 15,
        height: '25%',
        color: 'white',
        borderColor: 'white',
        borderWidth: 2,
        borderRadius:10,
        width: 250,
        padding: "2%",
        marginBottom : "5%",
        marginLeft:'5%',
        marginRight:'5%',
        marginTop: '2%'
    },
    timeText: {
        fontSize: 16,
        fontWeight: 'bold',
        color:'#485786',
        marginTop: "10%",
        marginBottom: "5%"
    },
    timeText2: {
        fontSize: 16,
        color:'white',
        fontWeight: "bold",
        margin: "3%"
    },
    timeText3: {
      fontSize: 16,
      color:'#485786',
      fontWeight: "bold",
      margin: "3%"
    },
    timeText4: {
      fontSize: 16,
      color:'#E45A42',
      fontWeight: "bold",
      margin: "3%"
    },
    timeText5: {
      fontSize: 19,
      color:'white',
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
      cancelContainer2: {
        position: 'absolute',
        marginLeft: '100%',
        right: 0,
        left: -40,
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
        backgroundColor: 'white',
        borderColor:'white',
        width:200,
        height:200,
        borderRadius:100,
        justifyContent:'center',
        alignItems:'center',
      },
      dogImageContainer:{
        backgroundColor:'white',
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
        marginTop: 15,
        fontSize: 15,
        color:'#485786'
      },
      roundImageText2:{
        justifyContent:'center',
        marginTop: 15,
        fontSize: 18,
        fontWeight: 'bold',
        color:'white',

      },
      btn2: {
        marginTop: 25,
        width: 160
      }
})

export default styles  