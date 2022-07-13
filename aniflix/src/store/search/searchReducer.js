import { SEARCH_ACTION_TYPE } from "./search.types";

const INITIAL_STATE = {
    isSearchModalOpen: false
}

export const searchReducer = (state=INITIAL_STATE,action) => {
    const {type,payload} = action;
    switch(type){
        case SEARCH_ACTION_TYPE.SET_SEARCH_MODAL:
            return{
                ...state,
                isSearchModalOpen: payload
            }
        default:
            return state    
    }
}