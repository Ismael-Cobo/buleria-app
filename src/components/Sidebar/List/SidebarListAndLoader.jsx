import React from 'react'
import { useSelector } from 'react-redux'
import { NoNotes } from './NoNotes'
import { SidebarListItem } from './SidebarListItem'

export const SidebarListAndLoader = () => {


    const { notes, active } = useSelector(state => state.notes)

    return (
        <>
            {
                notes.length > 0
                ? (
                    notes.map(note => (
                        <SidebarListItem key={note.id} {...note} active={active?.id === note.id ? true : false} />
                    ))
                )
                : <NoNotes />
            }
        </>
    )
}
