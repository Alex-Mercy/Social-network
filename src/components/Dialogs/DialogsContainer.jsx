import React from "react";
import {updateNewMessageBodyActionCreator, addMessageActionCreator} from '../../redux/dialogsReducer'
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
    let dialogsPage = props.store.getState().dialogsPage;

    let addMessage = () => {
        props.store.dispatch(addMessageActionCreator());
    }

    let onMessageChange = (body) => {
        props.store.dispatch(updateNewMessageBodyActionCreator(body))
    }

    return (
        <Dialogs addMessage={addMessage} UpdateNewMessage={onMessageChange} 
        dialogsPage={dialogsPage} 
        />
    )
}

export default DialogsContainer;