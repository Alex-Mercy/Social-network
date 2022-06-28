import usersReducer, { actions } from "./usersReducer";
import { initialStateType } from "./usersReducer";

let state: initialStateType;

beforeEach(() => {
 state = {
    users: [{
        id: 0,
        name: 'Alex 0',
        followed: false,
        photos: {
            small: null,
            large: null,
        },
        status: 'status 0'
    },
    {
        id: 1,
        name: 'Alex 1',
        followed: false,
        photos: {
            small: null,
            large: null,
        },
        status: 'status 1'
    },
    {
        id: 2,
        name: 'Alex 2',
        followed: true,
        photos: {
            small: null,
            large: null,
        },
        status: 'status 2'
    },
    {
        id: 3,
        name: 'Alex 3',
        followed: true,
        photos: {
            small: null,
            large: null,
        },
        status: 'status 3'
    },
],
    pageSize: 10,
    totalUsersCount: 0,
    portionUsersSize: 10,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
};
})


test('follow success', () => {
    const newState = usersReducer(state, actions.followSucces(1))

    expect(newState.users[0].followed).toBeFalsy;
    expect(newState.users[1].followed).toBeTruthy;
})

test('unFollow success', () => {
    const newState = usersReducer(state, actions.unfollowSucces(3))

    expect(newState.users[2].followed).toBeTruthy;
    expect(newState.users[3].followed).toBeFalsy;
})