import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { getUserProfile, getUserStatus, updateUserStatus, 
    savePhoto, saveProfile } from "../../redux/profileReducer";
import {  useMatch } from "react-router-dom";
import { compose } from "redux";
import { ProfileType } from "../../types/types";
import { StateType } from "../../redux/store";


type mapStatepropsType = {
    profile: ProfileType
    status: string
    authorizedUserId: number
    isAuth: boolean
}

type mapDispatchpropsType = {
    getUserProfile: (userId: number) => void
    getUserStatus: (userId: number) => void
    updateUserStatus: (status: string) => void
    savePhoto: (file: File)=> void
    saveProfile: (profile: ProfileType)=> void
    match: any
}

type PropsType = mapStatepropsType & mapDispatchpropsType

class ProfileContainer extends React.Component<PropsType> {
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
    connect(mapStateToProps, {getUserProfile, getUserStatus, updateUserStatus, savePhoto, saveProfile}),
    WithAuthRedirect
)(ProfileMatch)