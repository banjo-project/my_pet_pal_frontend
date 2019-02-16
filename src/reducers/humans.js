import { OPEN_HUMAN_IMAGE, 
         SAVE_HUMAN_IMAGE,
         SAVE_HUMAN_NAME,
         SAVE_HUMAN_TITLE,
         SAVE_HUMAN_EMAIL,
         SAVE_HUMAN_PW,
         SAVE_HUMAN_PHONE
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
        case SAVE_HUMAN_TITLE:
          return {
            ...state,
            humanTitle: payload
          }
        case SAVE_HUMAN_EMAIL:
          return {
            ...state,
            humanEmail: payload
          }
        case SAVE_HUMAN_PW:
          return {
            ...state,
            humanPassword: payload
          }
        case SAVE_HUMAN_PHONE:
          return {
            ...state,
            humanPhone: payload
          }
        default:
          return state
    }
}
