import { Banner } from "../../components/banner/banner.component"
import { Requests } from "../../utils/api/requests"
import { CategoriesPreview } from "../../components/categories-preview/categories-preview.component"
export const MoviesPreview = () => {
    const {movie} = Requests
    return(
        <div className="movie-page">
            <Banner fetchUrl={movie.topRated}/>
            <CategoriesPreview type={movie}/>
        </div>
    )
}