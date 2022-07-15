import { MODAL_ACTION_TYPE } from "./modal.types";

const INITIAL_STATE = {
    isSearchModalOpen: false,
}

export const modalReducer = (state=INITIAL_STATE,action) => {
    const {type,payload} = action;
    switch(type){
        case MODAL_ACTION_TYPE.SET_SEARCH_MODAL:
            return{
                ...state,
                isSearchModalOpen: payload
            }  
        default:
            return state    
    }
}