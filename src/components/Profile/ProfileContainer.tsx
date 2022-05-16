import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { getUserProfile, getUserStatus, updateUserStatus, 
    savePhoto, saveProfile } from "../../redux/profileReducer";
import {  useMatch } from "react-router-dom";
import { compose } from "redux";
import { ProfileType } from "../../types/types";
import { StateType } from "../../redux/store";
import { withAuthRedirect } from "../hoc/withAuthRedirect";


type mapStatepropsType = {
    profile: ProfileType
    status: string
    authorizedUserId: number
    isAuth: boolean
}

type mapDispatchpropsType = {
    getUserProfile: (userId: number) => void
    getUserStatus: (userId: number) => void
    updateUserStatus: () => void
    savePhoto: (file: File)=> void
    saveProfile: (profile: ProfileType)=> Promise<any>
}

type PathParamsType = {
    match: any
}

type PropsType = mapStatepropsType & mapDispatchpropsType & PathParamsType

class ProfileContainer extends React.Component<PropsType> {
    refreshProfile() {
        let userId = this.props.match ? this.props.match.params.userId : this.props.authorizedUserId;
        this.props.getUserProfile(userId);
        this.props.getUserStatus(userId);
    }

    componentDidMount() {
        this.refreshProfile();
    }

    componentDidUpdate(prevProps: PropsType) {
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

const ProfileMatch = (props: any) => {
	let match = useMatch("/profile/:userId/");
	return (
		<ProfileContainer {...props} match={match} />
	)
}


let mapStateToProps = (state: StateType) => ({
profile: state.profilePage.profile,
status: state.profilePage.status,
authorizedUserId: state.auth.id,
isAuth: state.auth
})


export default compose<React.ComponentType>(
    connect(mapStateToProps, {getUserProfile, getUserStatus, updateUserStatus, savePhoto, saveProfile}),
    withAuthRedirect
)(ProfileMatch)