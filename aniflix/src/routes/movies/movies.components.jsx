import { MoviesPreview } from "../movie-preview/movie-preview.component";
import { CategoryItemPage } from "../../components/category-item-page/category-item-page.component";
import { Route,Routes } from "react-router-dom";
export const MoviesPage = () => {
    return(
        <div className="movie-page">
            <Routes>
                <Route index element={<MoviesPreview />}/>
                <Route path=":id" element={<CategoryItemPage type="movie" />}/>
            </Routes>
        </div>
    )
}