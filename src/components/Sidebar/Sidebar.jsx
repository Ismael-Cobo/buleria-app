import React from 'react'
import { SidebarHeader } from './Header/SidebarHeader'
import { SidebarList } from './List/SidebarList'
import { SidebarSearch } from './Search/SidebarSearch'

export const Sidebar = () => {
    return (
        <>
            <SidebarHeader />
            <SidebarSearch />
            <SidebarList />
        </>
    )
}
