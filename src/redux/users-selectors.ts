import { createSelector } from "reselect";
import { UserType } from "../types/types";
import { StateType } from "./store";

export const getUsersSelector = (state: StateType) => { return state.usersPage.users };
export const getUsers = createSelector(getUsersSelector,
    (users: Array<UserType>) => {
        return users.filter(u => true);
    })

export const getPageSize = (state: StateType) => { return state.usersPage.pageSize };
export const getTotalUsersCount = (state: StateType) => { return state.usersPage.totalUsersCount };
export const getportionUsersSize = (state: StateType) => { return state.usersPage.portionUsersSize };
export const getCurrentPage = (state: StateType) => { return state.usersPage.currentPage };
export const getIsFetching = (state: StateType) => { return state.usersPage.isFetching }
export const getFollowingInProgress = (state: StateType) => { return state.usersPage.followingInProgress };

