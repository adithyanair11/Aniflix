import './category-item.styles.css';
import { Link } from 'react-router-dom';

export const CategoryItem = ({categoryItem,id,type}) => {
    
    return(
        <Link className="item-link" to={type ? `${type}/${id}` : `${id}`}>
        <div className='category-item'>
        <div className='background-image' style={{
            backgroundImage: `url("https://image.tmdb.org/t/p/original/${categoryItem?.poster_path}")`
        }}/>
        </div>
        </Link>
    )
}