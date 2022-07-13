import { PROFILE_ACTION_TYPES } from "./profile.types";
import { createAction } from "../../utils/reducer/reducer.utils";

const addListItem = (watchList,itemToAdd) => {
    watchList.push(itemToAdd);
    return [...new Set(watchList)];
}

const removeListItem = (watchList,itemToRemove) => {
    return watchList.filter(item => item.id !== itemToRemove.id);
}

export const setProfileDropDown = (boolean) => {
    return createAction(PROFILE_ACTION_TYPES.SET_PROFILE_DROPDOWN,boolean);
}


export const addItemToList = (watchList,itemToAdd) => {
    const newItemList = addListItem(watchList,itemToAdd);
    return createAction(PROFILE_ACTION_TYPES.SET_WATCH_LIST,newItemList)
}

export const removeItemFromList = (watchList,itemToRemove) => {
    const newItemList = removeListItem(watchList,itemToRemove);
    return createAction(PROFILE_ACTION_TYPES.SET_WATCH_LIST,newItemList);
}