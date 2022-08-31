import './category-item-page.styles.css';
import { useParams } from 'react-router-dom';
import { useEffect,useState } from 'react';
import { API_KEY,baseUrl } from '../../utils/api/requests';
import { Button } from '../custom-button/custom-button.component';
import { useDispatch,useSelector } from 'react-redux';
import { addItemToList } from '../../store/profile/profile.action';
import { selectWatchList } from '../../store/profile/profile.selector';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import Toastify from 'toastify-js';
import "toastify-js/src/toastify.css";
import {motion,Variants} from 'framer-motion';

export const CategoryItemPage = ({type}) => {
    const [categoryItemData, setCategoryItemData] = useState({});
    const [desc,setDesc] = useState(false);
    const {id} = useParams();
    const categoryUrl = `${baseUrl}/${type}/${id}?api_key=${API_KEY}&language=en-US`;

    useEffect(() => {
        const categoryItemResult = async() => {
            try{
                const response = await fetch(categoryUrl);
                const data = await response.json();
                setCategoryItemData(data);
                return data;
            }catch(err){
                console(err);
            }

        }
        categoryItemResult();
    },[id])
    const dispatch = useDispatch();
    const watchList = useSelector(selectWatchList);
    const watchListHandler = () => {
        dispatch(addItemToList(watchList,categoryItemData));
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
    const textAnimate = {
        offscreen: {y:100,opacity:0},
        onscreen: {
            y: 0,
            transition: {type:"spring"},
            bounce:0.4,
            duration:3,
            opacity:1
        }
    }
    const handleShow = () => {
        setDesc(!desc)
    }
    return(
        <div className='category-item-page'>
        <div className='banner large' style={{
            backgroundImage: `url("https://image.tmdb.org/t/p/original/${categoryItemData?.backdrop_path}")`,
            backgroundSize: "cover",
            backgroundPosition: "top center",
            backgroundRepeat: "no-repeat"
        }}>
            <motion.div 
            className='banner-contents'
            initial={"offscreen"}
            animate={"onscreen"}
            transition={{staggerChildren:0.5}}>
                <motion.h1 
                className='title' 
                variants={textAnimate}>{categoryItemData?.title || categoryItemData?.name}</motion.h1>
                <motion.div 
                className='banner-buttons'
                variants={textAnimate}>
                    <Button><span><PlayCircleOutlineIcon /></span>play now</Button>
                    <Button onClick={watchListHandler}><span><AddCircleOutlineIcon /></span>watch list</Button>
                </motion.div>
                <motion.div 
                className='item-description'
                variants={textAnimate}
                onClick={handleShow}>
                {
                    desc ?
                    (categoryItemData?.overview)
                    :
                    (truncate(categoryItemData?.overview,150))
                }
                </motion.div>
            </motion.div>
            <div className='banner-fade'/>
        </div>

        </div>
    )
} 


