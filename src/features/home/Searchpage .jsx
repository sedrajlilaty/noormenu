import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import products from "../../shared/data/products.json"
import ProductCard from "../products/ProductCard"

export default function SearchPage() {
  const [query, setQuery] = useState("")
  const navigate = useNavigate()

  const results = query.trim()
    ? products.filter(p =>
        p.name.includes(query.trim()) || p.description.includes(query.trim())
      )
    : []

  return (
    <div className="px-4 py-6">
      <div className="flex items-center w-full bg-white border border-gray-200 rounded-full px-4 py-3 gap-3 mb-6">
        <button onClick={() => navigate(-1)} className="text-gray-500">
          <i className="fas fa-arrow-right"></i>
        </button>

        <input
          autoFocus
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="ابحث عن منتجك المفضل..."
          className="flex-1 min-w-0 bg-transparent outline-none text-sm text-right placeholder-gray-400"
        />

        <i className="fas fa-magnifying-glass text-gray-500"></i>
      </div>

      {query.trim() === "" && (
        <p className="text-center text-gray-400 py-10">اكتب اسم المنتج يلي بدك تدور عليه</p>
      )}

      {query.trim() !== "" && results.length === 0 && (
        <p className="text-center text-gray-400 py-10">ما في نتائج مطابقة</p>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {results.map((prod) => (
          <ProductCard key={prod.id} product={prod} />
        ))}
      </div>
    </div>
  )
}