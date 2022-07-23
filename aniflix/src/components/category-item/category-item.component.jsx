import './category-item.styles.css';
import { Link } from 'react-router-dom';
import {setSearchModal} from '../../store/modal/modal.action';
import {useSelector,useDispatch} from 'react-redux';
import {selectSearchModal} from '../../store/modal/modal.selector';
export const CategoryItem = ({categoryItem,id,type}) => {
    const dispatch = useDispatch();
    const searchModalState = useSelector(selectSearchModal);
    const removeSearchModal = () => {
        dispatch(setSearchModal(false));
    }
    return(
        <Link className="item-link" to={type ? `${type}/${id}` : `${id}`}>
        <div className='category-item' onClick={searchModalState ? removeSearchModal : null}>
        <div className='background-image' style={{
            backgroundImage: `url("https://image.tmdb.org/t/p/original/${categoryItem?.poster_path}")`
        }}/>
        </div>
        </Link>
    )
}