import { SAVE_IMAGE, 
        SAVE_NAME, 
        SAVE_BREED, 
        SAVE_SEX, 
        SAVE_BIRTHDAY, 
        SAVE_EVENT,
        SELECTED_SCHEDULE,
        SAVE_EVENT_IMAGE,
        GET_EVENTS,
        GET_COMPLETED_EVENTS,
        POST_COMPLETED_EVENTS  } from '../action/pets'

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
        case SELECTED_SCHEDULE:
          return {
            ...state,
            selectedSchedule: payload
          }
        case SAVE_EVENT_IMAGE:
          return {
            ...state,
            eventImage: payload
          }
        case GET_EVENTS:
          return {
            ...state,
            events: payload
          }
        case GET_COMPLETED_EVENTS:
          return {
            ...state,
            completed_events: payload
          }
        // case POST_COMPLETED_EVENTS:
        //   return {
        //     ...state,
        //     completed_events: payload
        //   }

        default:
          return state
    }
}