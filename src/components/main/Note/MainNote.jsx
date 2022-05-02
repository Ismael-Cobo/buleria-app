import React from 'react'
import { useSelector } from 'react-redux'
import { MainNoteBody } from './MainNoteBody/MainNoteBody'
import { MainNoteTitle } from './MainNoteTitle/MainNoteTitle'

export const MainNote = () => {


    const { active } = useSelector(state => state.notes)
    const { title, body, id } = active

    return (
        <>
            <MainNoteTitle title={title} id={id} />
            <MainNoteBody body={body} id={id} />
        </>
    )
}
