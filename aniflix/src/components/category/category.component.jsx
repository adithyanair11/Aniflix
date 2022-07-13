import './category.styles.css';
import { useEffect,useState } from 'react';
import { fetchUrls } from '../../utils/api/fetchRequests';
import { CategoryItem } from '../category-item/category-item.component';

export const Category = ({title,fetchCategory}) => {
    const [categoryArray, setCategoryArray] = useState([]);
    useEffect(() => {
        const categoryResults = async() => {
            const results = await fetchUrls(fetchCategory);
            setCategoryArray(results);
            return results;
        }
        categoryResults();
    },[]);
    return(
        <div className='category'>
            <h3 className='category-type'>{title}</h3>
            <div className='category-container'>
                {
                    categoryArray.map((categoryItem) => <CategoryItem key={categoryItem.id}categoryItem={categoryItem} id={categoryItem.id}/>)
                }
            </div>
        </div>
    )
}