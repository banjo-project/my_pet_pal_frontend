import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { MaterialIcons, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';

export default class bottomNav extends React.Component {

render() {
    return (
        <View style={{flex: 1, flexDirection: 'row'}}>
            <TouchableOpacity style={styles.bottomNavItem} >
              <MaterialIcons name="face" size={40} />
              <Text>Humans</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.bottomNavItem}>
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

const styles = StyleSheet.create({
    bottomNavItem: {
      width: '25%',
      justifyContent:'center',
      alignItems:'center',
    }
});
  