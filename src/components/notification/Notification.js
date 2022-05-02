import React, { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { removeNotification } from "../../action/notification";

const Notification = ({ id, type, message }) => {
  const [exit, setExit] = useState(false);
  const [width, setWidth] = useState(0);
  const [intervalID, setIntervalID] = useState(null);
  const [finalTypes, setFinalTypes] = useState('')

  const dispatch = useDispatch()


  const handleStartTimer = () => {
    const idInt = setInterval(() => {
      setWidth(prev => {
        if (prev < 100) {
          return prev + 0.5;
        }

        clearInterval(idInt);
        return prev;
      });
    }, 20);

    setIntervalID(idInt);
  };

  const handlePauseTimer = useCallback(
    () => {
      clearInterval(intervalID);
    },
    [intervalID],
  )
  
    const handleCloseNotification = useCallback(
      () => {
        handlePauseTimer();
        setExit(true);
        setTimeout(() => {
          dispatch(removeNotification(id))
        }, 1100)
      },
      [dispatch, handlePauseTimer, id],
    )

  useEffect(() => {
    if (width === 100) {
      // Close notification
      handleCloseNotification()
    }
  }, [width, handleCloseNotification])

  

  useEffect(() => {
    handleStartTimer();
  }, []);

  useEffect(() => {
    if(type === 'SUCCESS') setFinalTypes('success')
    else if(type === 'ERROR') setFinalTypes('error')
    else if(type === 'LOADING') setFinalTypes('loading')
  }, [type])

  

  return (

    <div 
        onMouseEnter={handlePauseTimer}
        onMouseLeave={handleStartTimer}
        className=
          {
            `notification-item 
            ${finalTypes}
            ${exit ? "exit" : ""}
            `
          }
    >
      <p>{message}</p>
      
      <div className={"bar"} style={{ width: `${width}%` }} />
    </div>

  );
};

export default Notification;
