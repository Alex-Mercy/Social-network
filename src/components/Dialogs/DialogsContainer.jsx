import React from "react";
import { updateNewMessageBodyActionCreator, addMessageActionCreator } from '../../redux/dialogsReducer'
import StoreContext from "../../StoreContext";
import Dialogs from "./Dialogs";

const DialogsContainer = () => {


    return (
        <StoreContext.Consumer> 
            { 
            (store) => {
                let dialogsPage = store.getState().dialogsPage;
                let addMessage = () => {
                    store.dispatch(addMessageActionCreator());
                }
                let onMessageChange = (body) => {
                    store.dispatch(updateNewMessageBodyActionCreator(body))
                }
                return <Dialogs addMessage={addMessage} UpdateNewMessage={onMessageChange}
                    dialogsPage={dialogsPage}
                />
            }
        }
        </StoreContext.Consumer>
    )
}

export default DialogsContainer;