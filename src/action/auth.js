import { getAuth, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, signOut } from 'firebase/auth'
import { googleAuthProvider } from '../firebase/firebase-config'
import { v4 } from 'uuid'

import { types } from "../constant/types"
import { addNotification } from './notification'
import { finishLoading, startLoading } from './ui'


export const startLogin = (email, password) => {

    return (dispatch) => {

        dispatch(addNotification(v4(), 'Loading...', types.loading))
        dispatch(startLoading())

        const auth = getAuth()
        signInWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
                const { uid } = user
                dispatch(login(uid, email))
                dispatch(addNotification(v4(), 'Welcome to Buleria (provisional name)', types.success))
                dispatch(finishLoading())

            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                dispatch(addNotification(v4(), `#${errorCode}- ${errorMessage}`, types.error))
            })

    }

}

export const startLoginWithGoogle = () => {

    return (dispatch) => {

        const auth = getAuth()
        signInWithPopup(auth, googleAuthProvider)
            .then(({ user }) => {

                const { uid, displayName } = user
                dispatch(login(uid, displayName))

            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                dispatch(addNotification(v4(), `#${errorCode}- ${errorMessage}`, types.error))
            })

    }

}

export const startRegisterWithEmailNamePassword = (email, password, name) => {

    return (dispatch) => {

        const auth = getAuth()
        createUserWithEmailAndPassword(auth, email, password)
            .then( async ({user}) => {
                const { uid } = user

                await updateProfile( user, { displayName: name})

                dispatch(login(uid, name))
                dispatch(addNotification(v4(), 'Welcome to Buleria (provisional name)', types.success))

            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                dispatch(addNotification(v4(), `#${errorCode}- ${errorMessage}`, types.error))
            })

    }

}

export const startLogout = () => {
    return (dispatch) => {
        const auth = getAuth()

        signOut(auth)
        .then(() => {
            dispatch(logout())
            dispatch(addNotification(v4(), 'Logout done correctly', types.success))
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            dispatch(addNotification(v4(), `#${errorCode}- ${errorMessage}`, types.error))
        })

    }
}

export const login = (uid, displayName) => {
    return {
        type: types.login,
        payload: {
            uid,
            displayName
        }
    }
}

const logout = () => {
    return {
        type: types.logout
    }
} 