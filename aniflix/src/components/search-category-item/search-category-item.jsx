import './search-category-item';
import { Link } from 'react-router-dom';
import {useSelector,useDispatch} from 'react-redux';
import {selectSearchModal} from '../../store/modal/modal.selector';
import {setSearchModal} from '../../store/modal/modal.action';

export const SearchCategoryItem = ({categoryItem,id}) => {
    const dispatch = useDispatch();
    const searchModalState = useSelector(selectSearchModal);

    const removeSearchModal = () => {
        dispatch(setSearchModal(false));
    }

    return(
        <Link className="item-link" to={`${id}`}>
        <div className='category-item' onClick={removeSearchModal}>
        <div className='background-image' style={{
            backgroundImage: `url("https://image.tmdb.org/t/p/original/${categoryItem?.poster_path}")`
        }}/>
        </div>
        </Link>
    )
}