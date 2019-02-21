export const OPEN_HUMAN_IMAGE = 'OPEN_HUMAN_IMAGE'
export const openHumanImage = () => {
    return {
        type: OPEN_HUMAN_IMAGE,
        payload: true
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