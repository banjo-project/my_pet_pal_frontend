import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    row: {
        paddingTop: '3%',
        paddingRight: '3%',
        paddingLeft: '3%',
        flexDirection: "row",
        justifyContent: 'space-around',
      },  
      row2: {
        padding: '3%',
        flexDirection: "row",
        marginBottom: '17%',
        justifyContent: 'space-around',
      },
      circle: {
        backgroundColor: "#04bfd8",
        alignItems: 'center', 
        justifyContent: 'center',
        width: 30 * 2.5,
        height: 30 * 2,
        borderRadius: 30
      },
      image: {
        width: 30, 
        height: 30, 
        marginTop: 10
      },
      btnText: {
        fontSize: 10,
        color: 'white',
        fontWeight: "bold"
      },
  });

  export default styles