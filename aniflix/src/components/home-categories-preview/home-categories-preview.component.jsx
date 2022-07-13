import './home-categories-preview.styles.css';
import {Category} from '../category/category.component';

export const HomeCategoriesPreview = ({tv,movie}) => {
    return(
        <div className='home-categories-container'>
            <div className='home-category'>
                <h2>Movies</h2>
                <Category title="TOP RATED" fetchCategory={movie.topRated} />
                <Category title="POPULAR" fetchCategory={movie.popular}/>
            </div>
            <div className='home-category'>
                <h2>Tv Shows</h2>
                <Category title="TOP RATED" fetchCategory={tv.topRated}/>
                <Category title="POPULAR" fetchCategory={tv.topRated}/>
            </div>
        </div>
    )
    
}