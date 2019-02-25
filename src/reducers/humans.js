import { OPEN_HUMAN_IMAGE, 
        CLOSE_HUMAN_IMAGE,
         SAVE_HUMAN_IMAGE,
         SAVE_HUMAN_NAME,
         GET_PET_USER_INFO
        } from '../action/humans'

export const humansData = (state={}, {type, payload}) => {
    switch(type){
        case OPEN_HUMAN_IMAGE:
          return {
            ...state,
            humanImageOpen: payload
          }
        case CLOSE_HUMAN_IMAGE:
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
        case GET_PET_USER_INFO:
          return {
            ...state,
            petUserInfo: payload
          }
        default:
          return state
    }
}
