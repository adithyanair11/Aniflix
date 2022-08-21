import './categories-preview.styles.css';
import { Category } from '../category/category.component';
import { useInView } from 'react-intersection-observer';
export const CategoriesPreview = ({type}) => {
    const {ref,inView} = useInView({
        threshold:0.2
    })

    return(
        <div className='categories-preview' ref={ref}>
            <Category title="TOP RATED" fetchCategory={type.topRated} inView={inView}/>
            <Category title="ACTION AND ADVENTURE" fetchCategory={type.actionAndAdvenure} inView={inView}/>
            <Category title="COMEDY" fetchCategory={type.comedy} inView={inView}/>
            <Category title="FANTASY AND SCI-FI" fetchCategory={type.fantasyAndSciFi} inView={inView}/>
            <Category title="ROMANCE" fetchCategory={type.romance} inView={inView}/>
            <Category title="DRAMA" fetchCategory={type.drama} inView={inView}/>
            <Category title="FAMILY AND KIDS" fetchCategory={type.family} inView={inView}/>
        </div>
    )
} 