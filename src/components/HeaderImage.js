import React from 'react'
import styles from '../styling/HeaderImage'
import { StyleSheet, Text, View, Image, AsyncStorage } from 'react-native'

export default class HeaderImage extends React.Component {
    state = {
        image: null,
      };

    // async _getImageData () {
    //     let imageAddress = await AsyncStorage.getItem('imageData')
    // }

    render() {
        this._getImageData
        // let { image } = this.state;
        
        return (
            
            <View style={styles.headerCovntainer}>
                {image ? (
                    <View style={styles.roundImage}> 
                        <Image source={{ uri: image }} style={styles.image} />
                        <Text style={styles.headerText}>  BANJO</Text>
                    </View>) : 
                    <View style={styles.roundImage2}> 
                        <Image source={require('../../assets/dog.png')} style={styles.headerIcon}/> 
                        <Text style={styles.headerText2}> BANJO</Text>
                    </View> 
                }
            </View>
        )
    }
}

