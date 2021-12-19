import React from "react";
import CssDialogs from "./../Dialogs.module.css";


const Messages = (props) => {
    return (
        <div className={CssDialogs.message}>
            {props.message}
        </div>
    )
}


export default Messages;