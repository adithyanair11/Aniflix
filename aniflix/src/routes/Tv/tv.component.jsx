import { Route,Routes } from "react-router-dom";
import { TvPreview } from "../tv-preview/tv-preview.component";
import { CategoryItemPage } from "../../components/category-item-page/category-item-page.component";
export const TvPage = () => {
    return(
        <div className="tv-page">
            <Routes>
                <Route index element={<TvPreview />}/>
                <Route path=":id" element={<CategoryItemPage type="tv" />}/>
            </Routes>
        </div>
    )
}