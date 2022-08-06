import './profile-dropdown.styles.css';
import { Link } from 'react-router-dom';
import { Button } from '../custom-button/custom-button.component';
import { signOutUser } from '../../utils/firebase/firebase.utils';
import {useDispatch,useSelector} from 'react-redux';
import { selectCurrentUser } from '../../store/user/user.selector';
import { selectProfileDropDown } from '../../store/profile/profile.selector';
import { setProfileDropDown } from '../../store/profile/profile.action';
import { useNavigate } from 'react-router-dom';
export const ProfileDropDown = () => {
    const dispatch = useDispatch()
    const currentUser = useSelector(selectCurrentUser);
    const dropDownState = useSelector(selectProfileDropDown);
    const logOutHandler = async() => {
        await signOutUser();
        if(currentUser){
            return dispatch(setProfileDropDown(!dropDownState));
        }
    }
    const navigate = useNavigate();
    const goToHandler = () => {
        navigate('/watchlist');
        dispatch(setProfileDropDown(!dropDownState));
    }
    return(
        <div className='drop-down'>
            <Button onClick={goToHandler}>Watch List</Button>
            <Button onClick={logOutHandler}>log out</Button>
        </div>
    )
}