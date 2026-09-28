import { Link } from "react-router-dom"
import categories from "../../shared/data/categories.json"

export default function CategoriesGrid() {
  return (
    <div className="flex overflow-x-auto gap-3 pb-2 w-full [&::-webkit-scrollbar]:hidden pt-4">
      {categories.map((cat) => (
        <Link
          key={cat.id}
          to={`/category/${cat.id}`}
          className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 shrink-0 rounded-xl overflow-hidden cursor-pointer bg-cover bg-center transition-transform duration-300 hover:-translate-y-2 block"
          style={{ backgroundImage: `url(${cat.image})` }}
        >
          <div className="absolute inset-0 bg-[#9e7642]/40 backdrop-blur-[1px]" />
          
          <span className="absolute inset-0 text-center text-white text-sm font-bold px-2 flex items-center justify-center">
            {cat.name}
          </span>
        </Link>
      ))}
    </div>
  )
}