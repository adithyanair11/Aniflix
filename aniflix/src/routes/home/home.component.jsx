import {Outlet} from 'react-router-dom';
import { Banner } from '../../components/banner/banner.component';
import { Requests } from '../../utils/api/requests';
import {CategoriesPreview} from '../../components/categories-preview/categories-preview.component'
export const Home = () => {
    const {shows} = Requests;
    return(
        <div className='home-page'>
            <Outlet />
            <Banner fetchUrl={shows.topRated}/>
            <CategoriesPreview />
        </div>
    )
}