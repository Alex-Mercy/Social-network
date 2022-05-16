import React from "react";
import { NavLink } from "react-router-dom";
import CssDialogs from "./../Dialogs.module.css";

type PropsType = {
    id: number
    name: string
}

const DialogItem: React.FC<PropsType> = (props) => {
    return (
        <div className={CssDialogs.dialog}>
            <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
        </div>
    )
}



export default DialogItem;