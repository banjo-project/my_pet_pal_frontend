import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({ 
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#fff',
        alignItems:'center',
        justifyContent:'center',
    },
    contentsContainer: {
        height: '85%',
        width: '100%',
        alignItems:'center',
        marginTop: 20
      },
    headContainer: {
        height: '13%',
        width: '100%',
        flexDirection: 'row',
    },
    scheduleContainer:{
        width: '100%',
        height: '90%',
    },
    completedEventContainer: {
        height: '35%',
        marginBottom: "14%",
        margin: 5,
    },
    showCompletedContainer: {
        width: '100%',
        height: '10%',
    },
    eventContainer: {
        alignItems:'center',
        justifyContent:'center',
        height: '85%',
        width: '100%',
        margin: 5,
    },
    oneEventContainer:{
        flexDirection: 'row',
        justifyContent:'center',
        alignItems:'center',
        width: '100%',
        //borderWidth: 1,
        paddingLeft: '3%',
        paddingRight: '3%',
        paddingBottom: "2%"
    },
    headTitleContainer:{
        flexDirection: 'column',
        marginLeft: "5%"
    },
    bottomNavContainer: {
        padding: 3,
        fontSize: 30,
        justifyContent:'center',
        height: '13%',
    },
    iconContainer:{
        width:50,
        height:50,
        borderRadius:25,
        marginBottom: 5,
        justifyContent:'center',
        alignItems:'center',
        borderWidth:0.7
    },
    eventTextContainer:{
        width: "75%",
        marginLeft: "2%"
    },
    iconImage:{
        width:30,
        height:30,
    },
    roundImage: {
        marginLeft:'7%',
        borderWidth:1,
        borderColor:'rgba(0,0,0,0.8)',
        width:60,
        height:60,
        borderRadius:20,
      },
    headTitle: {
        fontSize: 20,
        marginTop:"3%"
    },
    headText: {
        marginTop: "5%",
        fontSize: 13,
    }
})

export default styles  