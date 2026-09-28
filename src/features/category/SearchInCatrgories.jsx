import { useState } from "react"

export default function SearchInCatrgories({ categoryName, query, onChange }) {
  return (
    <div className="flex items-center w-full bg-white border border-gray-200 rounded-full px-5 py-3 gap-3 mb-6">
      <i className="fas fa-magnifying-glass text-gray-500"></i>
      <input
        type="text"
        value={query}
        onChange={(e) => onChange(e.target.value)}
        placeholder={`ابحث في ${categoryName}...`}
        className="flex-1 min-w-0 bg-transparent outline-none text-sm text-right placeholder-gray-400"
      />
    </div>
  )
}