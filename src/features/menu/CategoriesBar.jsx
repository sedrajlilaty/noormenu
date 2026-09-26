import { useNavigate } from "react-router-dom"

export default function CategoriesBar()
{
    const navigate=useNavigate()
    return (
        <div className="flex items-center justify-between ">
           
            <h2 className="text-xl font-bold text-gray-800">الفئات</h2>
      <button className="text-sm text-amber-700 hover:underline"onClick={() => navigate("/categories")}>
        عرض الكل
      </button>
        </div>
    )
}