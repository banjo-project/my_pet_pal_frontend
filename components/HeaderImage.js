import React from 'react'
import { StyleSheet, Text, View, Image, AsyncStorage } from 'react-native'

export default class HeaderImage extends React.Component {
    state = {
        image: null,
      };

    async _getImageData () {
        let imageAddress = await AsyncStorage.getItem('imageData')

    }

    render() {
        this._getImageData
        let { image } = this.state;
        

        return (
            
            <View style={styles.headerCovntainer}>
                {image ? (
                    <View style={styles.roundImage}> 
                        <Image source={{ uri: image }} style={styles.image} />
                        <Text style={styles.headerText}>  BANJO</Text>
                    </View>) : 
                    <View style={styles.roundImage2}> 
                        <Image source={require('../assets/dog.png')} style={styles.headerIcon}/> 
                        <Text style={styles.headerText2}> BANJO</Text>
                    </View> 
                }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    headerContainer: {
        flex: 1, 
        flexDirection: 'row', 
        alignItems:'center',
        justifyContent:'center',
        padding:3,
    },
    headerText: {
        marginTop: 3,
        alignItems:'center',
        justifyContent:'center'
    },
    headerIcon:{
        marginTop: 25,
        width: 40,
        height: 40
    },
    headerText2: {
        marginTop: 10,
        alignItems:'center',
        justifyContent:'center'
    },
    image: {
        resizeMode: "stretch",
        height: 60,
        width: 60,
        borderRadius: 30
    },
    roundImage: {
        height: 62,
        width: 62,
        borderRadius: 31,
    },
    roundImage2: {
        height: 62,
        width: 62,
        borderRadius: 31,
        borderWidth:1,
        alignItems:'center',
        justifyContent:'center',
    }
})
  