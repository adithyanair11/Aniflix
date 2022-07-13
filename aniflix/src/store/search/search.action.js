import { createAction } from "../../utils/reducer/reducer.utils";
import { SEARCH_ACTION_TYPE } from "./search.types";

export const setSearchModal = (bool) => {
    return createAction(SEARCH_ACTION_TYPE.SET_SEARCH_MODAL,bool);
}