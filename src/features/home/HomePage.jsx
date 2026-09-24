import FeatureProduct from "../menu/FeaturedProducts"
import CategoriesBar  from "../menu/CategoriesBar"
import CategoriesGrid from "../menu/Categoriesgrid"
import SearchBar from "../menu/SearchBar"
function HomePage()
{
   return(
    <>
    <div className="flex flex-col gap-6 py-4">
    <CategoriesBar/>
<CategoriesGrid/>
    <SearchBar/>
    <div>BannerSlider</div>
    <FeatureProduct/>
    </div>
    </>
   ) 

}


export default HomePage