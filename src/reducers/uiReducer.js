import { types } from "../constant/types"

const initialState = {
    loading: false
}

export const uiReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.loading:
            return {
                loading: true
            }

        case types.finishLoading:
            return {
                loading: false
            }


        default:
            return state
    }
}