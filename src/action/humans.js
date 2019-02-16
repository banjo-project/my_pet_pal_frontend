export const OPEN_HUMAN_IMAGE = 'OPEN_HUMAN_IMAGE'
export const SAVE_HUMAN_IMAGE = 'SAVE_HUMAN_IMAGE'
export const SAVE_HUMAN_NAME = 'SAVE_HUMAN_NAME'
export const SAVE_HUMAN_TITLE = 'SAVE_HUMAN_TITLE'
export const SAVE_HUMAN_EMAIL = 'SAVE_HUMAN_EMAIL'
export const SAVE_HUMAN_PW = 'SAVE_HUMAN_PW'
export const SAVE_HUMAN_PHONE = 'SAVE_HUMAN_PHONE'

export const openHumanImage = () => {
    return {
        type: OPEN_HUMAN_IMAGE,
        payload: true
    }
}

export const saveHumanImage = (image) => {
    return {
        type: SAVE_HUMAN_IMAGE,
        payload: image
    }
}

export const saveHumanName = (name) => {
    return {
        type: SAVE_HUMAN_NAME,
        payload: name
    }
}

export const saveHumanTitle = (title) => {
    return {
        type: SAVE_HUMAN_TITLE,
        payload: title
    }
}

export const saveHumanEmail = (email) => {
    return {
        type: SAVE_HUMAN_EMAIL,
        payload: email
    }
}

export const saveHumanPw = (pw) => {
    return {
        type: SAVE_HUMAN_PW,
        payload: pw
    }
}

export const saveHumanPhoneNumber = (phone) => {
    return {
        type: SAVE_HUMAN_PHONE,
        payload: phone
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