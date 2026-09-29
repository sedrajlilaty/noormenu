import { Link } from "react-router-dom"

export default function SearchBar() {
  return (
    <Link
      to="/search"
      dir="rtl"
      className="flex items-center w-full gap-2 bg-white border border-amber-200 rounded-full px-4 sm:px-5 py-3 sm:py-4"
    >
      <i className="fas fa-magnifying-glass text-gray-500"></i>
      <span className="flex-1 text-sm text-gray-400">ابحث عن منتجك المفضل...</span>
    </Link>
  )
}