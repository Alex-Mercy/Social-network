import { Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import { followAPI, usersAPI } from "../api/api";
import { updateObjectInArray } from "../components/utils/object-helper";
import { userType } from "../types/types";
import { InferActionsTypes, StateType } from "./redux-store";


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


const usersReducer = (state = initialState, action: ActionTypes) => {
    switch (action.type) {
        case 'FOLLOW':
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", { followed: true })
            }
        case 'UNFOLLOW':
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", { followed: false })
            }
        case 'SET_USERS': {
            return {
                ...state,
                users: action.users
            }
        }
        case 'SET_CURRNET_PAGE': {
            return {
                ...state,
                currentPage: action.currentPage
            }
        }
        case 'SET_TOTAL_USERS_COUNT': {
            return {
                ...state,
                totalUsersCount: action.count
            }
        }
        case 'TOGGLE_IS_FETCHING': {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }
        case 'TOGGLE_IS_FOLLOWING_PROGRESS': {
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

type ActionTypes = InferActionsTypes<typeof actions>

export const actions = {
    followSucces: (userId: number) => ({ type: 'FOLLOW', userId } as const),
    unfollowSucces: (userId: number) => ({ type: 'UNFOLLOW', userId } as const),
    setUsers: (users: Array<userType>) => ({ type: 'SET_USERS', users } as const),
    setCurrentPage: (currentPage: number) => ({ type: 'SET_CURRNET_PAGE', currentPage } as const),
    setTotalUsersCount: (totalUsersCount: number) => ({ type: 'SET_TOTAL_USERS_COUNT', count: totalUsersCount } as const),
    toggleIsFetching: (isFetching: boolean) => ({ type: 'TOGGLE_IS_FETCHING', isFetching } as const),
    toggleFollowingProgress: (isFetching: boolean, userId: number) => ({ type: 'TOGGLE_IS_FOLLOWING_PROGRESS', isFetching, userId } as const)
}


type dispatchType = Dispatch<ActionTypes>
type thunkType = ThunkAction<Promise<void>, StateType, unknown, ActionTypes>

export const requestUsers =
    (currentPage: number, pageSize: number): thunkType => {
        return async (dispatch) => {
            dispatch(actions.toggleIsFetching(true));
            const data = await usersAPI.getUsers(currentPage, pageSize);
            dispatch(actions.toggleIsFetching(false));
            dispatch(actions.setUsers(data.items));
            dispatch(actions.setTotalUsersCount(data.totalCount));

        }
    }

export const _followUnfollowFlow =
    async (
        dispatch: dispatchType,
        userId: number,
        apiMethod: any,
        actionCreator: (userId: number) => ActionTypes
    ) => {
        dispatch(actions.toggleFollowingProgress(true, userId))
        const data = await apiMethod(userId);
        if (data.resultCode == 0) {
            dispatch(actionCreator(userId));
        }
        dispatch(actions.toggleFollowingProgress(false, userId))
    }

export const follow = (userId: number): thunkType => {
    return async (dispatch) => {
        _followUnfollowFlow(dispatch, userId, followAPI.followUsers.bind(followAPI), actions.followSucces);
    }
}
export const unfollow = (userId: number): thunkType => {
    return async (dispatch) => {
        _followUnfollowFlow(dispatch, userId, followAPI.unfollowUsers.bind(followAPI), actions.unfollowSucces);
    }
}


export default usersReducer;