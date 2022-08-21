import './home-categories-preview.styles.css';
import {Category} from '../category/category.component';
import { useInView } from 'react-intersection-observer';
export const HomeCategoriesPreview = ({tv,movie}) => {
    const {ref,inView} = useInView({
        threshold:0.2
    })

    return(
        <div className='home-categories-container' ref={ref}>
            <div className='home-category'>
                <h2>Movies</h2>
                <Category title="TOP RATED" fetchCategory={movie.topRated} type="movie" inView={inView}/>
                <Category title="POPULAR" fetchCategory={movie.popular} type="movie" inView={inView}/>
            </div>
            <div className='home-category'>
                <h2>Tv Shows</h2>
                <Category title="TOP RATED" fetchCategory={tv.topRated} type="tv" inView={inView}/>
                <Category title="POPULAR" fetchCategory={tv.popular} type="tv" inView={inView}/>
            </div>
        </div>
    )
    
}