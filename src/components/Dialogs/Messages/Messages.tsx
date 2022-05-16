import React from "react";
import CssDialogs from "./../Dialogs.module.css";

type PropsType = {
    message: string
}

const Messages: React.FC<PropsType> = (props) => {
    return (
        <div className={CssDialogs.message}>
            {props.message}
        </div>
    )
}


export default Messages;