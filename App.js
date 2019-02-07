import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Icon } from 'react-native';
import NavigationBar from 'react-native-navbar';

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
      <View style={styles.navContainer}>
        <NavigationBar 
          title={this.titleConfig}
          leftButton={this.leftButtonConfig}
          rightButton={this.rightButtonConfig} />
      </View>
      <View style={styles.contentsContainer}>
        <TouchableOpacity style={styles.roundImage}>
        <Text style={styles.roundImageText}>Add Pet Image</Text>
    {/* <Icon name={"chevron-right"}  size={30} color="#01a699" /> */}
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.text}>Add Pet</Text>
        </TouchableOpacity>
      </View>
      
      </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentsContainer: {
    alignItems:'center',
    justifyContent:'center',
  },
  navContainer: {
    marginTop: 20,
    padding: 3,
  },
  roundImage: {
    marginTop: 30,
    borderWidth:1,
    borderColor:'rgba(0,0,0,0.8)',
    width:200,
    height:200,
    backgroundColor:'#fff',
    borderRadius:100
  },
  roundImageText:{
    marginTop: 80,
    marginLeft: 35,
    fontSize: 20
  },
  text: {
    marginTop: 20,
    fontSize: 20,
  }
});
