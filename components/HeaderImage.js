import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

export default class HeaderImage extends React.Component {

    render() {
        return (
            <View style={styles.headerCovntainer}>
                {/* <View style={styles.roundImage}> 
                <Image style={styles.image} source={require('../assets/Screenshot_20170626-212646.png')}/>
                <Text style={styles.headerText}>  BANJO</Text>
                </View> */}

                <View style={styles.roundImage2}> 
                {/* <Image source={require('../assets/dog.png')} style={styles.headerIcon}/>  */}
                <MaterialCommunityIcons  name="dog" size={50} style={styles.headerIcon} />
                <Text style={styles.headerText2}> BANJO</Text>
                </View>
            </View>
        )
    }
}

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
        justifyContent:'center'
    },
    headerIcon:{
        marginTop: 20,
    },
    headerText2: {
        marginTop: 15,
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
    },
    roundImage2: {
        height: 62,
        width: 62,
        borderRadius: 31,
        borderWidth:1,
        alignItems:'center',
        justifyContent:'center',
    }
})
  