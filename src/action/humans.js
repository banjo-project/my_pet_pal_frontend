import axios from 'axios'
const BASE_URL = 'http://localhost:5000'

export const GET_PET_USER_INFO = 'GET_PET_USER_INFO'
export const createUser = (newUser) => {
    return (dispatch) => (
        axios.post(`${BASE_URL}/users`, newUser)
        .then((res) => {
            dispatch({
                type: GET_PET_USER_INFO,
                payload: res.data.userData
              })
          })
          .catch((error) => console.warn(error.response))    
    )
}

export const OPEN_HUMAN_IMAGE = 'OPEN_HUMAN_IMAGE'
export const openHumanImage = () => {
    return {
        type: OPEN_HUMAN_IMAGE,
        payload: true
    }
}

export const CLOSE_HUMAN_IMAGE = 'CLOSE_HUMAN_IMAGE'
export const closeHumanImage = () => {
    return {
        type: CLOSE_HUMAN_IMAGE,
        payload: false
    }
}

export const SAVE_HUMAN_IMAGE = 'SAVE_HUMAN_IMAGE'
export const saveHumanImage = (image) => {
    return {
        type: SAVE_HUMAN_IMAGE,
        payload: image
    }
}
export const SAVE_HUMAN_NAME = 'SAVE_HUMAN_NAME'
export const saveHumanName = (name) => {
    return {
        type: SAVE_HUMAN_NAME,
        payload: name
    }
}



// export const openHumanImage = (fn) => {
//     return (dispatch) => {
//         dispatch({
//             type: OPEN_HUMAN_IMAGE,
//             payload: true
//         })
//         fn()
//     }
// }