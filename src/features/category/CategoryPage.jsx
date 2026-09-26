import { Link } from "react-router-dom"
import categories from "../menu/data/categories.json"

export default function CategoryPage() {
  return (
    <div className="main-container py-6">
      <div className="relative z-10 flex items-center justify-start mb-6 gap-4 bg-white rounded-xl px-4 py-3 shadow-sm">
        <Link to="/" className="text-main text-lg">
          <i className="fas fa-arrow-right"></i>
        </Link>
        <h2 className="text-xl font-bold text-gray-800">كل الفئات</h2>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {categories.map((cat) => (
          <Link
            to={`/category/${cat.id}`}
            key={cat.id}
            className="
              relative
              h-48 sm:h-56
              rounded-2xl
              overflow-hidden
              cursor-pointer
              bg-cover bg-center
              transition-transform duration-300
              hover:-translate-y-2
            "
            style={{ backgroundImage: `url(${cat.image})` }}
          >
            <div className="absolute inset-0 bg-[#9e7642]/20" />
            <span className="
              absolute
              inset-0
              text-center
              text-white
              text-base
              font-bold
              px-2
              flex
              items-center
              justify-center
            ">
              {cat.name}
            </span>
          </Link>
        ))}
      </div>
    </div>
  )
}