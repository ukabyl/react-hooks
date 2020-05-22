import React, { useReducer } from 'react'
import { AlertContext } from './alertContext';
import { alertReducer } from './alertReducer';
import { SHOW_ALERT, HIDE_ALERT } from '../types';

const AlertState = ({ children }) => {

    const [ state, dispatch ] = useReducer(alertReducer);

    const show = (payload = 'Something was wrong!!!') => {
        dispatch({
            type: SHOW_ALERT,
            payload
        })
    }
    const hide = () => {
        dispatch({
            type: HIDE_ALERT
        })
    }

    return (
        <AlertContext.Provider value={{
            alert: state, show, hide
        }}>
            { children }
        </AlertContext.Provider>
    )
}

export default AlertState
