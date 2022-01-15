import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { getUserProfile, getUserStatus, updateUserStatus } from "../../redux/profileReducer";
import {  useMatch } from "react-router-dom";
import { WithAuthRedirect } from "../hoc/withAuthRedirect";

import { compose } from "redux";



class ProfileContainer extends React.Component {
    
    componentDidMount() {
        let userId = this.props.match ? this.props.match.params.userId : '21639';
        this.props.getUserProfile(userId);
        this.props.getUserStatus(userId);
    }


    render() {
        return (
            <div>
                <Profile {...this.props} />
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
status: state.profilePage.status
})


export default compose(
    connect(mapStateToProps, {getUserProfile, getUserStatus, updateUserStatus}),
    WithAuthRedirect
)(ProfileMatch)