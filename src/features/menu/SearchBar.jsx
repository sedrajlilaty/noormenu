export default function SearchBar({ value, onChange }) {
  return (
    <div className="flex items-center w-full bg-white border border-amber-200 rounded-full px-4 sm:px-5 py-3 sm:py-4 min-h-[45px] gap-4">
      <i className="fas fa-magnifying-glass text-gray-500"></i>
      <input
        type="text"
        value={value}
        placeholder="ابحث عن منتجك المفضل..."
        className="flex-1 min-w-0 bg-transparent outline-none text-sm text-right placeholder-gray-400"
        onChange={onChange}
      />
    </div>
  )
}