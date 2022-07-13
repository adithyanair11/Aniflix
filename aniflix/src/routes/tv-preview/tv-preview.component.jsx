import { Banner } from "../../components/banner/banner.component";
import { Requests } from "../../utils/api/requests";
import { CategoriesPreview } from "../../components/categories-preview/categories-preview.component";

export const TvPreview = () => {
    const {tv} = Requests
    return(
        <>
        <Banner fetchUrl={tv.topRated} />
        <CategoriesPreview type={tv}/>
        </>
    )
}