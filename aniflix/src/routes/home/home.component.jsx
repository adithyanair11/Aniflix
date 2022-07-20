import { Route,Routes } from "react-router-dom";
import { HomePreview } from "../home-preview/home-preview.component";
import { CategoryItemPage } from "../../components/category-item-page/category-item-page.component";

export const Home = () => {
    return(
        <div className='home-page'>
            <Routes>
                <Route index element={<HomePreview />} />
                <Route path="movie/:id" element={<CategoryItemPage type="movie" />} />
                <Route path="tv/:id" element={<CategoryItemPage type="tv" />} />
            </Routes>
        </div>
    )
}