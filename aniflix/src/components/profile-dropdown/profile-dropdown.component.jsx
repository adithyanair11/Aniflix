import './profile-dropdown.styles.css';
import { Link } from 'react-router-dom';
import { Button } from '../custom-button/custom-button.component';
import { signOutUser } from '../../utils/firebase/firebase.utils';
import {useDispatch,useSelector} from 'react-redux';
import { selectCurrentUser } from '../../store/user/user.selector';
import { selectProfileDropDown } from '../../store/profile/profile.selector';
import { setProfileDropDown } from '../../store/profile/profile.action';
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
    return(
        <div className='drop-down'>
            <div className='view-sub'>View Subscription</div>
            <Link className= "link" to="/watchlist">
                <div className='watch-list'>Watch List</div>
            </Link>
            <Button onClick={logOutHandler}>log out</Button>
        </div>
    )
}