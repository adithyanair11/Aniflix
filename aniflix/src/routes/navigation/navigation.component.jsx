import './navigation.styles.css';
import { Fragment,useState,useEffect } from "react"
import {Link,Outlet} from 'react-router-dom';
export const Navigation = () => {

    const [show,handleShow] = useState(false);

    const transitionNav = () => {
        if(window.scrollY > 80){
            handleShow(true);
        }else{
            handleShow(false);
        }
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
                <Link to="/tv" className='link'>
                    <span>TV SHOWS</span>
                </Link>
                <Link to="/movies" className='link'>
                    <span>MOVIES</span>
                </Link>
                <div className="avatar-cover">
                    <img className="nav-avatar" src="https://i.pinimg.com/736x/bf/c6/b9/bfc6b9efbf97c1d78cbbe71ed77f28e7.jpg" alt="avatar"/>
                </div>
            </div>
        </div>
        <Outlet />
        </Fragment>
    )
}