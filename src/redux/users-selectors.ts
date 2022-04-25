import { createSelector } from "reselect";
import { userType } from "../types/types";
import { stateType } from "./redux-store";

export const getUsersSelector = (state: stateType) => { return state.usersPage.users };
export const getUsers = createSelector(getUsersSelector,
    (users: Array<userType>) => {
        return users.filter(u => true);
    })

export const getPageSize = (state: stateType) => { return state.usersPage.pageSize };
export const getTotalUsersCount = (state: stateType) => { return state.usersPage.totalUsersCount };
export const getportionUsersSize = (state: stateType) => { return state.usersPage.portionUsersSize };
export const getCurrentPage = (state: stateType) => { return state.usersPage.currentPage };
export const getIsFetching = (state: stateType) => { return state.usersPage.isFetching }
export const getFollowingInProgress = (state: stateType) => { return state.usersPage.followingInProgress };

