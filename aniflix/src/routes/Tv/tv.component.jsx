import { Banner } from "../../components/banner/banner.component";
import { Requests } from "../../utils/api/requests";
import { CategoriesPreview } from "../../components/categories-preview/categories-preview.component";
export const TvPage = () => {
    const {shows} = Requests
    return(
        <div className="tv-page">
            <Banner fetchUrl={shows.topRated} />
            <CategoriesPreview type={shows}/>
        </div>
    )
}