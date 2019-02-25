import axios from 'axios'
const BASE_URL = 'http://localhost:5000'

export const GET_EVENTS = 'GET_EVENTS'
export const getAllEvents = (petId) => {
    return dispatch => (
        axios.get(`${BASE_URL}/pets/${petId}/events`)
          .then(response => {
            dispatch({
              type: GET_EVENTS,
              payload: response.data.data
            })
          })
          .catch((error) => console.warn(error.response))
      ) 
}

export const GET_PET_INFO = 'GET_PET_INFO'
export const getPetInfo = (userId, cb) => {
    return dispatch => (
        axios.get(`${BASE_URL}/users/${userId}`)
        .then(response => {
            dispatch({
                type: GET_PET_INFO,
                payload: response.data.data 
            })
            if(cb) cb()
        })
        .catch((error) => console.warn(error.response))
    )
}

export const GET_COMPLETED_EVENTS = 'GET_COMPLETED_EVENTS'
export const getCompletedEvents = (petId) => {
    return dispatch => (
        axios.get(`${BASE_URL}/pets/${petId}/completed_events`)
          .then(response => {
            dispatch({
              type: GET_COMPLETED_EVENTS,
              payload: response.data.data
            })
          })
          .catch((error) => console.warn(error.response))
      ) 
}

export const POST_COMPLETED_EVENTS = 'POST_COMPLETED_EVENTS'
export const postCompletedEvent = (eventId, userId, eventInfo, cb) => {
    return (dispatch, getState) => (
        
        axios.post(`${BASE_URL}/events/${eventId}/users/${userId}`, eventInfo)
          .then(response => {  
            dispatch(getAllEvents(getState().petsData.selectedSchedule.pet_id)) 
            dispatch(getCompletedEvents(getState().petsData.selectedSchedule.pet_id))
          })
          .catch((error) => console.warn(error.response))
      ) 
}


export const postEvent = (eventId, userId, eventInfo) => {
    return (dispatch, getState) => (
        
        axios.post(`${BASE_URL}/events/${eventId}/users/${userId}`, eventInfo)
          .then(response => {       
            dispatch(getCompletedEvents(getState().petsData.selectedSchedule.pet_id))
          })
          .catch((error) => console.warn(error.response))
      ) 
}

export const createEvent = (petId, eventInfo) => {
    return (dispatch) => (
        axios.post(`${BASE_URL}/pets/${petId}/events`, eventInfo)
        .then(() => {
            dispatch(getAllEvents(petId))
            dispatch(getCompletedEvents(petId))
          })
          .catch((error) => console.warn(error.response))    
    )
}

export const SAVE_IMAGE = 'SAVE_IMAGE'
export const saveImage = (image) => {
    return {
        type: SAVE_IMAGE,
        payload: image
    }
}
export const SAVE_NAME = 'SAVE_NAME'
export const saveName = (name) => {
    return {
        type: SAVE_NAME,
        payload: name
    }
}
export const SAVE_BREED = 'SAVE_BREED'
export const saveBreed = (breed) => {
    return {
        type: SAVE_BREED,
        payload: breed
    }
}
export const SAVE_SEX = 'SAVE_SEX'
export const saveSex = (sex) => {
    return {
        type: SAVE_SEX,
        payload: sex
    }
}
export const SAVE_BIRTHDAY = 'SAVE_BIRTHDAY'
export const saveBirthday = (birthday) => {
    return {
        type: SAVE_BIRTHDAY,
        payload: birthday
    }
}
export const SAVE_EVENT = 'SAVE_EVENT'
export const saveEvent = (event) => {
    return {
        type: SAVE_EVENT,
        payload: event
    }
}
export const SELECTED_SCHEDULE = 'SELECTED_SCHEDULE'
export const selectedSchedule = (event) => {
    return {
        type: SELECTED_SCHEDULE,
        payload: event
    }
}
export const SAVE_EVENT_IMAGE = 'SAVE_EVENT_IMAGE'
export const saveEventImage = (image) => {
    return {
        type: SAVE_EVENT_IMAGE,
        payload: image
    }
}

