import './categories-preview.styles.css';
import { Category } from '../category/category.component';
export const CategoriesPreview = ({type}) => {
    return(
        <div className='categories-preview'>
            <Category title="TOP RATED" fetchCategory={type.topRated}/>
            <Category title="ACTION AND ADVENTURE" fetchCategory={type.actionAndAdvenure}/>
            <Category title="COMEDY" fetchCategory={type.comedy}/>
            <Category title="FANTASY AND SCI-FI" fetchCategory={type.fantasyAndSciFi}/>
            <Category title="ROMANCE" fetchCategory={type.romance}/>
            <Category title="DRAMA" fetchCategory={type.drama}/>
            <Category title="FAMILY AND KIDS" fetchCategory={type.family}/>
        </div>
    )
} 