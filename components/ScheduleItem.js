import React from "react";
import {
    StyleSheet,
    View,
    TouchableOpacity,
    Text,
    Image,
    Button
} from "react-native";

const ScheduleItem = props => {
    return props.schedule.map( a => {
        return (
            <View style={{flexDirection: 'row'}}>
                <Image source={require('../assets/dog.png')} style={{width: 30, height: 30, marginTop: 10}}/> 
                <Text style={{padding: '5%', fontSize: 15}}>walk</Text>
            </View>
        )
    })
}


export default ScheduleItem