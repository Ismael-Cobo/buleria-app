import { types } from "../constant/types";

/*

    {
        uid: 12345,
        name: 'Ismael'
    }

*/



export const authReducer = (state = [], action) => {

    switch (action.type) {
        case types.login:
            return {
                
                uid: action.payload.uid,
                name: action.payload.displayName,

            }

        case types.logout:
            return { }

        default:
            return state
    }

}