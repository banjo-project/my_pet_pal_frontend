import React, { Component } from "react";
import { StyleSheet, View, PanResponder, Animated } from "react-native";

export default class Draggable extends Component {
  constructor(props) {
    super(props);
    this.state = {
        showDraggable: true,
        dropAreaValues: null,
        pan: new Animated.ValueXY(),
        opacity: new Animated.Value(1)
    };
  }



  componentWillMount() {

    this._val = { x:0, y:0 }
    this.state.pan.addListener((value) => this._val = value);
    
    this.panResponder = PanResponder.create({
      
      onStartShouldSetPanResponder: (e, gesture) => true,

      onPanResponderGrant: (e, gesture) => this.copyItem(),

      onPanResponderMove: Animated.event([
        null, { dx: this.state.pan.x, dy: this.state.pan.y }
      ]),

      onPanResponderRelease: (e, gesture) => {
        if (this.isDropArea(gesture)) {
          Animated.timing(this.state.opacity, {
          toValue: 0,
          duration: 1000
          }).start(() =>
          this.setState({
              showDraggable: false
          })
        );
        } else {
          Animated.spring(this.state.pan, {
          toValue: { x: 0, y: 0 },
          friction: 5
          }).start();
        }
        this.props.addItem('hello')
        this.deleteItem
      }
    });
  }

  copyItem = () => {
    
  }

  deleteItem = () => {
    this.setState({showDraggable:false})
  }

  isDropArea(gesture) {
    return gesture.moveX < 700;
  }

  render() {
    const panStyle = {
      transform: this.state.pan.getTranslateTransform()
    }

    return (
        <Animated.View
          {...this.panResponder.panHandlers}
          style={[panStyle, styles.circle]}
        />
    );
  }
}

let CIRCLE_RADIUS = 30;
let styles = StyleSheet.create({
  circle: {
    backgroundColor: "skyblue",
    width: CIRCLE_RADIUS * 2.5,
    height: CIRCLE_RADIUS * 2,
    borderRadius: CIRCLE_RADIUS
  },
});
