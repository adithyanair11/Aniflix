import {createSelector} from 'reselect'

const selectuserReducer = (state) => state.user;

export const selectCurrentUser = createSelector([selectuserReducer],(user) => user.currentUser);