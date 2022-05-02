import { types } from "../constant/types";

const notifications = []

export const notificationReducer = (state = notifications, action) =>{
    
    switch (action.type) {
        case types.addNotification:
            
            return [
                ...state,
                {
                    ...action.payload
                }
            ]
        
        case types.removeNotification:
            
            return state.filter(el => el.id !== action.payload.id)
            
        default:
            return state
    }
}