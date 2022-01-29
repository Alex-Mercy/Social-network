import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { getUserProfile, getUserStatus, updateUserStatus, savePhoto } from "../../redux/profileReducer";
import {  useMatch } from "react-router-dom";
import { WithAuthRedirect } from "../hoc/withAuthRedirect";

import { compose } from "redux";



class ProfileContainer extends React.Component {

    refreshProfile() {
        let userId = this.props.match ? this.props.match.params.userId : this.props.authorizedUserId;
        this.props.getUserProfile(userId);
        this.props.getUserStatus(userId);
    }

    componentDidMount() {
        this.refreshProfile();
    }

    componentDidUpdate(prevProps) {
        if (this.props.match != prevProps.match) {
            this.refreshProfile(); 
        }
    }


    render() {
        return (
            <div>
                <Profile {...this.props} isOwner = {!this.props.match}/>
            </div>
        )
    }
}

const ProfileMatch = (props) => {
	let match = useMatch("/profile/:userId/");
	return (
		<ProfileContainer {...props} match={match} />
	)
}


let mapStateToProps = (state) => ({
profile: state.profilePage.profile,
status: state.profilePage.status,
authorizedUserId: state.auth.id,
isAuth: state.isAuth
})


export default compose(
    connect(mapStateToProps, {getUserProfile, getUserStatus, updateUserStatus, savePhoto}),
    WithAuthRedirect
)(ProfileMatch)