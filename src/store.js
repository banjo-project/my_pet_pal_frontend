import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { saveImage } from './reducers/pets'

const reducers = combineReducers({ saveImage })

export default store = createStore(reducers, applyMiddleware(logger, thunk))
