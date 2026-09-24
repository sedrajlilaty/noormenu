import FeatureProduct from "../menu/FeaturedProducts"
import CategoriesBar  from "../menu/CategoriesBar"
import CategoriesGrid from "../menu/Categoriesgrid "
function HomePage()
{
   return(
    <>
    <div className="flex flex-col gap-6 py-4">
    <CategoriesBar/>
<CategoriesGrid/>
    <div>SearchBar</div>
    <div>BannerSlider</div>
    <FeatureProduct/>
    </div>
    </>
   ) 

}


export default HomePage