import usersReducer, {
    followSuccess,
    resetUsers, setPage,
    setTotalCountUsers,
    setUsers,
    toggleFetching, toggleFollowingProcess,
    unfollowSuccess
} from "../redux/usersReducer";

const state = {
    all: [
        { id: 3, name: 'Jason', followed: false},
        { id: 4, name: 'Jason', followed: true}
    ],
    isFetching: false,
    totalCountUsers: 2,
    followingProcess: []
}

const updateState = (action) => usersReducer(state, action);

it('user should be followed', () => {
    const newState = updateState(followSuccess(3))
    expect(newState.all[0].followed).toBeTruthy();
})

it('user should be unfollowed', () => {
    const newState = updateState(unfollowSuccess(4))
    expect(newState.all[0].followed).toBeFalsy();
})

it('users should be added', () => {
    const newState = updateState(setUsers([{}, {}]))
    expect(newState.all.length).toBe(4);
})

it('users should be deleted', () => {
    const newState = updateState(resetUsers())
    expect(newState.all.length).toBe(0);
})

it('isFetching should be truthy', () => {
    const newState = updateState(toggleFetching(true))
    expect(newState.isFetching).toBeTruthy();
})

it('isFetching should be falsy', () => {
    const newState = updateState(toggleFetching(false))
    expect(newState.isFetching).toBeFalsy();
})

it('total count of users should be correct', () => {
    const newState = updateState(setTotalCountUsers(6));
    expect(newState.totalCountUsers).toBe(6)
})

it('page should be correct', () => {
    const newState = updateState(setPage(3))
    expect(newState.page).toBe(3);
})

it('following process should be correct', () => {
    const newState = updateState(toggleFollowingProcess(true, 4))
    expect(newState.followingProcess[0]).toBe(4);
})
