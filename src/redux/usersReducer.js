import { followAPI, usersAPI } from "../api/api";
import { updateObjectInArray } from "../components/utils/object-helper";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRNET_PAGE = 'SET_CURRNET_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';

let initialState = {
    users: [],
    pageSize: 100,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
};


const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", {followed: true})
            }
        case UNFOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", {followed: false})
            }
        case SET_USERS: {
            return {
                ...state,
                users: action.users
            }
        }
        case SET_CURRNET_PAGE: {
            return {
                ...state,
                currentPage: action.currentPage
            }
        }
        case SET_TOTAL_USERS_COUNT: {
            return {
                ...state,
                totalUsersCount: action.count
            }
        }
        case TOGGLE_IS_FETCHING: {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id != action.userId)
            }
        }
        default:
            return state;
    }
}

export const followSucces = (userId) => ({ type: FOLLOW, userId })
export const unfollowSucces = (userId) => ({ type: UNFOLLOW, userId })
export const setUsers = (users) => ({ type: SET_USERS, users })
export const setCurrentPage = (currentPage) => ({ type: SET_CURRNET_PAGE, currentPage })
export const setTotalUsersCount = (totalUsersCount) => ({ type: SET_TOTAL_USERS_COUNT, count: totalUsersCount })
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching })
export const toggleFollowingProgress = (isFetching, userId) =>
    ({ type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId })

export const requestUsers = (currentPage, pageSize) => {
    return async (dispatch) => {

        dispatch(toggleIsFetching(true));

        const data = await usersAPI.getUsers(currentPage, pageSize);
            dispatch(toggleIsFetching(false));
            dispatch(setUsers(data.items));
            dispatch(setTotalUsersCount(data.totalCount));

    }
}

export const followUnfollowFlow = async (dispatch, userId, apiMethod, actionCreator) => {
        dispatch(toggleFollowingProgress(true, userId))
        const data = await apiMethod(userId);
            if (data.resultCode == 0) {
                dispatch(actionCreator(userId));
            }
            dispatch(toggleFollowingProgress(false, userId))
    }

export const follow = (userId) => {
    return async (dispatch) => {
        followUnfollowFlow(dispatch, userId, followAPI.followUsers.bind(followAPI), followSucces);
    }
}
export const unfollow = (userId) => {
    return async (dispatch) => {
        followUnfollowFlow(dispatch, userId, followAPI.unfollowUsers.bind(followAPI), unfollowSucces);
    }
}


export default usersReducer;