import { SAVE_IMAGE, 
        SAVE_NAME, 
        SAVE_BREED, 
        SAVE_SEX, 
        SAVE_BIRTHDAY, 
        SAVE_EVENT,
        OPEN_SCHEDULE_CHECKER,
        SELECTED_SCHEDULE  } from '../action/pets'

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
        case SAVE_EVENT:
          return {
            ...state,
            petEvent: payload
        }
        case OPEN_SCHEDULE_CHECKER:
          return {
            ...state,
            openScheduleChecker: payload
          }
        case SELECTED_SCHEDULE:
          return {
            ...state,
            selectedSchedule: payload
          }
        default:
          return state
    }
}