import { OPEN_HUMAN_IMAGE, 
         SAVE_HUMAN_IMAGE,
         SAVE_HUMAN_NAME,
        } from '../action/humans'

export const humansData = (state={}, {type, payload}) => {
    switch(type){
        case OPEN_HUMAN_IMAGE:
          return {
            ...state,
            humanImageOpen: payload
          }
        case SAVE_HUMAN_IMAGE:
          return {
            ...state,
            humanImage: payload
          }
        case SAVE_HUMAN_NAME:
          return {
            ...state,
            humanName: payload
          }
        default:
          return state
    }
}
