import {Outlet} from 'react-router-dom';
import { Banner } from '../../components/banner/banner.component';
import {Requests} from '../../utils/api/requests'
import {HomeCategoriesPreview} from '../../components/home-categories-preview/home-categories-preview.component'
export const Home = () => {
    const {shows} = Requests;
    return(
        <div className='home-page'>
            <Outlet />
            <Banner fetchUrl={shows.topRated}/>
            <HomeCategoriesPreview />
        </div>
    )
}