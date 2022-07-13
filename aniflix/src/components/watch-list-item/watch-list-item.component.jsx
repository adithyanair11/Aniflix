import './watch-list-item.styles.css';
import { Button } from '../custom-button/custom-button.component';
import { useSelector,useDispatch } from 'react-redux';
import { selectWatchList } from '../../store/profile/profile.selector';
import { removeItemFromList } from '../../store/profile/profile.action';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import Toastify from 'toastify-js';
import "toastify-js/src/toastify.css";
export const WatchListItem = ({image,name,item}) => {
    const dispatch = useDispatch()
    const watchlist = useSelector(selectWatchList);
    const removeItem = () => {
        dispatch(removeItemFromList(watchlist,item));
        Toastify({
            text: "Removed",
            duration: 1000,
            close: false,
            gravity: "bottom", 
            position: "center", 
            style: {
                backgroundColor: "#3f0d12",
                backgroundImage: "linear-gradient(315deg, #3f0d12 0%, #a71d31 74%)"
            }
          }).showToast();
        }
          
    return(
        <div className='item-container'>
            <img className="item-image" src={`https://image.tmdb.org/t/p/original/${image}`} alt="poster"/>
            <span className="name">{name}</span>
            <div className='watch-list-buttons'>
                <Button><span><PlayCircleOutlineIcon /></span>play now</Button>
                <Button onClick={removeItem}><span><RemoveCircleOutlineIcon /></span>remove</Button>
            </div>
        </div>
    )
}