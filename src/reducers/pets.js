import { SAVE_IMAGE } from '../action/pets'

export const saveImage = (state = '', {type, payload}) => {
    switch(type){
        case SAVE_IMAGE:
          return  payload
        default:
          return state
    }
}