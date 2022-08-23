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
import { CategoryItem } from '../category-item/category-item.component';
import {motion,Variants} from 'framer-motion';
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
      
    },
    overlay: {
        backdropFilter: "blur(3px) saturate(23%)",
        backgroundColor: "rgba(0,0,0,0.5)"
    },
    closeIcon: {
        fill: "#fff"
      }
  };
  const textAnimate = {
    offscreen: {y:100,opacity:0},
    onscreen: {
        y: 0,
        transition: {type:"spring"},
        bounce:0.4,
        duration:3,
        opacity:1
    }
}
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
                    placeholder="eg.naruto, death note" 
                    handleChange={handleChange}/>
                    <div className='search-items'>
                        {
                            searchField ?
                            (filterdItems.map(item => <CategoryItem key={item.id} categoryItem={item} type={item?.media_type} id={item.id}/>))
                            :
                            (<motion.h1 
                            className="empty-search"
                            initial={"offscreen"}
                            animate={"onscreen"}
                            variants={textAnimate}
                            >
                            What's on your mind?</motion.h1>)
                        }
                    </div>
                </Modal>)
                :
                null
        }
        </>
    )
}