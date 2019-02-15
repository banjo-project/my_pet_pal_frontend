import React, { Component } from 'react'
import store from './store'
import { Provider } from 'react-redux'
import Navigator from './navigator'

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Navigator />
      </Provider>
    )
  }
}