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
            <View>
                <Text style={{padding: '5%', fontSize: 15}}>{a}</Text>
            </View>
        )
    })
}


export default ScheduleItem