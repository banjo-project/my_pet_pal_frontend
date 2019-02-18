export const SAVE_IMAGE = 'SAVE_IMAGE'
export const SAVE_NAME = 'SAVE_NAME'
export const SAVE_BREED = 'SAVE_BREED'
export const SAVE_SEX = 'SAVE_SEX'
export const SAVE_BIRTHDAY = 'SAVE_BIRTHDAY'
export const SAVE_EVENT = 'SAVE_EVENT'
export const OPEN_SCHEDULE_CHECKER = 'OPEN_SCHEDULE_CHECKER'
export const SELECTED_SCHEDULE = 'SELECTED_SCHEDULE'

export const saveImage = (image) => {
    return {
        type: SAVE_IMAGE,
        payload: image
    }
}

export const saveName = (name) => {
    return {
        type: SAVE_NAME,
        payload: name
    }
}

export const saveBreed = (breed) => {
    return {
        type: SAVE_BREED,
        payload: breed
    }
}

export const saveSex = (sex) => {
    return {
        type: SAVE_SEX,
        payload: sex
    }
}

export const saveBirthday = (birthday) => {
    return {
        type: SAVE_BIRTHDAY,
        payload: birthday
    }
}

export const saveEvent = (event) => {
    return {
        type: SAVE_EVENT,
        payload: event
    }
}

export const openScheduleChecker = (boolean) => {
    return {
        type: OPEN_SCHEDULE_CHECKER,
        payload: boolean
    }
}

export const selectedSchedule = (info) => {
    return {
        type: SELECTED_SCHEDULE,
        payload: info
    }
}