import React, { useContext } from "react";
import { useAlert } from './AlertContext';

export default function Alert() {

    // const alert = useContext(AlertContext)
    const alert = useAlert()


    if (!alert.visible) return null

    return(
        <div className="alert alert-danger" onClick={alert.toggle}>
            This is very impotmend message.
        </div>
    )
} 