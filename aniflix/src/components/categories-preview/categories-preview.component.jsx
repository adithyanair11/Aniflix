import './categories-preview.styles.css';
import { Requests } from '../../utils/api/requests';
import { Category } from '../category/category.component';
export const CategoriesPreview = () => {
    const {movies,shows} = Requests;
    return (
        <div className='categories-container'>
            <h1>this is categories container</h1>
            <h1>this is categories container</h1>
            <h1>this is categories container</h1>
            <h1>this is categories container</h1>
            <h1>this is categories container</h1>
            <h1>this is categories container</h1>
            <h1>this is categories container</h1>
            <h1>this is categories container</h1>
            <h1>this is categories container</h1>
        </div>
    )
}