import { useState } from "react"
import { useParams, Link } from "react-router-dom"
import categories from "../../shared/data/categories.json"
import products from "../../shared/data/products.json"
import SearchInCatrgories from "./SearchInCatrgories"
import ProductCard from "../products/ProductCard"

export default function CategoryPage() {
  const { id } = useParams()
  const [query, setQuery] = useState("")

  const category = categories.find(c => c.id === Number(id))

  if (!category) {
    return <p className="text-center py-10 text-gray-500">الفئة غير موجودة</p>
  }

  const categoryProducts = products.filter(p => p.categoryId === category.id)
  const visibleProducts = categoryProducts.filter(p => p.name.includes(query.trim()))

  return (
    <div className="px-4 py-6">
      <div className="relative z-10 flex items-center justify-start mb-6 gap-4 bg-white rounded-xl px-4 py-3 shadow-sm">
        <Link to="/" className="text-main text-lg">
          <i className="fas fa-arrow-right"></i>
        </Link>
        <h2 className="text-xl font-bold text-gray-800 flex-1 text-center">{category.name}</h2>
      </div>

      <div className="bg-white rounded-2xl shadow-sm p-5 mb-4 flex items-center gap-4">
        <img
          src={category.image}
          className="w-24 h-24 rounded-full object-cover border-2 border-main shrink-0"
        />
        <div>
          <h2 className="text-xl font-bold text-gray-800">{category.name}</h2>
          <p className="text-sm text-blue-600 mt-2">
            <i className="fas fa-list-ul ml-1"></i>
            إجمالي المنتجات: {categoryProducts.length}
          </p>
        </div>
      </div>

      <SearchInCatrgories
        categoryName={category.name}
        query={query}
        onChange={setQuery}
      />

      {visibleProducts.length === 0 ? (
        <p className="text-center text-gray-400 py-10">لا يوجد منتجات</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {visibleProducts.map((prod) => (
            <ProductCard key={prod.id} product={prod} />
          ))}
        </div>
      )}
    </div>
  )
}