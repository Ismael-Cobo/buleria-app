import { types } from "../constant/types"

export const addNotification = (id, message, type) => {
    
    return {
        type: types.addNotification,
        payload: {
            id: id,
            message: message,
            type: type
        }
    }
}

export const removeNotification = (id) => {
    return {
        type: types.removeNotification,
        payload:{
            id: id
        }
    }
}

