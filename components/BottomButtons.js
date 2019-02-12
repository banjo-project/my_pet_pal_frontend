import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, } from 'react-native';

export default class BottomButtons extends React.Component {
constructor(props) {
    super(props)
    this.state = {
    }
}
render() {
    return (
        <View>
        <View style={styles.row}>
          <TouchableOpacity style={styles.circle} onPress={this.props.addItem}>
            <Image source={require('../assets/walk.png')} style={styles.image}/> 
            <Text>Walk</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.circle}>
            <Image source={require('../assets/eat.png')} style={styles.image}/> 
            <Text>Eat</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.circle}>
            <Image source={require('../assets/meds.png')} style={styles.image}/> 
            <Text>Meds</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.circle}>
            <Image source={require('../assets/treats.png')} style={styles.image}/> 
            <Text>Treats</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row2}>
          <TouchableOpacity style={styles.circle}>
            <Image source={require('../assets/exercise.png')} style={styles.image}/> 
            <Text>Exercise</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.circle}>
            <Image source={require('../assets/groom.png')} style={styles.image}/> 
            <Text>Groom</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.circle}>
            <Image source={require('../assets/crate.png')} style={styles.image}/> 
            <Text>Crate</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.circle}>
            <Image source={require('../assets/potty.png')} style={styles.image}/> 
            <Text>Potty</Text>
          </TouchableOpacity>
        </View> 
        </View>
    )
}
}

const styles = StyleSheet.create({
    row: {
      paddingTop: '5%',
      paddingRight: '5%',
      paddingLeft: '5%',
      flexDirection: "row",
      justifyContent: 'space-around',
    },  
    row2: {
      padding: '5%',
      flexDirection: "row",
      marginBottom: '20%',
      justifyContent: 'space-around',
    },
    circle: {
      backgroundColor: "skyblue",
      alignItems: 'center', justifyContent: 'center',
      width: 30 * 2.5,
      height: 30 * 2,
      borderRadius: 30
    },
    image: {
      width: 30, 
      height: 30, 
      marginTop: 10
    }
  });

