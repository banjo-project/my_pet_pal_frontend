import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Icon } from 'react-native';
import NavigationBar from 'react-native-navbar';
import { MaterialIcons, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
export default class App extends React.Component {

  leftButtonConfig = {
    title: 'Next',
    handler: () => alert('hello!'),
  };
  
  rightButtonConfig = {
    title: 'Next',
    handler: () => alert('hello!'),
  };

  titleConfig = {
    title: 'Banjo',
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.topNavContainer}>
          <NavigationBar 
            title={this.titleConfig}
            leftButton={this.leftButtonConfig}
            rightButton={this.rightButtonConfig} />
        </View>
        <View style={styles.contentsContainer}>
          <TouchableOpacity style={styles.roundImage}>
          <MaterialCommunityIcons name="dog" size={60}/>
          <Text style={styles.roundImageText}>+ Pet Image</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.text}>Add Pet</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.bottomNavContainer}>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <View style={styles.bottomNavItem} >
              <MaterialIcons name="face" size={40} />
              <Text>Humans</Text>
            </View>
            <View style={styles.bottomNavItem}>
              <FontAwesome name="calendar" size={40} />
              <Text>Calendar</Text>
            </View>
            <View style={styles.bottomNavItem}>
              <FontAwesome name="heartbeat" size={40} />
              <Text>Stats</Text>
            </View>
            <View style={styles.bottomNavItem}>
              <MaterialIcons name="settings-applications" size={40} />
              <Text>Settings</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
  },
  topNavContainer: {
    padding: 3,
    fontSize: 30,
    justifyContent:'center',
    height: '15%',
  },
  bottomNavContainer: {
    padding: 3,
    fontSize: 30,
    justifyContent:'center',
    height: '15%',
  },
  contentsContainer: {
    height: '70%',
    alignItems:'center',
    justifyContent:'center',
  },
  roundImage: {
    alignItems: 'center',
    borderWidth:1,
    borderColor:'rgba(0,0,0,0.8)',
    width:200,
    height:200,
    borderRadius:100,
    alignItems:'center',
    justifyContent:'center',
  },
  roundImageText:{
    justifyContent:'center',
    fontSize: 20
  },
  text: {
    marginTop: 20,
    fontSize: 20,
  },
  bottomNavItem: {
    width: '25%',
    justifyContent:'center',
    alignItems:'center',
  }
});
