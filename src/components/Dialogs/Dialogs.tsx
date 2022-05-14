import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import styles from "./Dialogs.module.css";
import Messages from "./Messages/Messages";
import {Field, reduxForm} from "redux-form";
import { Textarea } from "../common/FormsControls/FormsControls";
import { InitialStateType } from "../../redux/dialogsReducer";
import { maxLengthCreator, required } from "../validators/validator";

const maxLength30 = maxLengthCreator(30);

type PropsType = {
    dialogsPage: InitialStateType
    sendMessage: (messageText: string) => void
}

export type NewMessageFormValuesType = {
    newMessageBody: string
}

const Dialogs: React.FC<PropsType> = (props) => {
    let dialogsPage = props.dialogsPage;

     let addNewMessage = (values: NewMessageFormValuesType) => {
        props.sendMessage(values.newMessageBody);
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

const AddMessageForm = (props: any) => {
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

const AddMessageReduxForm = reduxForm<NewMessageFormValuesType>({form: 'dialogAddMessageForm'})(AddMessageForm);

export default Dialogs;


