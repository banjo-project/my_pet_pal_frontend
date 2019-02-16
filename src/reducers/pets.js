import { SAVE_IMAGE, SAVE_NAME, SAVE_BREED, SAVE_SEX, SAVE_BIRTHDAY  } from '../action/pets'

export const petsData = (state = {}, {type, payload}) => {
    switch(type){
        case SAVE_IMAGE:
          return {
            ...state,
            petImage: payload
          }
        case SAVE_NAME:
          return {
            ...state,
            petName: payload
          }
        case SAVE_BREED:
          return {
            ...state,
            petBreed: payload
          }
        case SAVE_SEX:
          return {
            ...state,
            petSex: payload
          }
        case SAVE_BIRTHDAY:
          return {
            ...state,
            petBirthday: payload
          }
        default:
          return state
    }
}