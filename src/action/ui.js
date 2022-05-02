import { types } from "../constant/types"

export const startLoading = () => {

    return {
        type: types.loading
    }
}

export const finishLoading = () => {

    return {
        type: types.finishLoading
    }
}