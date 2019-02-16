import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { petsData } from './reducers/pets'
import { humansData } from './reducers/humans'

const reducers = combineReducers({ petsData, humansData})

export default store = createStore(reducers, applyMiddleware(logger, thunk))
