import React from 'react'
import { useSelector } from 'react-redux'
import { types } from '../../constant/types'
import Notification from './Notification'
import { NotificationWithLoader } from './NotificationWithLoader'

export const NotificationProvider = () => {

    const notifications = useSelector(state => state.notification)
    
    return (
        <div>
            <div className={'notification-wrapper'}>
                {
                    notifications.map(note => (
                        note.type === types.loading
                        ? <NotificationWithLoader key= { note.id } {...note} />
                        : <Notification key= { note.id } {...note}/>
                        
                    ))
                }
            </div>
        </div>
    )
}
