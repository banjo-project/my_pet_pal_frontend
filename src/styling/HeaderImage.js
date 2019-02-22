import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    headerContainer: {
        flex: 1, 
        flexDirection: 'row', 
        alignItems:'center',
        justifyContent:'center',
        padding:3,
    },
    headerText: {
        marginTop: 3,
        alignItems:'center',
        marginLeft: 20,
        color: '#485786',
        justifyContent:'center'
    },
    headerIcon:{
        marginTop: 25,
        width: 40,
        height: 40
    },
    headerText2: {
        marginTop: 10,
        alignItems:'center',
        justifyContent:'center'
    },
    image: {
        resizeMode: "stretch",
        height: 60,
        width: 60,
        borderRadius: 30
    },
    roundImage: {
        height: 62,
        width: 62,
        borderRadius: 31,
        color: '#485786',
    },
    roundImage2: {
        height: 62,
        width: 62,
        borderRadius: 31,
        borderWidth:1,
        borderColor: '#768cc2',
        alignItems:'center',
        justifyContent:'center',
    }
})

export default styles
  