import FeatureProduct from "../menu/FeaturedProducts"
import CategoriesBar  from "../menu/CategoriesBar"
import CategoriesGrid from "../menu/Categoriesgrid"
import SearchBar from "../menu/SearchBar"
import BannerSlider from "../menu/BannerSlider"
function HomePage()
{
   return(
    <>
    <div className="flex flex-col gap-6 py-4">
    <CategoriesBar/>
<CategoriesGrid/>
    <SearchBar/>
    <BannerSlider/>
    <FeatureProduct/>
    </div>
    </>
   ) 

}


export default HomePage