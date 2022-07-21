import './search-page.styles.css';
import Modal from "react-responsive-modal";
import {useSelector,useDispatch} from 'react-redux';
import {selectSearchModal} from '../../store/modal/modal.selector';
import {setSearchModal} from '../../store/modal/modal.action';
import { SearchBox } from '../search-box/search-box.component';
import { useState,useEffect } from 'react';
import { baseUrl } from '../../utils/api/requests';
import { API_KEY } from '../../utils/api/requests';
import { fetchUrls } from '../../utils/api/fetchRequests';
import { SearchCategoryItem } from '../search-category-item/search-category-item';
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
      padding: "10px"
    },
    overlay: {
        backdropFilter: "blur(2px) saturate(23%)",
        backgroundColor: "rgba(0,0,0,0.38)"
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

    const handleChange = (e) => {
        const searchFieldString = e.target.value.toLowerCase();
        setSearchField(searchFieldString);
    }
    return(
        <>
        {
            searchIconState ?
            (<Modal
                open={searchIconState}
                onClose={() => dispatch(setSearchModal(!searchIconState))}
                styles={styles}
                animationDuration={1000}
                focusTrapped={true}
                closeIconSize={40}
                showCloseIcon={true}
                closeOnOverlayClick={false}
                center>
                    <SearchBox 
                    type="search" 
                    placeholder="eg.naruto,dragon ball" 
                    handleChange={handleChange}/>
                    <div className='search-items'>
                        {
                            searchField ?
                            (filterdItems.map(item => <SearchCategoryItem key={item.id} categoryItem={item} id={item.id}/>))
                            :
                            null
                        }
                    </div>
                </Modal>)
                :
                null
        }
        </>
    )
}