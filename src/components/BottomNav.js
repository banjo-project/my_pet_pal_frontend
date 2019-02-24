import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { MaterialIcons, FontAwesome } from '@expo/vector-icons';
import { withNavigation } from 'react-navigation';

class bottomNav extends React.Component {

constructor(props) {
  super(props);
  this.state = {
  };
}

render() {
    return (
        <View style={{flex: 1, flexDirection: 'row'}}>
            <TouchableOpacity style={styles.bottomNavItem}>
              <MaterialIcons name="home" size={40} color="white" />
              <Text style={styles.text}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.bottomNavItem} onPress={()=>this.props.navigation.navigate('ManageHumanPage')}>
              <MaterialIcons name="face" size={40} color="white"/>
              <Text style={styles.text}>Humans</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.bottomNavItem} onPress={()=>this.props.navigation.navigate('DailySchedulePage')}>
              <FontAwesome name="calendar" size={40} color="white" />
              <Text style={styles.text}>Calendar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.bottomNavItem}>
              <FontAwesome name="heartbeat" size={40} color="white" />
              <Text style={styles.text}>Stats</Text>
            </TouchableOpacity>
        </View>
    )
  }
}

export default withNavigation(bottomNav)

const styles = StyleSheet.create({
    bottomNavItem: {
      width: '25%',
      justifyContent:'center',
      alignItems:'center',
    },
    text:{
      color: "white"
    }
});
  