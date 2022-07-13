import './watch-list.styles.css';
import { useSelector } from 'react-redux';
import { selectWatchList } from '../../store/profile/profile.selector';
import { WatchListItem } from '../../components/watch-list-item/watch-list-item.component';
export const WatchListPage = () => {
    const items = useSelector(selectWatchList);
    return(
        <div className='watch-list-page'>
        {
            items.length ?
            (<div className='watch-list-container'>
            {
                items.map(item => <WatchListItem key={item?.id} image={item?.poster_path} name={item?.name || item?.title} item={item}/>)
            }
            </div>)
            :
            (<h1 className='empty'>WATCH LIST IS EMPTY</h1>)
        }
        </div>
    
    )
}