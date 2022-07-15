import {combineReducers} from 'redux';
import { userReducer } from './user/user-reducer';
import { profileReducer } from './profile/profile.reducer';
import { modalReducer } from './modal/modalReducer';

export const rootReducer = combineReducers({
    user: userReducer,
    profile: profileReducer,
    modal: modalReducer
});