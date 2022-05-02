import { types } from "../constant/types";

const initialState = {
    notes: [],
    active: null,
}

export const notesReducer = (state = initialState, action) => {


    switch (action.type) {


        case types.loadAllNotes:
            
            return {
                ...state,
                notes: [
                    ...action.payload.sort(function(a,b){
                        if(a.date > b.date) return -1
                        if(a.date < b.date) return 1
                        return 0
                    })
                ]
            }

        case types.addNote:
            
            return {
                ...state,
                notes: [
                    action.payload,
                    ...state.notes
                ]
            }

        case types.setActiveNote:

            return {
                ...state,
                active: {
                    ...action.payload
                }
            }

        case types.updateOneValue:

            return {
                ...state,
                active: {
                    ...state.active,
                    ...action.payload
                }
            }

        case types.updateNote:

            return {
                ...state,
                notes: [
                    ...state.notes.map(note => note.id === action.payload.id ? action.payload.note : note)
                    .sort(function(a,b){
                        if(a.date > b.date) return -1
                        if(a.date < b.date) return 1
                        return 0
                    })
                ]
            }
        case types.deleteNote:

            return {
                ...state,
                notes: state.notes.filter(note => note.id !== action.payload),
                active: null
            }

        case types.cleadrAllNotes:

            return { 
                notes: [],
                active: null
            }
        

        default:
            return state
    }

}