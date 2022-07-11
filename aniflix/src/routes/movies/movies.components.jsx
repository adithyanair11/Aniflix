import { Banner } from "../../components/banner/banner.component"
import { Requests } from "../../utils/api/requests"
import { CategoriesPreview } from "../../components/categories-preview/categories-preview.component"
export const MoviesPage = () => {
    const {movies} = Requests
    return(
        <div className="movie-page">
            <Banner fetchUrl={movies.topRated}/>
            <CategoriesPreview type={movies}/>
        </div>
    )
}