import React from "react";
import styles from "./Users.module.css";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";
import { UserType } from "../../types/types";

type propsType = {
    totalUsersCount: number
    pageSize: number
    portionUsersSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    followingInProgress: Array<number>
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    users: Array<UserType>
}

const Users: React.FC<propsType> = ({currentPage, onPageChanged, totalUsersCount, portionUsersSize, 
    pageSize, followingInProgress, follow, unfollow, users}) => {
    
    return (
        <div className={styles.usersPage}>
            <Paginator currentPage={currentPage} onPageChanged={onPageChanged} 
            totalItmesCount={totalUsersCount} portionSize={portionUsersSize}
            pageSize={pageSize} />
            {users.map(u => <User user={u} followingInProgress={followingInProgress} 
            follow={follow} unfollow={unfollow} key={u.id} />)}
        </div>

    )
}


export default Users;