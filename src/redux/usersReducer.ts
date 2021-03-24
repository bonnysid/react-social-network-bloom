import {usersAPI} from "../API/API"
import {ApiMethod, DispatchType, IAction, Users} from "../utils/interfaces/interfaces"
import {UsersActionTypes} from "./action-types/users";



const initialState = {
    all: [] as Users,
    totalCountUsers: 0,
    pageSize: 8,
    page: 1,
    isFetching: false,
    followingProcess: [] as number[]
}

export type UsersState = typeof initialState

export type FollowSuccessAction = IAction<typeof UsersActionTypes.FOLLOW, { userId: number }>
export type UnfollowSuccessAction = IAction<typeof UsersActionTypes.UNFOLLOW, { userId: number }>
export type SetUsersAction = IAction<typeof UsersActionTypes.SET_USERS, { usersData: Users }>
export type SetTotalCountUsersAction = IAction<typeof UsersActionTypes.SET_TOTAL_COUNT_USERS, { count: number }>
export type SetPageAction = IAction<typeof UsersActionTypes.SET_PAGE, { page: number }>
export type ResetUsersAction = IAction<typeof UsersActionTypes.RESET_USERS, null>
export type ToggleFetchingAction = IAction<typeof UsersActionTypes.TOGGLE_FETCHING, { isFetching: boolean }>
export type ToggleFollowingProcessAction = IAction<typeof UsersActionTypes.TOGGLE_FOLLOWING_PROCESS, { userId: number, isFollowing: boolean }>

export type UsersAction =
    FollowSuccessAction
    | UnfollowSuccessAction
    | SetPageAction
    | SetTotalCountUsersAction
    | SetUsersAction
    | ResetUsersAction
    | ToggleFollowingProcessAction
    | ToggleFetchingAction

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

const usersReducer = (state = initialState, action: UsersAction): UsersState => {
    switch (action.type) {
        case UsersActionTypes.FOLLOW:
            return {
                ...state,
                all: state.all.map(u => {
                    if (u.id === action.payload.userId) {
                        u.followed = true
                    }
                    return u
                })
            }
        case UsersActionTypes.UNFOLLOW:
            return {
                ...state,
                all: state.all.map(u => {
                    if (u.id === action.payload.userId) {
                        u.followed = false
                    }
                    return u
                })
            }
        case UsersActionTypes.SET_USERS:
            return {
                ...state,
                all: [...state.all, ...action.payload.usersData]
            }
        case UsersActionTypes.SET_TOTAL_COUNT_USERS:
            return {
                ...state,
                totalCountUsers: action.payload.count
            }
        case UsersActionTypes.SET_PAGE:
            return {
                ...state,
                page: action.payload.page
            }
        case UsersActionTypes.RESET_USERS:
            return {
                ...state,
                all: []
            }
        case UsersActionTypes.TOGGLE_FETCHING:
            return {
                ...state,
                isFetching: action.payload.isFetching
            }
        case UsersActionTypes.TOGGLE_FOLLOWING_PROCESS:
            return {
                ...state,
                followingProcess: action.payload.isFollowing ?
                    [...state.followingProcess, action.payload.userId]
                    :
                    state.followingProcess.filter(id => id !== action.payload.userId)
            }
        default:
            return state
    }
}

export default usersReducer