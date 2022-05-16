import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { actions } from '../../redux/dialogsReducer'
import { StateType } from "../../redux/store";
import { withAuthRedirect } from "../hoc/withAuthRedirect";
import Dialogs from "./Dialogs";

let mapStateToProps = (state: StateType) => {
    return {
        dialogsPage: state.dialogsPage
    }
}


export default compose<React.ComponentType>(
    connect(mapStateToProps, {sendMessage: actions.sendMessage}),
    withAuthRedirect
)(Dialogs)
