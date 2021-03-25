import {UsersActionTypes} from "../action-types/users-actions";
import {ApiMethod, DispatchType} from "../../interfaces/other-interfaces";
import {usersAPI} from "../../API/API";
import {
    FollowSuccessAction, ResetUsersAction,
    SetPageAction,
    SetTotalCountUsersAction,
    SetUsersAction, ToggleFetchingAction, ToggleFollowingProcessAction,
    UnfollowSuccessAction
} from "../reducers/users-reducer";
import {Users} from "../../interfaces/users-interfaces";

export const followSuccess = (userId: number): FollowSuccessAction => ({
    type: UsersActionTypes.FOLLOW,
    payload: {userId}
})
export const unfollowSuccess = (userId: number): UnfollowSuccessAction => ({
    type: UsersActionTypes.UNFOLLOW,
    payload: {userId}
})
export const setUsers = (usersData: Users): SetUsersAction => ({type: UsersActionTypes.SET_USERS, payload: {usersData}})
export const setTotalCountUsers = (count: number): SetTotalCountUsersAction => ({
    type: UsersActionTypes.SET_TOTAL_COUNT_USERS,
    payload: {count}
})
export const setPage = (page: number): SetPageAction => ({type: UsersActionTypes.SET_PAGE, payload: {page}})
export const resetUsers = (): ResetUsersAction => ({type: UsersActionTypes.RESET_USERS, payload: null})
export const toggleFetching = (isFetching: boolean): ToggleFetchingAction => ({
    type: UsersActionTypes.TOGGLE_FETCHING,
    payload: {isFetching}
})
export const toggleFollowingProcess = (isFollowing: boolean, userId: number): ToggleFollowingProcessAction => ({
    type: UsersActionTypes.TOGGLE_FOLLOWING_PROCESS,
    payload: {userId, isFollowing}
})

export const requestUsers = (currentPage: number, pageSize: number) => async (dispatch: DispatchType) => {
    dispatch(toggleFetching(true))
    const data = await usersAPI.getUsers(currentPage, pageSize)

    dispatch(toggleFetching(false))
    dispatch(setUsers(data.items))
    dispatch(setTotalCountUsers(data.totalCount))
}

const followUnfollowFlow = async (dispatch: DispatchType, id: number, apiMethod: ApiMethod, actionCreator: typeof followSuccess | typeof unfollowSuccess) => {
    dispatch(toggleFollowingProcess(true, id))
    const data = await apiMethod(id)
    dispatch(toggleFollowingProcess(false, id))
    if (data.resultCode === 0) dispatch(actionCreator(id))
}

export const follow = (id: number) => async (dispatch: DispatchType) => followUnfollowFlow(dispatch, id, usersAPI.followUser.bind(usersAPI), followSuccess)

export const unfollow = (id: number) => async (dispatch: DispatchType) => followUnfollowFlow(dispatch, id, usersAPI.unfollowUser.bind(usersAPI), unfollowSuccess)
