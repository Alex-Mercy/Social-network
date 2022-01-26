import React from "react";
import styles from "./Users.module.css";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";


const Users = (props) => {
    return (
        <div className={styles.usersPage}>
            <Paginator currentPage={props.currentPage} onPageChanged={props.onPageChanged} 
            totalItmesCount={props.totalUsersCount} portionSize={props.portionUsersSize}
            pageSize={props.pageSize} />
            {props.users.map(u => <User user={u} followingInProgress={props.followingInProgress} 
            follow={props.follow} unfollow={props.unfollow} key={u.id} />)}
        </div>

    )
}


export default Users;