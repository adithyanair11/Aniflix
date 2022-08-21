import './navigation.styles.css';
import { Fragment,useState,useEffect } from "react"
import {Link,Outlet} from 'react-router-dom';
import { ProfileDropDown } from '../../components/profile-dropdown/profile-dropdown.component';
import { selectCurrentUser } from '../../store/user/user.selector';
import {useDispatch,useSelector} from 'react-redux';
import { setProfileDropDown } from '../../store/profile/profile.action';
import { selectProfileDropDown,selectWatchList } from '../../store/profile/profile.selector';
import {setSearchModal} from '../../store/modal/modal.action';
import {selectSearchModal} from '../../store/modal/modal.selector';

import SearchIcon from '@mui/icons-material/Search';

export const Navigation = () => {
    const dispatch = useDispatch();
    const currentUser = useSelector(selectCurrentUser);
    const watchList = useSelector(selectWatchList);
    const profileDropDownState = useSelector(selectProfileDropDown);
    const [show,handleShow] = useState(false);
    const toggleProfileDropDown = () => dispatch(setProfileDropDown(!profileDropDownState));
    const searchIconState = useSelector(selectSearchModal);
    
    const transitionNav = () => {
        if(window.scrollY > 80){
            handleShow(true);
        }else{
            handleShow(false);
        }
    }
    const handleSearchModal = () => {
        dispatch(setSearchModal(!searchIconState));
    }
    useEffect(() => {
        window.addEventListener('scroll', transitionNav);
        return () => window.removeEventListener('scroll', transitionNav)
    },[])

    
    return(
        <Fragment>
            <div className={`nav-container ${show && 'nav-black'}`}>
            <Link to="/">
            <img className='logo' src="https://lh5.googleusercontent.com/proxy/zdqpZ5CWf1wLaq9WA3_qDBV4p9K1NlCMq3-eIlES5qMGA5-DZZo1UxXE02kw99ge7uZJEVlKcTGsI7WUSC6xcPCmm-fkqWPyDxTazeBW4TwBfOtkf1xuhcqKT_1EORYQ8gB0vovKgmFSg0ub4lYIDMtjUXp2PD28=s0-d" alt="logo"/>
            </Link>

            <div className="nav-links">
            {
                currentUser ?
                (<div onClick={handleSearchModal} className='search-icon'>
                <SearchIcon />
                </div>)
                :
                null
            }
                <Link to="/tv" className='link'>
                {
                    currentUser ?
                    (<span>TV SHOWS</span>)
                    :
                    null
                }
                </Link>
                <Link to="/movies" className='link'>
                {
                    currentUser ?
                    (<span>MOVIES</span>)
                    :
                    null
                }
                </Link>
                <div className="avatar-cover">
                {
                    currentUser ? 
                    (
                        <>
                        <img onClick={toggleProfileDropDown} className="nav-avatar" src="https://i.pinimg.com/736x/bf/c6/b9/bfc6b9efbf97c1d78cbbe71ed77f28e7.jpg" alt="avatar"/>
                        {
                            watchList.length > 0 ?
                            (<div className='count'>{watchList.length}</div>)
                            :
                            null
                        }
                        </>
                    )
                    :
                    null
                }
                </div>
            </div>
            {
                profileDropDownState ? 
                (<ProfileDropDown />)
                :
                null
            }
        </div>
        
        
        <Outlet />
        </Fragment>
    )
}