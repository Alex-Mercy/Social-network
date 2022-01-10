import React from "react";
import { connect } from "react-redux";
import { updateNewMessageBodyActionCreator, addMessageActionCreator } from '../../redux/dialogsReducer'
import Dialogs from "./Dialogs";

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () => {
            dispatch(addMessageActionCreator());
        },
        UpdateNewMessage: (body) => {
            dispatch(updateNewMessageBodyActionCreator(body))
        }
    }

}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;