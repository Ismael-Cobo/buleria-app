import React, { useLayoutEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { SidebarListAndLoader } from './SidebarListAndLoader'

export const SidebarList = () => {

    const [mounted, setMounted] = useState(false)
    
    const { notes } = useSelector(state => state.notes)
    
    useLayoutEffect(() => {
    
        return () => {
          setMounted(true)
        }
      }, [notes])
    
    return (
        <div className="aside__notes_list">
            {
                mounted
                ? <SidebarListAndLoader />
                : <p>Loading...</p>
            }
            
        </div>
    )
}
