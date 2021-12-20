import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import CssDialogs from "./Dialogs.module.css";
import Messages from "./Messages/Messages";
import {updateNewMessageBodyActionCreator, addMessageActionCreator} from '../../redux/dialogsReducer'


const Dialogs = (props) => {


    let addMessage = () => {
        props.dispatch(addMessageActionCreator());
    }

    let onMessageChange = (event) => {
        let body = event.target.value;
        props.dispatch(updateNewMessageBodyActionCreator(body))
    }


    let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id} />);
    let messagesElements = props.dialogsPage.messages.map(m => <Messages message={m.message} />);

    return (
        <div className={CssDialogs.dialogs}>
            <div className={CssDialogs.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={CssDialogs.messages}>
                {messagesElements}
                <textarea onChange={onMessageChange} value={props.dialogsPage.newMessageBody} placeholder='Enter your message'></textarea>
                <div>
                    <button onClick={addMessage}>Add message</button>
                </div>
            </div>

        </div>
    )
}

export default Dialogs;