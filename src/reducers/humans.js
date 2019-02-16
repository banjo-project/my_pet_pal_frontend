import { OPEN_HUMAN_IMAGE, SAVE_HUMAN_IMAGE } from '../action/humans'

export const humansData = (state='', {type, payload}) => {
    switch(type){
        case OPEN_HUMAN_IMAGE:
          return  payload
        case SAVE_HUMAN_IMAGE:
          return payload
        default:
          return state
    }
}
