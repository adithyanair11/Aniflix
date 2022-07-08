import './banner.styles.css';
import { Button } from '../custom-button/custom-button.component';
import { useState,useEffect } from 'react';
import { fetchUrls } from '../../utils/api/fetchRequests';
export const Banner = ({fetchUrl}) => {
    const [show,setShow] = useState([]);
    const url = fetchUrl
    useEffect(() => {
        const fetchUrl = async() => {
            const results = await fetchUrls(url);
            setShow(results[Math.floor(Math.random() * results.length - 1)])
        }
        fetchUrl();
    },[])

    const truncate = (string,n) => {
        return string?.length > n ? string.substr(0,n-1) + '...' : string;
    }
    return(
        <div className='banner' style={{
            backgroundImage: `url("https://image.tmdb.org/t/p/original/${show?.backdrop_path}")`,
            backgroundSize: "cover",
            backgroundPosition: "top center",
            backgroundRepeat: "no-repeat"
        }}>
            <div className='banner-contents'>
                <h1 className='title'>{show?.title || show?.name}</h1>
                <div className='banner-buttons'>
                    <Button>play now</Button>
                    <Button>add to watch list</Button>
                </div>
                <div className='description'>
                {
                    truncate(show?.overview,150)
                }
                </div>
            </div>
            <div className='banner-fade'/>
        </div>
    )
}