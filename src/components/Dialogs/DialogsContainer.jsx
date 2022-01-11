import React from "react";
import { connect } from "react-redux";

import { updateNewMessageBodyActionCreator, addMessageActionCreator } from '../../redux/dialogsReducer'
import { WithAuthRedirect } from "../hoc/withAuthRedirect";
import Dialogs from "./Dialogs";

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
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


let AuthRedirectComponent = WithAuthRedirect(Dialogs);


const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent)

export default DialogsContainer;