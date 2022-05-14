import React from "react";
import { connect } from "react-redux";
import { follow, unfollow, requestUsers } from "../../redux/usersReducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import { compose } from "redux";
import { getCurrentPage, getportionUsersSize, getFollowingInProgress, 
    getIsFetching, getPageSize, getTotalUsersCount, getUsers } from "../../redux/users-selectors";
import { UserType } from "../../types/types";
import { StateType } from "../../redux/store";

type mapStatepropsType = {
    currentPage: number
    pageSize: number
    isFetching: boolean
    totalUsersCount: number
    portionUsersSize: number
    users: Array<UserType>
    followingInProgress: Array<number>
}

type mapDispatchpropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setCurrentPage: (pageNumber: number) => void
    requestUsers: (currentPage: number, pageSize: number)=> void  
}

type PropsType = mapStatepropsType & mapDispatchpropsType

class usersContainer extends React.Component<PropsType> {

    componentDidMount() {
        this.props.requestUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        this.props.requestUsers(pageNumber, this.props.pageSize)
    }

    render() {
        return <>
        { this.props.isFetching ? <Preloader />: null }
            <Users totalUsersCount={this.props.totalUsersCount}
                portionUsersSize={this.props.portionUsersSize}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                users={this.props.users}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                followingInProgress={this.props.followingInProgress}

            />
        </>

    }
}


let mapStateToProps = (state: StateType): mapStatepropsType => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        portionUsersSize: getportionUsersSize(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}

export default compose<React.ComponentType>(
    connect(
        mapStateToProps, {follow, unfollow, requestUsers})
)(usersContainer)