import categories from "./data/categories.json"
export default function CategoriesGrid() {
  return (
    <div dir="rtl" className="flex flex-wrap justify-end gap-4 mb-8">
      {categories.map((cat) => (
        <div
          key={cat.name}
          className="relative w-32 h-32 rounded-xl overflow-hidden cursor-pointer bg-cover bg-center"
          style={{ backgroundImage: `url(${cat.image})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
          <span className="absolute bottom-2 inset-x-0 text-center text-white text-sm font-bold px-1 leading-tight">
            {cat.name}
          </span>
        </div>
      ))}
    </div>
  );
}
 