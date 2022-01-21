import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import styles from "./Dialogs.module.css";
import Messages from "./Messages/Messages";
import { Field, reduxForm } from "redux-form";
import { Textarea } from "../common/Preloader/FormsControls/FormsControls";
import { maxLengthCreator, required } from "../validators/validator";


const maxLength30 = maxLengthCreator(30);
const Dialogs = (props) => {
    let dialogsPage = props.dialogsPage;

    let addNewMessage = (values) => {
        props.addMessage(values.newMessageBody);  
    }

    let dialogsElements = dialogsPage.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id} />);
    let messagesElements = dialogsPage.messages.map(m => <Messages message={m.message} key={m.id} />);

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>{dialogsElements}
            </div>
            <div className={styles.messages}>{messagesElements}
                <AddMessageReduxForm onSubmit={addNewMessage} />
            </div>
        </div>
    )
}

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={Textarea} name="newMessageBody" placeholder="Enter your message"
            validate={[required, maxLength30]} />
            <div>
                <button>Add message</button>
            </div>
        </form>
    )
}

const AddMessageReduxForm = reduxForm ({form: 'dialogAddMessageForm'})(AddMessageForm);

export default Dialogs;