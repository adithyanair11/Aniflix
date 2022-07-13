import './banner.styles.css';
import { Button } from '../custom-button/custom-button.component';
import { useState,useEffect } from 'react';
import { fetchUrls } from '../../utils/api/fetchRequests';
import { useDispatch,useSelector } from 'react-redux';
import { addItemToList } from '../../store/profile/profile.action';
import { selectWatchList } from '../../store/profile/profile.selector';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import Toastify from 'toastify-js';
import "toastify-js/src/toastify.css";
export const Banner = ({fetchUrl}) => {
    const [banner,setBanner] = useState([]);
    const url = fetchUrl
    useEffect(() => {
        const fetchUrl = async() => {
            const results = await fetchUrls(url);
            setBanner(results[Math.floor(Math.random() * results.length - 1)]);
            return results;
        }
        fetchUrl();
    },[])
    const dispatch = useDispatch();
    const watchList = useSelector(selectWatchList);
    const watchListHandler = () => {
        dispatch(addItemToList(watchList,banner));
        Toastify({
            text: "Added To Watch List",
            duration: 3000,
            close: false,
            gravity: "bottom", 
            position: "center", 
            style: {
                backgroundColor: "#a40606",
                backgroundImage: "linear-gradient(315deg, #a40606 0%, #d98324 74%)"
            },
          }).showToast();
    }
    const truncate = (string,n) => {
        return string?.length > n ? string.substr(0,n-1) + '...' : string;
    }
    return(
        <div className='banner' style={{
            backgroundImage: `url("https://image.tmdb.org/t/p/original/${banner?.backdrop_path}")`,
            backgroundSize: "cover",
            backgroundPosition: "top center",
            backgroundRepeat: "no-repeat"
        }}>
            <div className='banner-contents'>
                <h1 className='title'>{banner?.title || banner?.name}</h1>
                <div className='banner-buttons'>
                    <Button><span><PlayCircleOutlineIcon /></span>play now</Button>
                    <Button onClick={watchListHandler}><span><AddCircleOutlineIcon /></span>watch list</Button>
                </div>
                <div className='description'>
                {
                    truncate(banner?.overview,150)
                }
                </div>
            </div>
            <div className='banner-fade'/>
        </div>
    )
}