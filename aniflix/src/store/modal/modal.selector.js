import {createSelector} from 'reselect';


const selectSearchReducer = (state) => state.modal;


export const selectSearchModal = createSelector([selectSearchReducer],(modal) => modal.isSearchModalOpen);

