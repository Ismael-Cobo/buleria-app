import React from 'react'
import { useDispatch } from 'react-redux'
import { startNewNote } from '../../../action/notes'

export const NoNotes = () => {

    const dispatch = useDispatch()

    const handleAddNewNote = () => {
        dispatch(startNewNote())
    }

    return (
        <div 
            className="aside__note"
            onClick={handleAddNewNote}
        >
            <h5 className="note__title">New note</h5>
            <p className="note__text">

            </p>
        </div>
    )
}
