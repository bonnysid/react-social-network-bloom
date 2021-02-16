import {createSelector} from 'reselect';

const getUsersSelector = (state) => state.users.all;
export const getUsers = createSelector(getUsersSelector, (users) => {
    return users.filter(u => true); //test
})

const getPageSizeSelector = (state) => state.users.pageSize;
export const getPageSize = createSelector(getPageSizeSelector, (pageSize) => pageSize);

const getTotalCountUsersSelector = (state) => state.users.totalCountUsers;
export const getTotalCountUsers = createSelector(getTotalCountUsersSelector, (totalCount) => totalCount);

const getPageSelector = (state) => state.users.page;
export const getPage= createSelector(getPageSelector, (page) => page);


const getIsFetchingSelector = (state) => state.users.isFetching;
export const getIsFetching = createSelector(getIsFetchingSelector, (isFetching) => isFetching);

const getFollowingProcessSelector = (state) => state.users.followingProcess;
export const getFollowingProcess = createSelector(getFollowingProcessSelector, followingProcess => followingProcess);

