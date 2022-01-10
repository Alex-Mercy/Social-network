import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import styles from "./Dialogs.module.css";
import Messages from "./Messages/Messages";
import {Navigate } from "react-router-dom";


const Dialogs = (props) => {
    let dialogsPage=props.dialogsPage;

    let onAddMessage = () => {
        props.addMessage();
    }

    let onMessageChange = (event) => {
        let body = event.target.value;
        props.UpdateNewMessage(body);
    }


    let dialogsElements = dialogsPage.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id} />);
    let messagesElements = dialogsPage.messages.map(m => <Messages message={m.message} key={m.id} />);
    let newMessageBody = dialogsPage.newMessageBody;

    if (!props.isAuth) return <Navigate to="/login"/>

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={styles.messages}>
                {messagesElements}
                <textarea onChange={onMessageChange} value={newMessageBody} placeholder='Enter your message'></textarea>
                <div>
                    <button onClick={onAddMessage}>Add message</button>
                </div>
            </div>

        </div>
    )
}

export default Dialogs;