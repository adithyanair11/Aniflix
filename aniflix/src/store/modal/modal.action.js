import { createAction } from "../../utils/reducer/reducer.utils";
import { MODAL_ACTION_TYPE } from "./modal.types";

export const setSearchModal = (bool) => {
    return createAction(MODAL_ACTION_TYPE.SET_SEARCH_MODAL,bool);
}

