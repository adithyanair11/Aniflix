import './search-page.styles.css';
import Modal from "react-responsive-modal";
import {useSelector,useDispatch} from 'react-redux';
import {selectSearchModal} from '../../store/search/search.selector';
import {setSearchModal} from '../../store/search/search.action';
import { SearchBox } from '../search-box/search-box.component';
import { useState,useEffect } from 'react';
import { baseUrl } from '../../utils/api/requests';
import { API_KEY } from '../../utils/api/requests';
import { fetchUrls } from '../../utils/api/fetchRequests';
import { CategoryItem } from '../category-item/category-item.component';
import 'react-responsive-modal/styles.css';
const styles = {
    modal: {
      backgroundColor: "transparent",
      boxShadow: "none",
      display: "flex",
      overflow: "none",
      width: "100%",
      height: "100%",
      minWidth: "100%",
      alignItems: "center",
      flexDirection: "column",
      padding: "20px"
    },
    overlay: {
        backdropFilter: "blur(16px) saturate(180%)",
        backgroundColor: "rgba(38, 38, 59, 0.75)"
    },
    closeIcon: {
        fill: "#fff"
      }
  };
export const SearchPage = () => {
    const dispatch  = useDispatch();
    const searchIconState = useSelector(selectSearchModal);
    const [searchField,setSearchField] = useState('');
    const [items,setItems] = useState([]);
    const [filterdItems,setFilteredItems] = useState(items);

    useEffect(() => {
        const fetchResults = async() => {
            try{
                const results = await fetchUrls(`${baseUrl}/search/multi?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${searchField}`);
                const filterItems = results.filter(item => {
                    const genreIdsExists = item.genre_ids?.find(id => id === 16);
                    if(genreIdsExists && item.original_language === 'ja'){
                    return item;
                    }
                })
                setItems(filterItems);
            }catch(err){
                console.log(err);
            }
        }
        fetchResults();
    },[searchField]);


   useEffect(() => {
        const newFilteredItems = items.filter(item => item.name?.toLowerCase().includes(searchField)??item.title.toLowerCase().includes(searchField));
        setFilteredItems(newFilteredItems);
   },[items,searchField])

    console.log(filterdItems);

    const handleChange = (e) => {
        const searchFieldString = e.target.value.toLowerCase();
        setSearchField(searchFieldString);
    }
    return(
        <Modal
        open={searchIconState}
        onClose={() => dispatch(setSearchModal(!searchIconState))}
        styles={styles}
        animationDuration={1000}
        focusTrapped={true}
        closeIconSize={40}
        showCloseIcon={true}
        center>
            <SearchBox 
            type="search" 
            placeholder="search" 
            handleChange={handleChange}/>
            <div className='search-items'>
                {
                    searchField ?
                    (filterdItems.map(item => <CategoryItem key={item.id} categoryItem={item} id={item.id}/>))
                    :
                    null
                }
            </div>
        </Modal>
    )
}