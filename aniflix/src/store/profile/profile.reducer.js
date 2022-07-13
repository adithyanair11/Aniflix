import { PROFILE_ACTION_TYPES } from "./profile.types";

const INITIAL_STATE = {
    isDropDownOpen: false,
    watchList: []
}

export const profileReducer = (state=INITIAL_STATE,action) => {
    const {type,payload} = action;
    switch(type){
        case PROFILE_ACTION_TYPES.SET_PROFILE_DROPDOWN:
            return{
                ...state,
                isDropDownOpen: payload
            }
        case PROFILE_ACTION_TYPES.SET_WATCH_LIST:
            return{
                ...state,
                watchList: payload
            }    
        default: 
            return state;
    }
}