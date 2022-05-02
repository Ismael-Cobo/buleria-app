import { addDoc, collection, deleteDoc, doc, updateDoc } from "firebase/firestore"
import { v4 } from "uuid"
import { types } from "../constant/types"
import { db } from "../firebase/firebase-config"
import { loadNotes } from "../helpers/loadNotes"
import { addNotification } from "./notification"


export const startLoadAllNotes = () => {

    return async (dispatch, getState) => {

        try {
            const { uid } = getState().auth

            const notes = await loadNotes(uid)
            dispatch(loadAllNotes(notes))
            
        } catch {
            dispatch(addNotification(v4(), 'Unable to load all notes', types.error))     
        }


    }
}

const loadAllNotes = (notes = []) => {
    return {
        type: types.loadAllNotes,
        payload: [
            ...notes
        ]
    }
}


export const startNewNote = () => {

    return async (dispatch, getState) => {

        try {
            const { uid } = getState().auth

            const newNote = {
                title: '',
                body: '',
                date: new Date().getTime()
            }

            const doc = await addDoc(collection(db, `${uid}`, '/journal/notes'), newNote)

            dispatch(setActive( doc.id, newNote))
            dispatch(addNewNote(newNote, doc.id))
            

        } catch {
            dispatch(addNotification(v4(), 'Unable to create a new note', types.error))            
        }

    }

}

const addNewNote = (note, id) => {

    return {
        type: types.addNote,
        payload: {
            id,
            ...note
        }
    }
}

// Se le pone el id porque cuando se crea una nueva nota el id no existe, 
// lo tiene que generar firebase
export const setActive = (id, note) => {

    return {
        type: types.setActiveNote,
        payload: {
            id,
            ...note
        }
    }

}

export const updateOneValue = (value) => {
    return {
        type: types.updateOneValue,
        payload: value
    }

}

export const startSaveNote = () => {

    return async (dispatch, getState) => {

        try {
            const { uid } = getState().auth
            const { active } = getState().notes
            const noteId = active.id
            
            const noteRef = doc(db, `${uid}/journal/notes/${noteId}`)

            await updateDoc(noteRef, active)

            dispatch(addNotification(v4(), 'The note has been saved correctly', types.success))
            dispatch(updateOneNote(active, noteId))       
            
        } catch {
            dispatch(addNotification(v4(), 'Unable to save the note', types.error))            
        }
    }
}

const updateOneNote = (note, id) => {
    return {
        type: types.updateNote,
        payload: {
            note,
            id
        }
    }
}

export const cleadrAllNotes = () => {
    return {
        type: types.cleadrAllNotes
    }
}

export const startDeleteNote = () => {

    return async (dispatch, getState) => {
        
        try {
            const {uid} = getState().auth
            const { active } = getState().notes

            await deleteDoc(doc(db, `${uid}/journal/notes/${active.id}`))

            dispatch(deleteNote(active.id))
            dispatch(addNotification(v4(), 'The note has been deleted correctly', types.success))            

        } catch {
            dispatch(addNotification(v4(), 'Unable to delete the note', types.error))            
        }


    }
}

const deleteNote = (id) => {
    return {
        type: types.deleteNote,
        payload: id
    }
}