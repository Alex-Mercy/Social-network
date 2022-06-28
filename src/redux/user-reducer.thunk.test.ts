import { ApiResponseType, ResultCodesEnum } from "../api/api";
import { followAPI } from "../api/follow-api";
import { actions, follow, unfollow } from "./usersReducer"

jest.mock('../api/users-api')

const dispatchMock = jest.fn();
const getStateMock = jest.fn();

beforeEach(() => {
    dispatchMock.mockClear();
    getStateMock.mockClear();
    followAPIMock.followUsers.mockClear();
    followAPIMock.unfollowUsers.mockClear();
    
})

const followAPIMock = followAPI as jest.Mocked<typeof followAPI>;

const result: ApiResponseType = {
    resultCode: ResultCodesEnum.Succes,
    messages: [],
    data: {}
}


followAPIMock.followUsers.mockReturnValue(Promise.resolve(result));
followAPIMock.unfollowUsers.mockReturnValue(Promise.resolve(result));

test('succes follow thunk', async ()  => {
    const thunk = follow(1)

    await thunk(dispatchMock, getStateMock, {})
    expect(dispatchMock).toBeCalledTimes(3);
    expect(dispatchMock).toHaveBeenCalledWith(1, actions.toggleFollowingProgress(true, 1))
    expect(dispatchMock).toHaveBeenCalledWith(2, actions.followSucces(1))
    expect(dispatchMock).toHaveBeenCalledWith(3, actions.toggleFollowingProgress(false, 1))
})  

test('succes unfollow thunk', async ()  => {
    const thunk = unfollow(1)


    await thunk(dispatchMock, getStateMock, {})
    expect(dispatchMock).toBeCalledTimes(3);
    expect(dispatchMock).toHaveBeenCalledWith(1, actions.toggleFollowingProgress(true, 1))
    expect(dispatchMock).toHaveBeenCalledWith(2, actions.unfollowSucces(1))
    expect(dispatchMock).toHaveBeenCalledWith(3, actions.toggleFollowingProgress(false, 1))
})  