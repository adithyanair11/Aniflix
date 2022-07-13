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
export const CategoryItemPage = ({type}) => {
    const [categoryItemData, setCategoryItemData] = useState({});
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
    },[])
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
    return(
        <div className='category-item-page'>
        <div className='banner large' style={{
            backgroundImage: `url("https://image.tmdb.org/t/p/original/${categoryItemData?.backdrop_path}")`,
            backgroundSize: "cover",
            backgroundPosition: "top center",
            backgroundRepeat: "no-repeat"
        }}>
            <div className='banner-contents'>
                <h1 className='title'>{categoryItemData?.title || categoryItemData?.name}</h1>
                <div className='banner-buttons'>
                    <Button><span><PlayCircleOutlineIcon /></span>play now</Button>
                    <Button onClick={watchListHandler}><span><AddCircleOutlineIcon /></span>watch list</Button>
                </div>
                <div className='description'>
                {
                    truncate(categoryItemData?.overview,150)
                }
                </div>
            </div>
            <div className='banner-fade'/>
        </div>

        </div>
    )
} 