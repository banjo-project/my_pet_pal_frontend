export const SAVE_IMAGE = 'SAVE_IMAGE'
export const SAVE_NAME = 'SAVE_NAME'
export const SAVE_BREED = 'SAVE_BREED'
export const SAVE_SEX = 'SAVE_SEX'
export const SAVE_BIRTHDAY = 'SAVE_BIRTHDAY'

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