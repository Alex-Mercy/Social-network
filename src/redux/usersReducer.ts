import { Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import { followAPI, usersAPI } from "../api/api";
import { updateObjectInArray } from "../components/utils/object-helper";
import { userType } from "../types/types";
import { stateType } from "./redux-store";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRNET_PAGE = 'SET_CURRNET_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';


let initialState = {
    users: [] as Array<userType>,
    pageSize: 10,
    totalUsersCount: 0,
    portionUsersSize: 10,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [] as Array<number> // array of users id
};
export type initialStateType = typeof initialState;


const usersReducer = (state = initialState, action: actionTypes) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", { followed: true })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", { followed: false })
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

type actionTypes =
    followSuccesActionType
    | unfollowSuccesActionType
    | setUsersActionType
    | setCurrentPageActionType
    | setTotalUsersCountActionType
    | toggleIsFetchingActionType
    | toggleFollowingProgressActionType

type followSuccesActionType = { type: typeof FOLLOW, userId: number }
export const followSucces = (userId: number): followSuccesActionType => ({
    type: FOLLOW, userId
})

type unfollowSuccesActionType = { type: typeof UNFOLLOW, userId: number }
export const unfollowSucces = (userId: number): unfollowSuccesActionType => ({
    type: UNFOLLOW, userId
})

type setUsersActionType = { type: typeof SET_USERS, users: Array<userType> }
export const setUsers = (users: Array<userType>): setUsersActionType => ({
    type: SET_USERS, users
})

type setCurrentPageActionType = { type: typeof SET_CURRNET_PAGE, currentPage: number }
export const setCurrentPage = (currentPage: number): setCurrentPageActionType => ({
    type: SET_CURRNET_PAGE, currentPage
})

type setTotalUsersCountActionType = { type: typeof SET_TOTAL_USERS_COUNT, count: number }
export const setTotalUsersCount = (totalUsersCount: number): setTotalUsersCountActionType => ({
    type: SET_TOTAL_USERS_COUNT, count: totalUsersCount
})

type toggleIsFetchingActionType = { type: typeof TOGGLE_IS_FETCHING, isFetching: boolean }
export const toggleIsFetching = (isFetching: boolean): toggleIsFetchingActionType => ({
    type: TOGGLE_IS_FETCHING, isFetching
})

type toggleFollowingProgressActionType = {
    type: typeof TOGGLE_IS_FOLLOWING_PROGRESS, isFetching: boolean, userId: number
}
export const toggleFollowingProgress = (isFetching: boolean, userId: number):
    toggleFollowingProgressActionType =>
    ({ type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId })

// type getStateType = () => stateType
type dispatchType = Dispatch<actionTypes>
type thunkType = ThunkAction<Promise<void>, stateType, unknown, actionTypes>

export const requestUsers =
    (currentPage: number, pageSize: number): thunkType => {
        return async (dispatch) => {
            dispatch(toggleIsFetching(true));
            const data = await usersAPI.getUsers(currentPage, pageSize);
            dispatch(toggleIsFetching(false));
            dispatch(setUsers(data.items));
            dispatch(setTotalUsersCount(data.totalCount));

        }
    }

export const _followUnfollowFlow =
    async (
        dispatch: dispatchType,
        userId: number,
        apiMethod: any,
        actionCreator: (userId: number) => followSuccesActionType | unfollowSuccesActionType
    ) => {
        dispatch(toggleFollowingProgress(true, userId))
        const data = await apiMethod(userId);
        if (data.resultCode == 0) {
            dispatch(actionCreator(userId));
        }
        dispatch(toggleFollowingProgress(false, userId))
    }

export const follow = (userId: number): thunkType => {
    return async (dispatch) => {
        _followUnfollowFlow(dispatch, userId, followAPI.followUsers.bind(followAPI), followSucces);
    }
}
export const unfollow = (userId: number): thunkType => {
    return async (dispatch) => {
        _followUnfollowFlow(dispatch, userId, followAPI.unfollowUsers.bind(followAPI), unfollowSucces);
    }
}


export default usersReducer;