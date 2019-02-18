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
        width: "15%",
        marginLeft: "2%"
    },
    timeContainer:{
        width: "45%",
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
    iconImage:{
        width:30,
        height:30,
    },
    text:{
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
        fontSize: 15,
        marginTop: "10%",
        marginBottom: "5%"
    },
    btn:{
        marginTop: 10,
        justifyContent:'center',
        marginLeft: 10,
        width: 250,

    }

})

export default styles  