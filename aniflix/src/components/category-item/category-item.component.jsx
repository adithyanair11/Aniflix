import './category-item.styles.css';


export const CategoryItem = ({categoryItem}) => {
    return(
        <div className='category-item'>
            <div className='background-image-container'>
            <div className='background-image' style={{
                backgroundImage: `url("https://image.tmdb.org/t/p/original/${categoryItem?.poster_path}")`
            }}/>
            </div>
        </div>
    )
}