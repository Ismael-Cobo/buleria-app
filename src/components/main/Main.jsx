import React from 'react'
import { useSelector } from 'react-redux'
import { MainHeader } from './Header/MainHeader'
import { MainNote } from './Note/MainNote'
import { NoteSelectedNote } from './NotSelectedNote/NoteSelectedNote'

export const Main = () => {

    const { active } = useSelector(state => state.notes)

    return (
        <>
            <MainHeader />
            {
                active
                ? <MainNote />
                : <NoteSelectedNote />
            }
            
            
        </>
    )
}
