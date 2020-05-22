import { useContext, useEffect } from 'react';
import 'materialize-css';
import 'react-materialize';
import { AlertContext } from '../../context/alert/alertContext';
import './alert.scss';

const Alert = () => {

    const { alert } = useContext(AlertContext)

    useEffect(() => {
        let toastInstance = null;

        if ( !alert ) {
            return undefined
        } else {
            toastInstance = window.M.toast({html: alert, displayLength: 60000, classes: 'red accent-3'})
        }
        return () => toastInstance.dismiss();
    }, [alert])

    return null;

}

export default Alert;
