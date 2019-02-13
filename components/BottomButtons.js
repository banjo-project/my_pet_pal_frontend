import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, } from 'react-native';


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
                    <Image source={this.props.activityToImageMap[a]} style={styles.image}/> 
                    <Text style={styles.btnText}>{a.toUpperCase()}</Text>
                </TouchableOpacity>
                )
            })}
            </View> 
            <View style={styles.row2}>
            {activities2.map( a => {
                return (
                <TouchableOpacity style={styles.circle} onPress={()=>this.props.addItem(a)}>
                    <Image source={this.props.activityToImageMap[a]} style={styles.image}/> 
                    <Text style={styles.btnText}>{a.toUpperCase()}</Text>
                </TouchableOpacity>
                )
            })}
            </View> 
        </View>
    ) 
}
}

const styles = StyleSheet.create({
    row: {
        paddingTop: '3%',
        paddingRight: '3%',
        paddingLeft: '3%',
        flexDirection: "row",
        justifyContent: 'space-around',
      },  
      row2: {
        padding: '3%',
        flexDirection: "row",
        marginBottom: '17%',
        justifyContent: 'space-around',
      },
      circle: {
        backgroundColor: "skyblue",
        alignItems: 'center', 
        justifyContent: 'center',
        width: 30 * 2.5,
        height: 30 * 2,
        borderRadius: 30
      },
      image: {
        width: 30, 
        height: 30, 
        marginTop: 10
      },
      btnText: {
        fontSize: 10,
      },
  });

