import React from 'react';
import activityToImageMap from './imageMap'
import { Text, View, TouchableOpacity, Image } from 'react-native';
import styles from '../styling/BottomButton'

const activities1 = ['walk', 'eat', 'meds', 'treats']
const activities2 = ['exercise', 'groom', 'crate', 'potty']

export default class BottomButtons extends React.Component {

constructor(props) {
    super(props)
}

render() {
    return(
        <View>
            <View style={styles.row}>
            {activities1.map( a => {
                return (
                <TouchableOpacity style={styles.circle} onPress={()=>this.props.addItem(a)}>    
                    <Image source={activityToImageMap[a]} style={styles.image}/> 
                    <Text style={styles.btnText}>{a.toUpperCase()}</Text>
                </TouchableOpacity>
                )
            })}
            </View> 
            <View style={styles.row2}>
            {activities2.map( a => {
                return (
                <TouchableOpacity style={styles.circle} onPress={()=>this.props.addItem(a)}>
                    <Image source={activityToImageMap[a]} style={styles.image}/> 
                    <Text style={styles.btnText}>{a.toUpperCase()}</Text>
                </TouchableOpacity>
                )
            })}
            </View> 
        </View>
    ) 
}
}
