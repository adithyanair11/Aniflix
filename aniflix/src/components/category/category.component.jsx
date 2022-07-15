import './category.styles.css';
import { useEffect,useState } from 'react';
import { fetchUrls } from '../../utils/api/fetchRequests';
import { CategoryItem } from '../category-item/category-item.component';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useRef } from 'react';
export const Category = ({title,fetchCategory}) => {
    const [categoryArray, setCategoryArray] = useState([]);
    const [slideNumber,setSlideNumber] = useState(0);
    useEffect(() => {
        const categoryResults = async() => {
            const results = await fetchUrls(fetchCategory);
            setCategoryArray(results);
            return results;
        }
        categoryResults();
    },[]);
    const itemRef = useRef();
    const handleClick = (direction) => {
        let distance = itemRef.current.getBoundingClientRect().x - 20;
        if(direction === 'left' && slideNumber > 0){
            setSlideNumber(slideNumber-1);
            itemRef.current.style.
            transform = `translateX(${168 + distance}px)`;
        }
        if(direction === 'right' && slideNumber < Math.floor(categoryArray.length/2)){
            setSlideNumber(slideNumber+1)
            itemRef.current.style.transform = `translateX(${-168 + distance}px)`;
        }
    }
    return(
        <div className='category'>
            <h3 className='category-type'>{title}</h3>
            <div className='category-container'>
                <div className='backward arrow-container'>
                    <ArrowBackIosNewIcon onClick={() => handleClick('left')} />
                </div>
                <div className='container' ref={itemRef}>
                {
                     categoryArray.map((categoryItem) => <CategoryItem  key={categoryItem.id}categoryItem={categoryItem} id={categoryItem.id}/>)
                }
                </div>
                <div className='forward arrow-container'>
                    <ArrowForwardIosIcon onClick={() => handleClick('right')} />
                 </div>
            </div>
        </div>
    )
}