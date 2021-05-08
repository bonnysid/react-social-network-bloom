import {UsersActionTypes} from "../action-types/users-actions";
import {ApiMethod} from "../../interfaces/other-interfaces";
import {usersAPI} from "../../api/api";
import {
    FollowSuccessAction, ResetUsersAction,
    SetPageAction,
    SetTotalCountUsersAction,
    SetUsersAction, ToggleFetchingAction, ToggleFollowingProcessAction,
    UnfollowSuccessAction, UsersAction
} from "../reducers/users-reducer";
import {Users} from "../../interfaces/users-interfaces";
import {ThunkAction} from "redux-thunk";
import {State} from "../redux-store";
import {Dispatch} from "redux";

export type UsersThunk = ThunkAction<Promise<void>, State, undefined, UsersAction>

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

export const requestUsers = (currentPage: number, pageSize: number): UsersThunk => async (dispatch, getState) => {
    dispatch(toggleFetching(true))
    const data = await usersAPI.getUsers(currentPage, pageSize)

    dispatch(toggleFetching(false))
    dispatch(setUsers(data))
    dispatch(setTotalCountUsers(data.length))
}

const followUnfollowFlow = async (dispatch: Dispatch<UsersAction>, id: number, apiMethod: ApiMethod, actionCreator:(id: number) => FollowSuccessAction | UnfollowSuccessAction) => {
    dispatch(toggleFollowingProcess(true, id))
    const data = await apiMethod(id)
    dispatch(toggleFollowingProcess(false, id))
    dispatch(actionCreator(id))
}

export const follow = (id: number): UsersThunk => async (dispatch, getState) => followUnfollowFlow(dispatch, id, usersAPI.followUser.bind(usersAPI), followSuccess)

export const unfollow = (id: number): UsersThunk => async (dispatch, getState) => followUnfollowFlow(dispatch, id, usersAPI.unfollowUser.bind(usersAPI), unfollowSuccess)
