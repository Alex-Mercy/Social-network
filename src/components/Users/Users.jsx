import React from "react";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";
import { Container, Grid } from "@material-ui/core";


const Users = (props) => {
    return (
        <Container>
            <Grid container spacing={4}>
                {props.users.map(u => 
                    <User user={u} followingInProgress={props.followingInProgress}
                    follow={props.follow} unfollow={props.unfollow} key={u.id} />
                )}

            </Grid>
            <Paginator currentPage={props.currentPage} onPageChanged={props.onPageChanged}
                totalItmesCount={props.totalUsersCount} portionSize={props.portionUsersSize}
                pageSize={props.pageSize} />
        </Container>



    )
}


export default Users;