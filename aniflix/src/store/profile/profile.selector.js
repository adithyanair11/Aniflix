import {createSelector} from 'reselect';

const selectProfileReducer = (state) => state.profile;

export const selectProfileDropDown =  createSelector([selectProfileReducer],(profile) => profile.isDropDownOpen);

export const selectWatchList = createSelector([selectProfileReducer],(profile) => profile.watchList);
