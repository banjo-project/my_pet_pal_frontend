import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default class HeaderImage extends React.Component {

render() {
    return (
        <View style={styles.headerCovntainer}>
            <View style={styles.roundImage}> 
              {/* <MaterialCommunityIcons name="dog" size={30} /> */}
              <Image style={styles.image} source={require('../assets/Screenshot_20170626-212646.png')}/>
              <Text style={styles.headerText}>  BANJO</Text>
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
    image: {
        // resizeMode: 'contain',
        resizeMode: "stretch",
        height: 60,
        width: 60,
        borderRadius: 30
    },
    roundImage: {
        height: 62,
        width: 62,
        borderRadius: 31,
    }
});
  