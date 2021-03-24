import {usersAPI} from "../../API/API"
import {ApiMethod, DispatchType, IAction, Users} from "../../utils/interfaces/interfaces"
import {UsersActionTypes} from "../action-types/users";



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