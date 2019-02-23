import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({ 
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#53B6C4',
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
        height: '100%',
    },
    completedEventContainer: {
        height: '35%',
    },
    completedTitleContainer:{
        alignItems:'center',
        justifyContent:'center',
        padding: "2%",
        marginBottom: "2%"
    },
    timeContainer2:{
        width: '100%',
        justifyContent:'center',
        alignItems:'center',
    },
    container2:{
        width: '100%', 
        justifyContent:'center',
        alignItems:'center',
    },
    center: {
        alignItems: 'center',
      },
    showCompletedContainer: {
        width: '100%',
        height: '15%',
        marginBottom: '1%',
        justifyContent:'center',
        alignItems:'center',
    },
    eventContainer: {
        alignItems:'center',
        justifyContent:'center',
        height: '48%',
        margin: '1%'
    },
    oneEventContainer:{
        flexDirection: 'row',
        justifyContent:'center',
        alignItems:'center',
        paddingLeft: '3%',
        paddingRight: '3%',
        paddingBottom: "2%"
    },
    headTitleContainer:{
        flexDirection: 'column',
        marginLeft: "5%",
        marginBottom: "2%"
    },
    bottomNavContainer: {
        padding: 3,
        fontSize: 30,
        justifyContent:'center',
        height: '13%',
    },
    iconContainer:{
        width: "15%",
        height:50,
        borderRadius:25,
        backgroundColor: 'white',
        borderColor: 'white',
        borderWidth: 2,
        marginBottom: 5,
        marginLeft: 20,
        justifyContent:'center',
        alignItems:'center',
        borderWidth:0.7
    },
    photoImage:{
        width: "100%",
        height: "100%",
        borderRadius:25,
        resizeMode: "stretch",
    },
    eventTextContainer:{
        width: "15%",
        marginLeft: "2%"
    },
    timeContainer:{
        width: "45%",
    },
    commentContainer:{
        width: "45%",
    },
    btnContainer: {
        width: "10%",
        marginRight: 20,
    },
    iconImage:{
        width:30,
        height:30,
    },
    roundImage: {
        marginLeft:'7%',
        borderWidth:1,
        borderColor:'white',
        backgroundColor: 'white',
        width:60,
        height:60,
        borderRadius:20,
        justifyContent:'center',
        alignItems:'center',
      },
    headTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color:'#E45A42',
        marginTop:"5%"
    },
    headText: {
        marginTop: "5%",
        color:'#485786',
        fontWeight: 'bold',
        fontSize: 13,
    },
    completedTitleText:{
        fontSize: 20,
        fontWeight:'bold',
        color: '#E45A42'
    },
    timeText:{
        marginLeft: "45%",
    },
    typeText:{
        fontWeight: 'bold' 
    },
    image: {
        resizeMode: "stretch",
        height: 60,
        width: 60,
        borderRadius: 20
    },
    headerIcon:{
        marginTop: 25,
        width: 40,
        height: 40,
    },
    headerIcon:{
        width: 40,
        height: 40,
    },
    roundImage2:{
        height: 62,
        width: 62,
        borderRadius: 31,
        borderWidth:1,
        alignItems:'center',
        justifyContent:'center',
    }
})

export default styles  