import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { removeNotification } from "../../action/notification";


export const NotificationWithLoader = ({ id, type, message }) => {
    const [exit, setExit] = useState(false);

    const dispatch = useDispatch()

    const { loading } = useSelector( state => state.notification)

    const handleCloseNotification = useCallback(
        () => {
            setExit(true);
            setTimeout(() => {
                dispatch(removeNotification(id))
            }, 2100)
        },
        [dispatch, id],
    )

    useEffect(() => {
        if(!loading) handleCloseNotification()
    }, [loading, handleCloseNotification])

    return (

        <div
            className=
            {
                `notification-item 
              ${type}
              ${exit ? "exitWithLoader" : ""}
              `
            }
        >
            <p className="notification__text">{message} <span className="lds-ring"><span></span><span></span><span></span><span></span></span></p>
        </div>

    );
}
