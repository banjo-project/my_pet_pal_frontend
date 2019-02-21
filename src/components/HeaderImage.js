import React from 'react'
import styles from '../styling/HeaderImage'
import { Text, View, Image } from 'react-native'
import { connect } from 'react-redux'

class HeaderImage extends React.Component {

    render() {
        const image = this.props.petsData.petImage
        const petName = this.props.petsData.petName

        return (  
            <View style={styles.headerCovntainer}>
                {image ? (
                    <View style={styles.roundImage}> 
                        <Image source={{ uri: image }} style={styles.image} />
                        <Text style={styles.headerText}>{petName}</Text>
                    </View>) : 
                    <View style={styles.roundImage2}> 
                        <Image source={require('../../assets/dog.png')} style={styles.headerIcon}/> 
                        <Text style={styles.headerText2}>{petName}</Text>
                    </View> 
                }
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return ({
      petsData: state.petsData,
    })
  }  
  
export default connect(mapStateToProps, null)(HeaderImage)
  
  