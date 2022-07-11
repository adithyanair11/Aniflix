import './home-categories-preview.styles.css';
import { Requests } from '../../utils/api/requests';
import {Category} from '../category/category.component';


export const HomeCategoriesPreview = () => {
    const {shows,movies} = Requests
    return(
        <div className='home-categories-container'>
            <div className='home-category'>
                <h2>Movies</h2>
                <Category title="TOP RATED" fetchCategory={movies.topRated} />
                <Category title="POPULAR" fetchCategory={movies.popular}/>
            </div>
            <div className='home-category'>
                <h2>Tv Shows</h2>
                <Category title="TOP RATED" fetchCategory={shows.topRated}/>
                <Category title="POPULAR" fetchCategory={shows.topRated}/>
            </div>
        </div>
    )
    
}