import React from 'react'
import styles from '../styling/HeaderImage'
import { Text, View, Image } from 'react-native'
import { connect } from 'react-redux'

class HeaderImage extends React.Component {

    render() {
        let image = this.props.petsData

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

const mapStateToProps = (state) => {
    return ({
      petsData: state.petsData,
    })
  }  
  
export default connect(mapStateToProps, null)(HeaderImage)
  
  