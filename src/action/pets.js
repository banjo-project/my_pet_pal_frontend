export const SAVE_IMAGE = 'SAVE_IMAGE'

export const saveImage = (image) => {
    return {
        type: SAVE_IMAGE,
        payload: image
    }
}