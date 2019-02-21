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
            <TouchableOpacity style={styles.bottomNavItem} onPress={()=>this.props.navigation.navigate('ManageHumanPage')}>
              <MaterialIcons name="face" size={40} />
              <Text>Humans</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.bottomNavItem} onPress={()=>this.props.navigation.navigate('DailySchedulePage')}>
              <FontAwesome name="calendar" size={40} />
              <Text>Calendar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.bottomNavItem}>
              <FontAwesome name="heartbeat" size={40} />
              <Text>Stats</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.bottomNavItem}>
              <MaterialIcons name="settings-applications" size={40} />
              <Text>Settings</Text>
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
    }
});
  