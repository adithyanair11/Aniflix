import {createSelector} from 'reselect';


const selectSearchReducer = (state) => state.search;


export const selectSearchModal = createSelector([selectSearchReducer],(search) => search.isSearchModalOpen);